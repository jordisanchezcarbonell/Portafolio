import { sendEmail } from "@/utils/sendEmail";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <form
    className="mt-10 flex flex-col gap-5"
    action={async (formData: FormData) => {
      "use server";
      await sendEmail(formData);
    }}
  >
    <input
      className="h-14 px-4 rounded-lg borderBlack"
      name="senderEmail"
      type="email"
      required
      maxLength={500}
      placeholder="Your email"
    />

    <textarea
      className="h-14 px-4 rounded-lg borderBlack"
      name="message"
      required
      maxLength={500}
      placeholder="Your message"
    />

    <button type="submit" className="h-14 px-4 text-white bg-black rounded-lg">
      Send
    </button>
  </form>
);

export default EmailTemplate;
