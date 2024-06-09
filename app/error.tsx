"use client";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
  description: "Something went wrong",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};
export default function Error({ error, reset }: { error: any; reset: any }) {
  return (
    <section className="h-full w-full">
      <div className="container mx-auto">
        <div className="mt-10 flex flex-col items-center justify-center gap-10">
          <h1 className="text-3xl font-semibold">Something went wrong!</h1>
          <p className="text-lg">{error.message}</p>

          <button
            className="flex items-center gap-6 rounded-sm border border-accent-800 bg-accent-700 px-10 py-4 text-lg font-medium text-primary-950 transition-all duration-300 hover:border-primary-900 hover:bg-accent-600"
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </div>
    </section>
  );
}
