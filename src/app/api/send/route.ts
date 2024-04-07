import { Resend } from "resend";
import MessageUsEmail from "@/components/MessageUsEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email as string;
    const message = body.message as string;
    console.log("1----", email);
    console.log("2----", message);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jordigw@gmail.com"],
      subject: "Hello world",
      react: MessageUsEmail({ email, message }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
