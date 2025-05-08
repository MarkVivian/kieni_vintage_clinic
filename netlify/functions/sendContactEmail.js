// netlify/functions/sendContactEmail.js

exports.handler = async (event) => {
  try {
    // 1) Parse the incoming form data
    const { name, email, phone, department, message } = JSON.parse(event.body);

    // 2) Build the Sendinblue (Brevo) payload
    const payload = {
      sender: {
        name:  "Clinic Website",
        email: process.env.BREVO_FROM_EMAIL,   // e.g. "noreply@clinicdomain.com"
      },
      to: [
        { email: process.env.BREVO_TO_EMAIL }  // e.g. "reception@clinic.com"
      ],
      replyTo: { email, name },
      subject: `New Contact: ${name}`,
      textContent: `
Name:       ${name}
Email:      ${email}
Phone:      ${phone}
Department: ${department || "Not specified"}

Message:
${message}
      `.trim(),
    };

    // 3) Call the Sendinblue API via the **global** fetch
    const response = await fetch(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        method:  "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key":       process.env.BREVO_API_KEY,
        },
        body: JSON.stringify(payload),
      }
    );

    // 4) If Brevo returns an error status, capture it
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo API error:", response.status, errorText);
      return {
        statusCode: response.status,
        body: errorText,
      };
    }

    // 5) On success, return a 200
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (err) {
    // Catch JSON parse errors or unexpected crashes
    console.error("Function exception:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
