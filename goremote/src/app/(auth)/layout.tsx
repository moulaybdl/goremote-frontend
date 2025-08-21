import Image from "next/image";

import Background from "@/public/login-background.png";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen relative flex justify-center items-center overflow-hidden">
      {/* gradient */}
      <div className="login-circle-gradient-2 w-[170%] aspect-square rounded-full absolute z-5 bottom-[5px] mix-blend-lighten"></div>
      <div className="login-circle-gradient aspect-square w-full z-10  rounded-[50%] absolute bottom-[40%] mix-blend-overlay"></div>
      <div className="absolute bg-contain bg-no-repeat bg-center -top-[70%]">
        <Image
          src={Background}
          alt={"Login Background"}
          className="mix-blend-screen"
        />
      </div>

      {/* duplicate for more visibility */}
      <div className="login-circle-gradient-2 w-[170%] aspect-square rounded-full absolute z-5 bottom-[5px] mix-blend-lighten"></div>
      <div className="login-circle-gradient aspect-square w-full z-10  rounded-[50%] absolute bottom-[40%] mix-blend-overlay"></div>
      <div className="absolute bg-contain bg-no-repeat bg-center -top-[70%]">
        <Image
          src={Background}
          alt={"Login Background"}
          className="mix-blend-screen"
        />
      </div>

      {/* content */}

      {children}
    </div>
  );
}
