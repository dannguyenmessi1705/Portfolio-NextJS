import Image from "next/image";
import { signInAction } from "@/lib/serverAction";
//Vì các thành phần này ở bên Server side nên không thể dùng onClick gọi hàm, mà phải dùng form để gọi hàm

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium hover:bg-accent-600 hover:text-primary-950 hover:border-primary-900 transition-all duration-300">
        <Image
          src="https://authjs.dev/img/providers/github.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Github</span>
      </button>
    </form>
  );
}

export default SignInButton;
