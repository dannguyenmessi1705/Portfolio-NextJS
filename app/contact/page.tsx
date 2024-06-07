import Contact from "@/components/contact/Contact";
import FormContact from "@/components/contact/FormContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This page shows the contact form of Nguyễn Di Đan.",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

function Page() {
  return (
    <Contact>
      <FormContact />
    </Contact>
  );
}

export default Page;
