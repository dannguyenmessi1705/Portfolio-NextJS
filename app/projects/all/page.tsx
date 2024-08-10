import AllProjectList from "@/components/project/all/AllProjectList";
import ProjectsSkleton from "@/components/project/all/ProjectsSkeleton";
import { Suspense } from "react";

export const revalidate = 86400; // Sử dụng cache cũ, sau 1 ngày, trang sẽ được tạo lại (refresh) để cập nhật dữ liệu mới

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
