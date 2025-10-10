import Image from "next/image";

import Background from "@/public/login-background.png";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center overflow-hidden px-28 py-20">
      {/* gradient */}
      <div className="login-circle-gradient-2 w-[170%] aspect-square rounded-full absolute z-5 bottom-[5px] mix-blend-hard-light opacity-50"></div>
      <div className="login-circle-gradient aspect-square w-full z-10  rounded-[50%] absolute bottom-[40%] mix-blend-hard-light opacity-50 "></div>
      <div className="absolute bg-contain bg-no-repeat bg-center -top-[70%]">
        <Image
          src={Background}
          alt={"Login Background"}
          className="mix-blend-screen"
        />
      </div>

      {/* duplicate for more visibility */}
      {/* <div className="login-circle-gradient-2 w-[170%] aspect-square rounded-full absolute z-5 bottom-[5px] mix-blend-lighten"></div>
      <div className="login-circle-gradient aspect-square w-full z-10  rounded-[50%] absolute bottom-[40%] mix-blend-overlay"></div>
      <div className="absolute bg-contain bg-no-repeat bg-center -top-[70%]">
        <Image
          src={Background}
          alt={"Login Background"}
          className="mix-blend-screen"
        />
      </div> */}

      {/* content */}
      <div className="w-full px-10 py-11 flex justify-center items-center relative rounded-[52px] bg-neutral-700 border border-neutral-400 z-100000">
        {/* header */}
        <div className="absolute top-0 left-0 w-full flex flex-row justify-between  items-center p-7">
          {/* logo */}
          <div className="flex">
            <div className="text-white text-4xl font-semibold">Intiqa</div>
            <span className="text-primary-500 text-4xl font-semibold">ai</span>
          </div>
          {/* language switcher */}
        </div>

        {/* form */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
