import Background from "@/app/(landing)/landing-page/svgs/chat.svg";
import Image from "next/image";

export default function AssistantCard() {
  return (
    <div
      className="bg-neutral-700 border w-fit h-fit border-neutral-400 hover:border-neutral-300  rounded-[42px]
    flex flex-col justify-center items-center
    relative
    transition-all duration-300 ease-out"
    >
      {/* image */}
      <Image src={Background} alt="" />
      {/* text */}
      <div className="flex flex-col max-w-[442px] p-5 pt-0">
        <div className="text-2xl font-normal text-neutral-50">
          AI Assistance
        </div>
        <div className="text-base font-light text-neutral-200">
          An AI assistant that refines vague technical ideas by asking
          clarifying questions, then suggests a tailored team of freelancers to
          build your project.
        </div>
      </div>
    </div>
  );
}
