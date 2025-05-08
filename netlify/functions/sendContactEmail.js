// netlify/functions/sendContactEmail.js
const sendgrid = require("@sendgrid/mail");

// Load your API key from Netlify environment vars
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  try {
    // Parse the incoming POST body (JSON)
    const data = JSON.parse(event.body);

    // Destructure form fields
    const { name, email, phone, department, message } = data;

    // Compose the email
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,               // Clinic’s inbox
      from: process.env.SENDGRID_FROM_EMAIL,           // Verified sender
      subject: `New Contact Form Submission: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Department: ${department || "Not specified"}`,
        `Message: ${message}`,
      ].join("\n\n"),
    };

    // Send it!
    await sendgrid.send(msg);

    // Netlify function success response
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: err.code || 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
