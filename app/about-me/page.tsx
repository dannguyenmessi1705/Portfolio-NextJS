import AboutMe from "@/components/about/AboutMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Introducing all information about myself",
};
function Page() {
  return <AboutMe />;
}

export default Page;
