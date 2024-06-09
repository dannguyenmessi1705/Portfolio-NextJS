import { type ReactNode } from "react";
import { Button } from "./button";

export default function SubmitButton({
  labelPending,
  pending,
  children,
}: {
  labelPending: string;
  pending: boolean;
  children: ReactNode;
}) {
  return (
    <Button
      size="sm"
      className="mt-6 max-w-40"
      type="submit"
      disabled={pending}
    >
      {pending ? labelPending : children}
    </Button>
  );
}
