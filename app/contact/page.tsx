import FormContact from "@/components/contact/FormContact";
import InfoContact from "@/components/contact/InfoContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This page shows the contact form of Nguyễn Di Đan.",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

function Page() {
  return (
    <section className="py-2">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[60%]">
            <FormContact />
          </div>

          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <InfoContact />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;

/*
    <Contact>
      <FormContact />
    </Contact>
<motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="py-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[60%]">{children}</div>

          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <InfoContact />
          </div>
        </div>
      </div>
    </motion.section>
*/
