import Link from "next/link";

function NotFound({
  message = "This page could not be found :(",
}: {
  message: string;
}) {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">{message}</h1>
      <Link
        href="/"
        className="inline-block rounded-sm bg-accent-700 px-6 py-3 text-lg text-primary-50 transition-colors hover:bg-accent-600"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
