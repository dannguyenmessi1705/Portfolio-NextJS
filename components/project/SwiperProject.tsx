"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperClass } from "swiper/types";
import Image from "next/image";
import SliderButton from "./SliderButton";
import { type Project } from "@/lib/data";
import noImage from "@/public/assets/no-image.svg";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 0.5, ease: "easeIn" },
      }}
      className="relative mb-12 xl:mb-0 xl:h-full"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="relative mb-12 xl:mb-0 xl:h-full "
        onSlideChange={handleChangeSlide}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="group relative flex h-[220px] items-center justify-center bg-accent-500/40 sm:h-[360px] md:h-[480px] xl:h-5/6">
                <div className="absolute inset-0 z-10 bg-transparent"></div>
                <div className="relative aspect-square h-full w-full">
                  <Image
                    src={project.image ? `${project.image}` : noImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover"
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <SliderButton
          containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none xl:mt-2 focus:ring-0 focus:ring-offset-0 focus:outline-none border-none shadow-none"
          buttonStyle="bg-accent-600 hover:bg-accent-700 text-primary-950 text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300 focus:ring-0 focus:ring-offset-0 focus:outline-none border-none shadow-none"
          iconStyle="focus:ring-0 focus:ring-offset-0 focus:outline-none border-none shadow-none"
        />
      </Swiper>
    </motion.div>
  );
}
