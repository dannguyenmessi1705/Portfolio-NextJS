import { FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Socials from "@/components/homepage/Socials";
import Photo from "@/components/homepage/Photo";
import StatsDisplay from "@/components/homepage/StatsDisplay";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:mb-6">
        <div className="xl:pb-18 flex flex-col items-center justify-between xl:flex-row xl:pt-4">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-4">
              Hi I&apos;m <br />{" "}
              <span className="text-accent-600">Di Dan N.</span>
            </h1>
            <p className="mb-6 max-w-[500px] text-primary-200">
              I am a person who is always eager to learn new technologies and
              frameworks. Started as a backend developer, recently I am trying
              to push my boundaries by diving into software engineer with the
              aspiration to become a leading expert in this field.
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download my CV</span>
                <FaDownload className="text-xl" />
              </Button>

              <div className="mb-6 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>

          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Suspense>
        <StatsDisplay />
      </Suspense>
    </section>
  );
}
