"use client";

import { useRef, useState } from "react";
import RadioCircle from "./radioCircle";

type radioQuestionProps = {
  id: number;
  option: string;
  isRTL: boolean;
  state: boolean;
  onCheck: (index: number) => void;
};

export default function RadioQuestion({
  id,
  option,
  isRTL,
  state,
  onCheck,
}: radioQuestionProps) {

  return (
    <div
      className="px-9 py-5 flex items-center gap-3 bg-neutral-600 w-full max-w-3xl hover:border-l-2 rounded-2xl
       hover:border-[#9D4EDD]"
      dir={isRTL ? "rtl" : "ltr"}
      onClick={() => {
        onCheck(id);
      }}
    >
      <RadioCircle checked={state} />
      <span className="font-normal text-base text-neutral-100">{option}</span>
    </div>
  );
}
