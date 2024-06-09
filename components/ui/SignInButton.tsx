import Image from "next/image";
import { signInAction } from "@/lib/serverAction";
//Vì các thành phần này ở bên Server side nên không thể dùng onClick gọi hàm, mà phải dùng form để gọi hàm

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 rounded-sm border border-accent-800 bg-accent-700 px-10 py-4 text-lg font-medium text-primary-950 transition-all duration-300 hover:border-primary-900 hover:bg-accent-600">
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
