"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperClass } from "swiper/types";
import Image from "next/image";
type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  languages: { name: string }[];
  image: string;
  demo: string | null;
  source: string | null;
};
export default function SwiperProject({
  projects,
  setProject,
}: {
  projects: Project[];
  setProject: Function;
}) {
  const handleChangeSlide = (swiper: SwiperClass) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      className="xl:h-[464px] mb-12"
      onSlideChange={handleChangeSlide}
    >
      {projects.map((project, index) => {
        return (
          <SwiperSlide key={index} className="w-full">
            <div className="h-[420px] relative group flex justify-center items-center bg-accent-500/40">
              <div></div>

              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  fill
                  className="object-cover"
                  alt={project.title}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
