import { FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Socials from "@/components/homepage/Socials";
import Photo from "@/components/homepage/Photo";
import StatsDisplay from "@/components/homepage/StatsDisplay";
import { Suspense } from "react";
import Stats from "@/components/homepage/Stats";
import { getProjectsAction } from "@/lib/serverAction";

async function getData() {
  const data = await getProjectsAction();
  return data?.length;
}

export default async function Home() {
  const numProjects = await getData();
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
              <form action="/assets/cv/cv.pdf" method="get">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Download my CV</span>
                  <FaDownload className="text-xl" />
                </Button>
              </form>

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

      <Suspense fallback={<Stats codeCommits={0} currentStreaks={0} numProjects={0}/>}>
        <StatsDisplay numProjects={numProjects}/>
      </Suspense>
    </section>
  );
}
