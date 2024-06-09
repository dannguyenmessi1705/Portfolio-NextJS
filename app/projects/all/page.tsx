import AllProjectList from "@/components/project/all/AllProjectList";
import ProjectsSkeleton from "@/components/project/all/ProjectsSekeleton";
import { Suspense } from "react";

export default async function page() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:mb-6">
        <Suspense fallback={<ProjectsSkeleton />}>
          <AllProjectList />
        </Suspense>
      </div>
    </section>
  );
  // return <AllProject projects={projects} />;
}
