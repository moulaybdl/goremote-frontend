import Background from "@/app/(landing)/landing-page/svgs/workspaceBg.svg";
import Image from "next/image";
import CursorSVG from "../svgs/cursor";
import { use, useState } from "react";

export default function FeatureWorkspaceCard() {
  const [imageStyle, setImageStyle] = useState("");
  const [cursor1Style, setCursor1Style] = useState("");
  return (
    <div
      className="bg-neutral-700 border w-fit h-fit border-neutral-400 hover:border-neutral-300  rounded-[42px]
    flex flex-col justify-center items-center
    relative
    transition-all duration-300 ease-out"
    >
      {/* image */}
      <Image src={Background} className={"opacity-50"} alt={""} />
      {/* text */}
      <div className="flex flex-col max-w-[442px] p-5 pt-0">
        <div className="text-2xl font-normal text-neutral-50">
          Perfect Workspace
        </div>
        <div className="text-base font-light text-neutral-200">
          Our website provides a dedicated workspace to streamline collaboration
          with your teammates.
        </div>
      </div>
      {/* cursor */}
      <div className={`absolute bottom-[30%] left-[20%]`}>
        <CursorSVG color={"text-neutral-400"} />
      </div>
      <div className="absolute bottom-[40%] right-[20%] -rotate-90">
        <CursorSVG color={"text-neutral-400"} />
      </div>
    </div>
  );
}
