"use client";

import { useRef } from "react";

export type SimpleInputProps = {
  label: string;
  value: string;
  type: string;
  long?: boolean;
  max_width?: string;
  max_hight?: string; // for textarea
};

export default function SimpleInput({
  label,
  value,
  type,
  long = false,
  max_width = "max-w-xl",
  max_hight = "max-h-64",
}: SimpleInputProps) {
  const firstName = useRef<HTMLInputElement>(null);
  return (
    <div className={` ${max_width}  min-w-2xs shrink grow flex flex-col gap-2`}>
      <div className="font-work-sans text-neutral-100 font-normal px-4">
        {label}
      </div>
      {long ? (
        <textarea
          className={`appearance-none outline-[var(--primary-500)] p-0 m-0 shadow-none focus:outline-[var(--primary-300)]
         border border-neutral-300 bg-neutral-700 px-5 py-3 rounded-3xl w-full ${max_hight}  focus:border-2
         font-normal text-base text-neutral-100 resize-none`}
        />
      ) : (
        <input
          type={type}
          name={value}
          ref={firstName}
          className={`appearance-none outline-[var(--primary-500)] p-0 m-0 shadow-none focus:outline-[var(--primary-300)]
        border border-neutral-300 bg-neutral-700 px-5 py-3 rounded-full w-full focus:border-2
         font-normal text-base text-neutral-100 ${long ? "grow" : ""}`}
        />
      )}
    </div>
  );
}
