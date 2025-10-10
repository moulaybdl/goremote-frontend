import Link from "next/link";
import Button3 from "../buttons/buttons3";
import InputField2 from "../input/inputField2";

export default function LoginCard() {
  return (
    <div className="flex justify-center items-center w-fit h-fit rounded-[22px] elevation-3 relative">
      <div className="w-[101%] h-[101%] -z-1 absolute login-card-border-gradient rounded-[22px] opacity-30"></div>
      <div className="w-fit flex flex-col justify-center items-center gap-10 bg-surface-light rounded-[22px] p-8 login-card-gradient">
        {/* header */}
        <div className="flex flex-col justify-center items-center mt-32">
          <span className="font-lexend-medium text-4xl text-white">Login</span>
        </div>
        {/* input fields */}
        <div className="flex flex-col gap-4">
          <InputField2 placeholder="Email" />
          <InputField2 placeholder="Passowrd" type="password" />
        </div>
        {/* button */}
        <div className="w-full justify-center items-center px-16">
          <Button3 title={"Login"} radius="rounded-full" />
        </div>
        {/* signup */}
        <div className="font-lexend-medium text-secondary pb-10">
          Don't have an account?
          <Link href={"/choose-role"} className="font-lexend-medium text-glow">
            Sign up,{" "}
          </Link>
          It is free!
        </div>
      </div>
    </div>
  );
}
