import dynamic from "next/dynamic";
const Biography = dynamic(() => import("@/components/about/Biography"));
const Experience = dynamic(() => import("@/components/about/Experience"));
const Education = dynamic(() => import("@/components/about/Education"));
const Skills = dynamic(() => import("@/components/about/Skills"));
import { biography, experience, education, skills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Introducing all information about myself",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};
function Page() {
  return (
    <section className="h-full w-full">
      <div className="flex min-h-[70vh] items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs
            defaultValue="biogrophy"
            className="flex flex-col gap-16 xl:flex-row"
          >
            <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
              <TabsTrigger value="biogrophy">Biogrophy</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent
                value="biogrophy"
                className="w-full text-center xl:text-left"
              >
                <Biography biography={biography} />
              </TabsContent>
              <TabsContent value="experience" className="h-full w-full">
                <Experience experience={experience} />
              </TabsContent>
              <TabsContent value="education" className="h-full w-full">
                <Education education={education} />
              </TabsContent>
              <TabsContent value="skills" className="h-full w-full">
                <Skills skills={skills} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Page;
