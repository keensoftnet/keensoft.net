import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Keen Software",
  description:
    "Get in touch with the Keen Software team. We'd love to hear about your project.",
};

export default function ContactPage() {
  return <ContactClient />;
}
