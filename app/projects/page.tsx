import { Metadata } from "next";
import { auth } from "@/lib/auth";
import ProjectListCard from "@/components/project/ProjectListCard";
import { Suspense } from "react";
import ProjectSkeleton from "@/components/project/ProjectSkeleton";

export const metadata: Metadata = {
  title: "Project",
  description:
    "This is a project page of Nguyễn Di Đan where you can view all the projects that I have worked on.",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

async function Page() {
  const session = await auth();
  return (
    <>
      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectListCard session={session} />
      </Suspense>
    </>
  );
}

export default Page;
