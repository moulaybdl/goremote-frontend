import Background from "@/app/(landing)/landing-page/svgs/portfolio.svg";
import Image from "next/image";

export default function DreamPortfolioCard() {
  return (
    <div
      className="bg-neutral-700 border w-fit h-fit border-neutral-400 hover:border-neutral-300 rounded-[42px]
    flex flex-row justify-center items-center gap-5 p-7
    transition-all duration-300 ease-out"
    >
      {/* text */}
      <div className="flex flex-col gap-3">
        <div className="text-2xl font-normal text-neutral-50">
          Dream Portfolio
        </div>
        <div className="text-base font-light text-neutral-200 max-w-3xs">
          Our website lets you create a portfolio to showcase your skills and
          attract potential clients.
        </div>
      </div>
      <div className="grow">
        <Image src={Background} alt={""} />
      </div>
    </div>
  );
}
