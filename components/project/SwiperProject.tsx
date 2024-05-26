import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperClass } from "swiper/types";
import Image from "next/image";
import SliderButton from "./SliderButton";
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
            <div className="h-[400px] relative group flex justify-center items-center bg-accent-500/40">
              <div className="absolute top-0 bottom-0 w-full h-full bg-primary-950/10 z-10"></div>

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
      <SliderButton
        containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none xl:mt-2"
        buttonStyle="bg-accent-600 hover:bg-accent-700 text-primary-950 text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300"
      />
    </Swiper>
  );
}
