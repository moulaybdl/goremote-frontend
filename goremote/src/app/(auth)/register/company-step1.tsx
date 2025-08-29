import DropDown from "@/components/input/dropDown";
import SimpleInput from "@/components/input/simpleInput";
import CustomButton from "@/components/ui/customButton";
import { Logger } from "@/util/Logger";
import { useEffect } from "react";

export default function CompanyRegisterStep1() {
  return (
    <div className="w-fit p-10 flex flex-col justify-center gap-10 items-center">
      {/* header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="font-medium text-3xl text-neutral-100 ">
          Tell us a bit about yourself
        </div>
        <div className="font-normal text-xl text-neutral-300">
          Start by telling us about yourself !
        </div>
      </div>
      {/* input fields*/}
      <div className="w-full flex flex-col justify-start items-start gap-8">
        <SimpleInput
          label={"Company Name"}
          value={""}
          type={"text"}
          max_width="w-full"
        />
        <DropDown
          label="Company types"
          max_width="w-full"
          placeholder="Company type"
          options={[
            {
              id: "1",
              text: "Company",
            },
          ]}
        />
      </div>
      {/* actions */}
      <div className="w-full flex flex-row justify-end items-end gap-4">
        <CustomButton
          icon_positions={"none"}
          style={"outlined"}
          size={"S"}
          text="Previous"
        />
        <CustomButton
          icon_positions={"none"}
          style={"filled"}
          size={"S"}
          text="Next"
        />
      </div>
    </div>
  );
}
