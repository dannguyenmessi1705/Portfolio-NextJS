"use client";
import { motion } from "framer-motion";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "../ui/tabs";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";
import Skills from "@/components/about/Skills";
import Biogrophy from "@/components/about/Biogrophy";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[70vh] items-center justify-center py-12 xl:py-0"
    >
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
              <Biogrophy />
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="skills" className="h-full w-full">
              <Skills />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
