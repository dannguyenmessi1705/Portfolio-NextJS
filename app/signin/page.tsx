import SignInButton from "@/components/ui/SignInButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to access admin action",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};
export default function page() {
  return (
    <section className="h-full w-full">
      <div className="container mx-auto h-full xl:mb-6">
        <div className="mt-10 flex h-full flex-col items-center justify-center gap-10">
          <h2 className="text-center text-3xl font-semibold">
            Sign in to access admin action
          </h2>
          <SignInButton />
        </div>
      </div>
    </section>
  );
}
