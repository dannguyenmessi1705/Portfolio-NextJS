import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function CreateBlogButton() {
  return (
    <Link href="/blogs/new">
      <button className="fixed bottom-0 right-0 m-10 rounded-full bg-accent-600 p-4 text-[24px] text-primary-950 transition-all duration-300 hover:bg-accent-700 ">
        <FaPlus />
      </button>
    </Link>
  );
}
