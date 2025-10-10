"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

export type InputButtonProps = {
  label: string;
  name: string;
  ref: any;
  type: "icon" | "plus-minus";
  error?: string;
  icon?: React.ReactNode;
  icon_position?: "left" | "right";
  icon_filled?: boolean;
  max_width?: string;
};

export default function InputButton({
  label,
  type,
  name,
  ref,
  error = "",
  icon,
  icon_position,
  icon_filled = false,
  max_width = "max-w-xl",
}: InputButtonProps) {
  const [counter, setCounter] = useState(0);

  const inputRef = useRef(null);

  const returnButton = (type: string) => {
    switch (type) {
      case "icon":
        return <div className="text-primary-500">{icon}</div>;
      case "plus-minus":
        return (
          <div className="w-full flex flex-col justify-center items-center">
            <span
              className="font-work-sans text-primary-300 text-xl w-full text-center cursor-pointer select-none"
              onClick={() => {
                setCounter(counter + 1);
                if (ref.current) {
                  (ref.current as HTMLInputElement).value = String(counter + 1);
                }
              }}
            >
              +
            </span>
            {/* <div className="w-full self-start h-0.5 bg-neutral-300"></div> */}
            <span
              className="font-work-sans text-primary-300 text-xl  w-full text-center cursor-pointer select-none"
              onClick={() => {
                setCounter(counter - 1);
                if (ref.current && counter > 0) {
                  (ref.current as HTMLInputElement).value = String(counter - 1);
                }
              }}
            >
              -
            </span>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div
      className={`${max_width} w-full min-w-2xs shrink grow flex flex-col gap-2`}
    >
      <div className="text-neutral-100 font-normal px-4">{label}</div>
      <div
        className={`flex flex-row${
          icon_position === "left" ? "-reverse" : ""
        } w-full  items-center 
       border ${icon_filled ? "bg-primary-100" : "bg-neutral-700"} ${
          error ? "border-error-300" : "border-neutral-300"
        }   rounded-full overflow-hidden
        text-work-sans font-normal text-base relative`}
        dir={icon_position === "left" ? "rtl" : "ltr"}
      >
        <input
          type="text"
          className={`appearance-none outline-none p-0 m-0 shadow-none bg-neutral-700 
          px-5 py-3 w-full ${error ? "border-error-300" : "border-neutral-600"}
         font-normal text-base text-neutral-100`}
          ref={ref}
          name={name}
        />
        <button
          className={`px-4 ${type === "plus-minus" ? "bg-primary-50" : ""} ${
            icon_filled ? "text-primary-500" : "text-neutral-400"
          }  flex justify-center items-center`}
        >
          {returnButton(type)}
        </button>
      </div>
      {/* icon text and error icon */}
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
