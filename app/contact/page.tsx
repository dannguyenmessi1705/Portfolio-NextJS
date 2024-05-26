import Contact from "@/components/Contact";
import FormContact from "@/components/FormContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This page shows the contact form of Di Dan Nguyen.",
}

function Page() {
  return (
    <Contact>
      <FormContact />
    </Contact>
  );
}

export default Page;
