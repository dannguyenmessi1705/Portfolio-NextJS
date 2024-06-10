import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This page could not be found",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};
function NotFound({
  message = "This page could not be found :(",
}: {
  message: string;
}) {
  return (
    <section className="h-full w-full">
      <div className="container mx-auto">
        <div className="mt-10 flex flex-col items-center justify-center gap-10">
          <h1 className="text-center text-3xl font-semibold">{message}</h1>
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-6 rounded-sm border border-accent-800 bg-accent-700 px-10 py-4 text-lg font-medium text-primary-950 transition-all duration-300 hover:border-primary-900 hover:bg-accent-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
