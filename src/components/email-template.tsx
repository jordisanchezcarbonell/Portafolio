"use client";
import * as React from "react";
import { useToast } from "./ui/use-toast";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = () => {
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("senderEmail");
    const message = formData.get("message");

    console.log("1----", email);
    console.log("2----", message);
    const response = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, message: message }),
    });

    if (response.ok) {
      formRef.current?.reset();
      toast({
        description: "Your message has been sent.",
      });
    }
    setLoading(false);
  };

  return (
    <form
      ref={formRef}
      className="mt-10 flex flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <input
        className="h-14 px-4 rounded-lg bg-gray-100 dark:bg-gray-800"
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
      />
      <textarea
        className="h-14 px-4 rounded-lg bg-gray-100 dark:bg-gray-800"
        name="message"
        required
        maxLength={500}
        placeholder="Your message"
      />

      <button
        type="submit"
        className={`h-14 px-4 text-white rounded-lg ${
          loading ? "bg-gray-500" : "bg-black"
        }`}
        disabled={loading}
      >
        {loading ? "Loading..." : "Send"}
      </button>
    </form>
  );
};

export default EmailTemplate;
