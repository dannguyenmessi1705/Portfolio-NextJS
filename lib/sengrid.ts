import { type MailDataRequired, default as sendgrid } from "@sendgrid/mail";

export default async function sendEmail(mail: MailDataRequired) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
  try {
    await sendgrid.send(mail);
  } catch (error) {
    throw new Error("Failed to send email.");
  }
}
