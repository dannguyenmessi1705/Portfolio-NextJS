import Project from "@/components/project/Project";
import { getProjectsAction } from "@/lib/serverAction";
import { Metadata } from "next";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Project",
  description:
    "This is a project page of Nguyễn Di Đan where you can view all the projects that I have worked on.",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

async function getData(page: string = "0") {
  const data = await getProjectsAction(page);
  return data;
}

async function Page() {
  const session = await auth();
  const projects = await getData();
  return <Project projects={projects} session={session} />;
}

export default Page;
