"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("senderEmail");
  const message = formData.get("message");
  console.log(email, message);
  if (!email || !message || typeof message !== "string") {
    return Response.json({ error: "Email and name are required" });
  }
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev", "jordigw@gmail.com"],
      subject: "Hello world",
      text: message,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
};
