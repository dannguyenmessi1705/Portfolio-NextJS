import Project from "@/components/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "This is a project page of Di Dan Nguyen where you can view all the projects that I have worked on."
}

function Page() {
  return <Project />;
}

export default Page;
