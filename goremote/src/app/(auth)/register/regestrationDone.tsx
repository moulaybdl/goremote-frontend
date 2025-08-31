import CustomButton from "@/components/ui/customButton";

export default function RegistrationDone() {
  return (
    <div className="w-fit">
      {/* image */}
      <div className="flex flex-col justify-center items-center gap-4">
        {/* icon */}
        <span className="text-success-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="186"
            height="186"
            viewBox="0 0 186 186"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M92.9984 158.1C128.952 158.1 158.098 128.954 158.098 93.0004C158.098 57.0467 128.952 27.9004 92.9984 27.9004C57.0447 27.9004 27.8984 57.0467 27.8984 93.0004C27.8984 128.954 57.0447 158.1 92.9984 158.1ZM123.165 82.4795C126.343 79.3016 126.343 74.1492 123.165 70.9713C119.987 67.7934 114.835 67.7934 111.657 70.9713L84.8609 97.7672L74.34 87.2463C71.1621 84.0684 66.0098 84.0684 62.8319 87.2463C59.654 90.4242 59.654 95.5766 62.8319 98.7545L79.1069 115.029C82.2848 118.207 87.4371 118.207 90.615 115.029L123.165 82.4795Z"
              fill="currentColor"
            />
          </svg>
        </span>
        {/* text */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl text-neutral-100 font-bold">Registration Complete ! </h2>
        <CustomButton icon_positions={"none"} style={"filled"} size={"S"} text="Go Home"  />
      </div>

      </div>
    </div>
  );
}
