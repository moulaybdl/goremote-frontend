"use client";

import { useRef } from "react";

export type SimpleInputProps = {
  label: string;
  value: string;
  type: string;
  long?: boolean;
  name: string;
  ref: any;
  error: string | undefined;
  max_width?: string;
  max_hight?: string; // for textarea
};

export default function SimpleInput({
  label,
  value,
  type,
  long = false,
  name,
  ref,
  error,
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
         border  bg-neutral-700 ${
           error ? "border-error-300 ourtline-[var(--error-500)]" : "border-neutral-300"
         } px-5 py-3 rounded-3xl w-full ${max_hight}  focus:border-2
         font-normal text-base text-neutral-100 resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          ref={ref}
          className={`appearance-none outline-[var(--primary-500)] p-0 m-0 shadow-none focus:outline-[var(--primary-300)]
        border ${
          error ? "border-error-400" : "border-neutral-300"
        } bg-neutral-700 px-5 py-3 rounded-full w-full focus:border-2
         font-normal text-base text-neutral-100 ${long ? "grow" : ""}`}
        />
      )}
      {error && (
        <div className="px-4 text-error-300 flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M7.125 7.125L10.875 10.875M10.875 7.125L7.125 10.875M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="">{error}</div>
        </div>
      )}
    </div>
  );
}
