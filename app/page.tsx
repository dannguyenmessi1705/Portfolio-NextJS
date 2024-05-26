import { FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import StatsDisplay from "@/components/StatsDisplay";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto xl:mb-6">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-18">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-4">
              Hi I&apos;m <br />{" "}
              <span className="text-accent-600">Di Dan N.</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-primary-200">
              I am a person who is always eager to learn new technologies and
              frameworks. Started as a backend developer, recently I am trying
              to push my boundaries by diving into software engineer with the
              aspiration to become a leading expert in this field.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download my CV</span>
                <FaDownload className="text-xl" />
              </Button>

              <div className="mb-6 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <StatsDisplay />
    </section>
  );
}
