import SignOutButton from "@/components/ui/SignOutButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Out",
  description: "Sign Out",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};
export default function page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold">
        Click the button below to sign out
      </h2>
      <SignOutButton />
    </div>
  );
}
