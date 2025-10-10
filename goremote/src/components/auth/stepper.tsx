"use client";

import { useEffect, useState } from "react";

type PointProps = {
  state: "completed" | "current" | "upcoming";
};

function Point({ state }: PointProps) {
  const [className, setClassName] = useState("");

  useEffect(() => {
    switch (state) {
      case "completed":
        setClassName("bg-[#00FFE0]");
        break;
      case "upcoming":
        setClassName("bg-[#282D35] border border-[#485260]");
        break;
      case "current":
        setClassName("bg-[#15171B] border border-[#00FFE0]");
        break;
    }
  }, [state]);

  return <div className={`w-5 h-5 rounded-full ${className}`}></div>;
}

type StepperProps = {
  steps: string[];
  currentStep: number;
};

export default function Stepper({ steps, currentStep }: StepperProps) {
  if (!steps) {
    return <div className=""></div>;
  }

  return (
    <div className="flex items-center">
      {steps.map((step, index) => {
        return (
          <div className="flex items-center relative">
            {/* point and step name */}
            <div className="flex flex-col items-center gap-1">
              <Point
                state={
                  index < currentStep
                    ? "completed"
                    : index === currentStep
                    ? "current"
                    : "upcoming"
                }
              />
              <span
                className={`text-sm font-lexend font-normal absolute text-center top-[25px] ${
                  currentStep === index ? "text-secondary" : "text-link"
                }`}
              >
                {step}
              </span>
            </div>

            {index !== steps.length - 1 ? (
              <div
                className={`h-[2px]  min-w-28 w-full ${
                  index < currentStep ? "bg-[#00FFE0]" : "bg-[#282D35]"
                } `}
              ></div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
