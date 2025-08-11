import { CoreFunctionalityCardProps } from "@/types/coreFunctionalityCardProps";
import Image from "next/image";

export default function CoreFunctionalityCard({
  title,
  description,
  direction,
  image,
}: CoreFunctionalityCardProps) {
  return (
    <div className="max-w-[492px] w-full h-[522px] rounded-[19px] bg-surface-light flex justify-center items-center relative">
      <div className="w-full h-full rounded-[19px] flex flex-col p-6">
        {/* image */}
        <Image src={image} alt={"feature"} className="grow self-center" />
        {/* description */}
        <div className="flex flex-col gap-2 ">
          <div className="text-2xl font-lexend-medium text-secondary">
            {title}
          </div>
          <div className="text-base font-lexend-medium text-white">
            {description}
          </div>
        </div>
      </div>
      <div
        className={`w-[101%] h-[101%] absolute -z-1 rounded-[19px] core-functionality-card-gradient-${direction}`}
      ></div>
    </div>
  );
}
