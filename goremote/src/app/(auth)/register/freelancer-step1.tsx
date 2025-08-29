import InputButton from "@/components/input/InputButton";
import RadioQuestion from "@/components/input/radioButtonQuestion";
import SimpleInput from "@/components/input/simpleInput";
import CustomButton from "@/components/ui/customButton";

export default function FreelancerRegisterStep1() {
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
      {/* content */}
      <div className="w-full flex flex-col justify-start items-start gap-8 elevation-2">
        <div className="flex flex-row gap-4 items-center">
          <SimpleInput
            label={"Firstname"}
            value={""}
            type={"text"}
            max_width=""
          />
          <SimpleInput
            label={"Lastname"}
            value={""}
            type={"text"}
            max_width=""
          />
        </div>
        {/* Gender */}
        <div className="flex flex-col gap-3 w-full">
          <div className="font-normal text-base text-neutral-100 px-4">
            Gender
          </div>
          <div className="flex flex-col gap-3 w-full">
            <RadioQuestion option={"Male"} isRTL={false} />
            <RadioQuestion option={"Female"} isRTL={false} />
          </div>
        </div>
        {/* Birthdate */}
        <div className="w-full flex flex-col gap-2">
          <InputButton
            label={"Birthdate"}
            type={"icon"}
            icon_position="right"
            icon_filled
            max_width="w-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.21447 3.33947 4.375 4.375 4.375H15.625C16.6605 4.375 17.5 5.21447 17.5 6.25V15.625M2.5 15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H15.625C16.6605 17.5 17.5 16.6605 17.5 15.625M2.5 15.625V9.375C2.5 8.33947 3.33947 7.5 4.375 7.5H15.625C16.6605 7.5 17.5 8.33947 17.5 9.375V15.625"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          {/* helper text */}
          <div className="px-4 flex gap-2">
            <span className="text-warning-300">
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
            </span>
            <div className="text-sm font-light text-warning-300">
              Enter Date in format: YYYY/MM/DD
            </div>
          </div>
        </div>
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
