"use client";

import MiniFreelancerCard from "@/components/cards/announcements/MinifreelancerCard";
import RatingCard from "@/components/cards/announcements/ratingCard";
import { AvailabilityTag } from "@/components/tags/simpleTag";
import { useState } from "react";

export default function ServicePage() {
  const [savePost, setSavePost] = useState(false);
  return (
    <div className="w-full p-10 flex flex-row justify-between gap-12">
      <div className="grow w-full flex flex-col gap-6 ">
        {/* title */}
        <div className="font-medium text-4xl text-neutral-100">
          Service Title
        </div>
        {/* post details */}
        <div className="flex flex-col gap-4 p-5">
          {/* user details + save */}
          <div className="flex flex-row items-center justify-between">
            {/* freelancer info */}
            <div className="flex flex-row gap-4">
              {/* avatar */}
              <div className="w-9 h-9 aspect-square rounded-full bg-neutral-400"></div>
              {/* name and availibilty */}
              <div className="flex flex-col items-center justify-start gap-1">
                <div className="text-base font-normal text-neutral-100">
                  Moulay Bouabdelli
                </div>
                <div className="self-start">
                  <AvailabilityTag available={true} />
                </div>
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
          {/* post frame */}
          <div className="p-8 w-full h-96 bg-neutral-400 rounded-2xl"></div>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 p-5">
          <div className="font-normal text-xl text-neutral-100">Details</div>
          <div className="font-light text-base text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <MiniFreelancerCard
          firstname={"Moulay Bouabdelli"}
          availability={false}
          experience_level={"Beginner"}
        />
        <RatingCard />
      </div>
    </div>
  );
}
