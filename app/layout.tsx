import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import PageTransition from "@/components/transition/PageTransition";
import CoverTransition from "@/components/transition/CoverTransition";

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  display: "fallback",
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
      <body className={jetbrains.className}>
        <Header />
        <CoverTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
