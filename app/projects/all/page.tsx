import AllProjectList from "@/components/project/all/AllProjectList";
import ProjectsSkleton from "@/components/project/all/ProjectsSkeleton";
import { Suspense } from "react";

export default async function page() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:mb-6">
        <Suspense fallback={<ProjectsSkleton />}>
          <AllProjectList />
        </Suspense>
      </div>
    </section>
  );
  // return <AllProject projects={projects} />;
}
