import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header/Header";
// import PageTransition from "@/components/transition/PageTransition";
// import CoverTransition from "@/components/transition/CoverTransition";
import { SocketProvider } from "@/contexts/SocketProvider";
import { StarCanvas } from "@/components/transition/StarBackground";
import { jetbrains } from "./font";

export const metadata: Metadata = {
  title: {
    template: "%s | Di Dan Nguyen",
    default: "Di Dan Nguyen's Portfolio",
  },
  description: "Portfolio of Nguyễn Di Đan",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrains.className}>
      <head />
      <body>
        <StarCanvas />
        <SocketProvider>
          <Header />
          <main className="h-full w-full">
            {/* <CoverTransition> */}
            {/* </CoverTransition> */}

            {/* <PageTransition> */}
              {children}
              <SpeedInsights />
            {/* </PageTransition> */}
          </main>
        </SocketProvider>
      </body>
    </html>
  );
}
