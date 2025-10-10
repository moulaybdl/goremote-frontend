import { useState } from "react";
import RadioQuestion from "./radioButtonQuestion";

export type RadioButtonOptionProps = {
  option: string;
};

type RadionButtonGroupProps = {
  options: RadioButtonOptionProps[];
  name: string;
  ref: any;
};

export default function RadioButtonGroup({
  options,
  name,
  ref,
}: RadionButtonGroupProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3 w-full">
      <input
        type="text"
        className="hidden"
        name={name}
        ref={ref}
        readOnly
        value={selectedOption !== null ? options[selectedOption].option : ""}
      />
      {options.map((option, index) => (
        <RadioQuestion
          key={index}
          option={option.option}
          isRTL={false}
          id={index}
          state={selectedOption === index}
          onCheck={function (index: number): void {
            setSelectedOption(index);
          }}
        />
      ))}
    </div>
  );
}
