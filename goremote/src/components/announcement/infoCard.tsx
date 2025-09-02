"use client"

import { ServiceInfoCardProps } from "@/types/ServiceInfoCardProps";
import { Save, SaveIcon } from "lucide-react";
import Image from "next/image";
import { AvailabilityTag } from "@/components/tags/simpleTag";

// images:
import Avatar from "./img/avatart.svg";
import LearnMoreButton from "../buttons/LearnMoreButton";
import { useState } from "react";

export default function InfoCard({
  name,
  tag,
  availability,
  title,
  description,
  delivery_time,
  price,
}: ServiceInfoCardProps) {
  const [savePost, setSavePost] = useState(false);
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
              <span className="text-[12px]  text-neutral-100">{name}</span>
              <span className="text-[12px] text-neutral-300">{tag}</span>
            </div>
          </div>
          {/* save button */}
          <div
            className=""
            onClick={() => {
              setSavePost(!savePost);
            }}
          >
            {!savePost ? (
              <div className="text-neutral-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.4747 3.25793C15.3551 3.36011 16 4.1192 16 5.00559V17.4L10 14.4L4 17.4V5.00559C4 4.1192 4.64486 3.36011 5.52534 3.25793C6.99325 3.08757 8.4864 3 10 3C11.5136 3 13.0068 3.08757 14.4747 3.25793Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <div className="text-neutral-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3 3L4.29395 4.29395M17 17L15.8333 15.8333M11.5674 14.867L10 14.0833L4.16667 17V7.46629M4.29395 4.29395C4.51895 3.73859 5.0229 3.3235 5.64964 3.25076C7.07677 3.08514 8.52844 3 10 3C11.4716 3 12.9232 3.08514 14.3504 3.25076C15.2064 3.35011 15.8333 4.08811 15.8333 4.94988V15.8333M4.29395 4.29395L15.8333 15.8333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
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
