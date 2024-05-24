import Link from "next/link";
import { Button } from "./ui/button";

import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-primary-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          Logo
          <h1 className="text-4xl font-semibold">ZDiDane</h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
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
