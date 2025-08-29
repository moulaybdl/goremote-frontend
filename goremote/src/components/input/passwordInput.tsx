"use client";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export type PasswordInputProps = {
  label: string;
  placeholder?: string;
};

export default function PasswordInputField({
  label,
  placeholder,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="max-w-xl min-w-2xs shrink grow flex flex-col gap-2">
      <div className="text-neutral-100 font-normal px-4">
        {label}
      </div>
      <div
        className={`flex flex-row w-full justify-center items-center
      bg-neutral-700 border border-neutral-300 rounded-full
        font-normal text-base relative`}
      >
        <input
          type={show === true ? "text" : "password"}
          className="appearance-none outline-none p-0 m-0 shadow-none 
         border-neutral-700 px-5 py-3 w-full
         font-normal text-base text-neutral-100"
        />
        <button
          className="px-4 text-neutral-100"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show === true ? <EyeClosed /> : <Eye />}
        </button>
      </div>
    </div>
  );
}
