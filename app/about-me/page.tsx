import AboutMe from "@/components/about/AboutMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Introducing all information about myself",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};
function Page() {
  return (
    <section className="h-full w-full">
      <AboutMe />
    </section>
  );
}

export default Page;
