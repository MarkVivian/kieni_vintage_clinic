"use client"

import type React from "react";
import { useState, type FormEvent } from "react";
import { useInView } from "../utils/scroll-observer";
import { colors } from "../utils/colors";
import { FaChevronDown, FaPaperPlane, FaExclamationCircle } from "react-icons/fa";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

export function ContactForm() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const res = await fetch("/.netlify/functions/sendContactEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Unknown error");
      }

      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError("Sorry, we couldn’t send your message. Please try again later.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={ref}>
      <form
        id="contact-form"
        className="space-y-6"
        onSubmit={handleSubmit}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {submitSuccess && (
          <div className="p-4 rounded-md bg-green-50 text-green-700 mb-4">
            Your message has been sent successfully! We'll get back to you soon.
          </div>
        )}

        {submitError && <div className="p-4 rounded-md bg-red-50 text-red-700 mb-4">{submitError}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-2" style={{ color: colors.text.dark }}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded transition-all duration-300 focus:ring-2 focus:ring-primary/50 ${
                  errors.name ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                  <FaExclamationCircle />
                </div>
              )}
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-2" style={{ color: colors.text.dark }}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded transition-all duration-300 focus:ring-2 focus:ring-primary/50 ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Your email"
              />
              {errors.email && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                  <FaExclamationCircle />
                </div>
              )}
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-2" style={{ color: colors.text.dark }}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded transition-all duration-300 focus:ring-2 focus:ring-primary/50 ${
                errors.phone ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="e.g., 07xx xxx xxx"
            />
            {errors.phone && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                <FaExclamationCircle />
              </div>
            )}
          </div>
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="department" className="block font-medium mb-2" style={{ color: colors.text.dark }}>
            Department
          </label>
          <div className="relative">
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded appearance-none pr-8 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
              style={{ borderColor: "#e2e8f0" }}
            >
              <option value="">Select department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="general">General Medicine</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FaChevronDown style={{ color: colors.text.light }} />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-2" style={{ color: colors.text.dark }}>
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded transition-all duration-300 focus:ring-2 focus:ring-primary/50 ${
                errors.message ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Your message"
            ></textarea>
            {errors.message && (
              <div className="absolute right-3 top-5 text-red-500">
                <FaExclamationCircle />
              </div>
            )}
          </div>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 rounded-button font-medium shadow-md whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ backgroundColor: colors.primary, color: "white" }}
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
}