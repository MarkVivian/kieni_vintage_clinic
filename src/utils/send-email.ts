"use server"

interface EmailData {
  to: string
  subject: string
  message: string
}

export async function sendEmail({ to, subject, message }: EmailData): Promise<void> {
  // In a real application, you would use a service like SendGrid, Mailgun, or AWS SES
  // For this example, we'll simulate sending an email with a delay

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Log the email data (in a real app, this would be sent to an email service)
  console.log("Email sent:")
  console.log("To:", to)
  console.log("Subject:", subject)
  console.log("Message:", message)

  // In a real application, you would have code like this:
  /*
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  const msg = {
    to,
    from: 'your-clinic-email@example.com',
    subject,
    text: message,
  }
  
  await sgMail.send(msg)
  */

  // For demonstration purposes, we'll just return success
  return Promise.resolve()
}
