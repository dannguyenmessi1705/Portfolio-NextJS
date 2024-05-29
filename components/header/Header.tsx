import Link from "next/link";
import { Button } from "@/components/ui/button";

import Navigation from "@/components/header/Navigation";
import NavigationMobile from "@/components/header/NavigationMobile";

export default function Header() {
  return (
    <header className="py-6 text-primary-50 xl:py-9">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">ZDiDane</h1>
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          <Navigation />
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <NavigationMobile />
        </div>
      </div>
    </header>
  );
}
