import Link from "next/link";
import { Button } from "@/components/ui/button";

import Navigation from "@/components/header/Navigation";
import NavigationMobile from "@/components/header/NavigationMobile";

export default function Header() {
  return (
    <header className="py-6 xl:py-9 text-primary-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
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
