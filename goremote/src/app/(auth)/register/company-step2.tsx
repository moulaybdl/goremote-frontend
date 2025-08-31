import InputButton from "@/components/input/InputButton";
import PasswordInputField from "@/components/input/passwordInput";
import SimpleInput from "@/components/input/simpleInput";
import CustomButton from "@/components/ui/customButton";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  NextCallBack: () => void;
  PreviousCallBack: () => void;
};

export default function CompanyRegisterStep2({
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
            Let’s Wrap Up Your Setup
          </div>
          <div className="font-normal text-xl text-neutral-300">
            Just a couple more details before we get started.
          </div>
        </div>
        {/* input fields */}
        <div className="w-full flex flex-col justify-start items-start gap-8">
          {/* email */}
          <div className="w-full">
            <SimpleInput
              label={"Email"}
              value={""}
              type={"email"}
              max_width=""
            />
          </div>
          {/* password */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-4">
              <PasswordInputField label={"Password"} />
              <PasswordInputField label={"Confirm password"} />
            </div>
            <div className="px-4 flex flex-row gap-2">
              <div className="text-warning-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 7.66667V10.5833M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM10 12.9167H10.0058V12.9225H10V12.9167Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-warning-300 font-light text-sm">
                Must be at least 8 Characters
              </div>
            </div>
          </div>
          {/* Phone number */}
          <div className="w-full">
            <InputButton
              label={"Phone number"}
              type={"icon"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M1.875 5.625C1.875 12.5286 7.47144 18.125 14.375 18.125H16.25C17.2855 18.125 18.125 17.2855 18.125 16.25V15.107C18.125 14.6768 17.8322 14.3018 17.4149 14.1975L13.7289 13.276C13.363 13.1845 12.9778 13.3212 12.7515 13.623L11.943 14.701C11.7083 15.0139 11.3025 15.1522 10.9353 15.0177C8.17949 14.0082 5.9918 11.8205 4.9823 9.06472C4.84778 8.69749 4.98613 8.29165 5.299 8.057L6.37702 7.24849C6.67878 7.02217 6.81551 6.63704 6.72403 6.27111L5.80253 2.58512C5.69819 2.16778 5.32321 1.875 4.89302 1.875H3.75C2.71447 1.875 1.875 2.71447 1.875 3.75V5.625Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              icon_position="right"
              max_width="w-full"
            />
          </div>
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
