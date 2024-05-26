import { Input } from "./ui/input";
export default function FormContact() {
  return (
    <form className="flex flex-col gap-6 p-10 bg-primary-900 rounded-xl">
      <h3 className="text-4xl text-accent-600">Get in touch</h3>
      <p className="text-primary-300">
        If you are interested in my information, do you like we to work
        together in the future ?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="firstname" placeholder="Firstname" />
        <Input type="lastname" placeholder="Lastname" />
        <Input type="email" placeholder="Email address" />
        <Input type="phone" placeholder="Phone number" />
      </div>
    </form>
  );
}
