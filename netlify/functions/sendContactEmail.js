// netlify/functions/sendContactEmail.js
const fetch = require("node-fetch"); // if needed, add node-fetch to package.json

exports.handler = async (event) => {
  try {
    const { name, email, phone, department, message } = JSON.parse(event.body);

    // Build Brevo payload
    const payload = {
      sender: { name: "Clinic Website", email: process.env.BREVO_FROM_EMAIL },
      to: [{ email: process.env.BREVO_TO_EMAIL }],
      replyTo: { email, name },
      subject: `New Contact: ${name}`,
      textContent: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Department: ${department || "Not specified"}

Message:
${message}
      `,
    };

    // Call Brevo API
    const res = await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (res.status >= 200 && res.status < 300) {
      return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } else {
      const errorText = await res.text();
      console.error("Brevo error:", res.status, errorText);
      return { statusCode: res.status, body: errorText };
    }
  } catch (err) {
    console.error("Function error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
