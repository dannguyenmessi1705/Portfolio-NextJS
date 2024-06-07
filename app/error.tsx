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
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-700 px-6 py-3 text-lg text-primary-50 rounded-sm hover:bg-accent-600 transition-colors"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
