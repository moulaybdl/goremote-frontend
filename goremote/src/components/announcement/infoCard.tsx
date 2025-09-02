import { ServiceInfoCardProps } from "@/types/ServiceInfoCardProps";
import { Save, SaveIcon } from "lucide-react";
import Image from "next/image";
import { AvailabilityTag } from "@/components/tags/simpleTag";

// images:
import Avatar from "./img/avatart.svg";
import LearnMoreButton from "../buttons/LearnMoreButton";

export default function InfoCard({
  name,
  tag,
  availability,
  title,
  description,
  delivery_time,
  price,
}: ServiceInfoCardProps) {
  return (
    <div className="w-[281px] h-fit flex justify-center items-center  bg-neutral-600 border border-neutral-400 rounded-[14px] relative elevation-2">
      {/* <div className="w-[101%] h-[101%] absolute bg-red-300 -z-1 rounded-[14px] service-card-border-gradient"></div> */}
      <div className="flex flex-col justify-start gap-5 w-full h-full  p-4 rounded-[14px]">
        {/* freelancer avatar and save button */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center gap-4">
            {/* avatar */}
            <div className="w-9 h-9">
              <Image src={Avatar} alt="Avatar" />
            </div>
            {/* name and tag */}
            <div className="flex flex-col">
              <span className="text-[12px]  text-neutral-100">
                {name}
              </span>
              <span className="text-[12px] text-neutral-300">
                {tag}
              </span>
            </div>
          </div>
          {/* save button */}
          <div className="text-secondary cursor-pointer hover:text-white">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.58284 19.9363C4.33518 19.9354 4.09087 19.879 3.86784 19.7713C3.59445 19.6428 3.36316 19.4394 3.20088 19.1846C3.0386 18.9298 2.95201 18.6342 2.95117 18.3321V2.7488C2.95237 2.53616 2.99559 2.32585 3.07835 2.12996C3.16111 1.93408 3.28178 1.75649 3.43342 1.60741C3.58505 1.45833 3.76467 1.3407 3.96193 1.26128C4.15919 1.18186 4.3702 1.14222 4.58284 1.14464H17.4162C17.8409 1.14704 18.2475 1.31682 18.5478 1.61714C18.8482 1.91746 19.0179 2.32409 19.0203 2.7488V18.3321C19.0144 18.6224 18.9298 18.9057 18.7755 19.1516C18.6212 19.3976 18.403 19.5971 18.1443 19.7288C17.8855 19.8605 17.5959 19.9196 17.3062 19.8996C17.0166 19.8797 16.7377 19.7814 16.4995 19.6155L11.1828 15.628C11.1438 15.5967 11.0953 15.5797 11.0453 15.5797C10.9954 15.5797 10.9469 15.5967 10.9078 15.628L5.54534 19.6155C5.26705 19.8226 4.92972 19.935 4.58284 19.9363ZM4.58284 2.51964C4.52206 2.51964 4.46377 2.54378 4.42079 2.58676C4.37782 2.62973 4.35367 2.68802 4.35367 2.7488V18.3321C4.35335 18.3745 4.36529 18.4161 4.38806 18.4519C4.41083 18.4877 4.44345 18.5161 4.48201 18.5338C4.51709 18.5578 4.55864 18.5707 4.60117 18.5707C4.64371 18.5707 4.68525 18.5578 4.72034 18.5338L10.0828 14.528C10.3617 14.3225 10.699 14.2116 11.0453 14.2116C11.3917 14.2116 11.729 14.3225 12.0078 14.528L17.3245 18.5155C17.3596 18.5395 17.4011 18.5524 17.4437 18.5524C17.4862 18.5524 17.5277 18.5395 17.5628 18.5155C17.6014 18.4978 17.634 18.4694 17.6568 18.4336C17.6796 18.3978 17.6915 18.3562 17.6912 18.3138V2.7488C17.6919 2.71443 17.6848 2.68034 17.6706 2.64907C17.6563 2.61779 17.6352 2.59012 17.6088 2.56811C17.5824 2.5461 17.5513 2.53032 17.518 2.52193C17.4847 2.51354 17.4499 2.51275 17.4162 2.51964H4.58284Z"
                fillOpacity="0.61"
              />
            </svg>
          </div>
        </div>
        {/* availibility */}
        <div className="flex justify-start items-center gap-2">
          <AvailabilityTag available={availability} />
        </div>
        {/* post description */}
        <div className="flex flex-col gap-2">
          <div className="text-neutral-100 font-normal text-base">{title}</div>
          <div className="text-sm font-light text-neutral-200 ">
            {description}
          </div>
        </div>
        {/* delivery time */}
        <div className="">
          <span className="font-lexend-medium text-[10px] text-white">
            delivery time:{" "}
          </span>
          <span className="font-lexend-medium text-[10px] text-secondary">
            {delivery_time}
          </span>
        </div>
        {/* price and submit button */}
        <div className="flex flex-row justify-between">
          <div className="text-[#A6FF00]">{price}DA</div>
          <LearnMoreButton title={"Learn more"} />
        </div>
      </div>
    </div>
  );
}
