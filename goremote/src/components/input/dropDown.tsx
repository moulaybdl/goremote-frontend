"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export type DropDownProps = {
  label?: string;
  placeholder?: string;
  options?: DropDownOptionProps[];
  max_width?: string;
  onChange?: (value: any) => void;

  // langauge specific:
  t?: any;
  isRTL?: boolean;
};

export type DropDownOptionProps = {
  id: string;
  text: any;
};


export default function DropDown({
  label,
  placeholder,
  options = [],
  t,
  isRTL,
  max_width="max-w-xl"
}: DropDownProps) {
  const [currentItem, setCurrentItem] = useState("");
  const [showList, setShowList] = useState(false);

  return (
    <div className={`${max_width} w-full min-w-2xs shrink grow flex flex-col gap-2`}>
      <div className="font-work-sans text-neutral-100 font-normal px-4">
        {label}
      </div>
      <div
        className="flex flex-row w-full justify-center items-center
      bg-neutral-700 border border-neutral-300 rounded-full
        text-work-sans font-normal text-base relative"
      >
        <input
          type="text"
          value={`${placeholder} ${
            currentItem === "" ? `` : `: ${currentItem}`
          }`}
          readOnly
          className="appearance-none outline-none p-0 m-0 shadow-none 
         border-neutral-200 px-5 py-3 w-full
        text-work-sans font-normal text-base text-neutral-300"
        />
        <button className="px-4" onClick={() => setShowList(!showList)}>
          {!showList ? (
            <ChevronDown className="text-neutral-300" />
          ) : (
            <ChevronUp className="text-neutral-300" />
          )}
        </button>
        {showList && (
          <div
            className="absolute top-[101%] mt-1 bg-neutral-700 border border-neutral-400 rounded-2xl w-full max-h-40
            text-work-sans font-normal text-base overflow-y-auto z-1"
          >
            {options.map((option) => {
              return (
                <div
                  className="text-work-sans font-normal text-base text-neutral-100 px-5 py-4 w-full hover:bg-neutral-700 cursor-pointer"
                  key={option.id}
                  onClick={() => {
                    setCurrentItem(option.text);
                    setShowList(false);
                  }}
                >
                  {option.text}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
