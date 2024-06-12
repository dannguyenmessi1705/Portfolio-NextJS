import Image from "next/image";
import avatar from "@/public/assets/avatar.webp";
import dynamic from "next/dynamic";
const CircleAround = dynamic(() => import("./CircleAround"));

export default function Photo() {
  return (
    <div className="relative h-full w-full rounded-full">
      <div>
        <div className="absolute left-0 right-0 top-0 bottom-0 m-auto h-[190px] w-[190px] overflow-hidden rounded-full mix-blend-lighten xl:h-[398px] xl:w-[398px]">
          <Image
            src={avatar}
            alt="avatar"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="pointer-events-none object-contain"
            priority
            placeholder="empty"
          />
        </div>

        <CircleAround />
      </div>
    </div>
  );
}
