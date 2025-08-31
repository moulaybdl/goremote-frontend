import DropDown from "@/components/input/dropDown";
import SimpleInput from "@/components/input/simpleInput";
import CustomButton from "@/components/ui/customButton";
import { Logger } from "@/util/Logger";
import { useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  NextCallBack: () => void;
  PreviousCallBack: () => void;
};

export default function CompanyRegisterStep1({
  NextCallBack,
  PreviousCallBack,
}: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="w-fit p-10 flex flex-col justify-center gap-10 items-center"
        initial={{
          opacity: 0,
          y: 200,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {/* header */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="font-medium text-3xl text-neutral-100 ">
            Tell us a bit about your company
          </div>
          <div className="font-normal text-xl text-neutral-300">
            Start by telling us about your company !
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
            onClick={PreviousCallBack}
          />
          <CustomButton
            icon_positions={"none"}
            style={"filled"}
            size={"S"}
            text="Next"
            onClick={NextCallBack}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
