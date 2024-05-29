import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function FormContact() {
  return (
    <form className="flex flex-col gap-4 rounded-xl bg-primary-900 p-8">
      <h3 className="text-4xl text-accent-600">Get in touch</h3>
      <p className="text-primary-300">
        If you are interested in my information, do you like we to work together
        in the future ?
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input type="firstname" placeholder="Firstname" />
        <Input type="lastname" placeholder="Lastname" />
        <Input type="email" placeholder="Email address" />
        <Input type="phone" placeholder="Phone number" />
      </div>

      <Textarea
        className="h-[180px]"
        placeholder="Please leave your message here"
      />

      <Button size="sm" className="max-w-40">
        Send message
      </Button>
    </form>
  );
}
