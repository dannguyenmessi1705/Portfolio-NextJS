import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header/Header";
import PageTransition from "@/components/transition/PageTransition";
import CoverTransition from "@/components/transition/CoverTransition";
import { SocketProvider } from "@/contexts/SocketProvider";
import { StarCanvas } from "@/components/homepage/StarBackground";

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Di Dan Nguyen",
    default: "Di Dan Nguyen's Portfolio",
  },
  description: "Portfolio of Di Dan Nguyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={jetbrains.className}>
        <main className="h-full w-full">
          <SocketProvider>
            <StarCanvas />
            <Header />
            <CoverTransition />
            <PageTransition>{children}</PageTransition>
          </SocketProvider>
        </main>
      </body>
    </html>
  );
}
