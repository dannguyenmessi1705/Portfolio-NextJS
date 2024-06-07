import Image from "next/image";
import { signOutAction } from "@/lib/serverAction";
//Vì các thành phần này ở bên Server side nên không thể dùng onClick gọi hàm, mà phải dùng form để gọi hàm

function SignInButton() {
  return (
    <form action={signOutAction}>
      <button className="flex items-center gap-6 border border-primary-300 px-10 py-4 text-lg font-medium transition-all duration-300 hover:border-primary-900 hover:bg-accent-600 hover:text-primary-950">
        <Image
          src="https://authjs.dev/img/providers/github.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Signout Github</span>
      </button>
    </form>
  );
}

export default SignInButton;
