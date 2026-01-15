import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_da09h58",
        "template_yw4rbnm",
        formRef.current,
        "HcJeayLlCMe-lCsHN"
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
  console.error("EmailJS error:", error);
  setStatus("error");
}
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-4 max-w-lg">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full border p-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="w-full border p-2"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={5}
        className="w-full border p-2"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="primary-button-colour px-4 py-2 rounded-md  transition duration-500"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-green-600">Message sent successfully!</p>
      )}

      {status === "error" && (
        <p className="text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
