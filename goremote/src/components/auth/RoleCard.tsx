import Button2 from "../buttons/button2";
import CompanyIconCard from "./icons/companybg";
import FreelancerCardIcon from "./icons/freelancerbg";

export default function RoleCard() {
  return (
    <div className="w-fit h-fit flex justify-center items-center rounded-3xl bg-[#141619] elevation-3 relative">
      <div className="role-card-border-gradient absolute -z-1 h-[101%] w-[101%] rounded-3xl"></div>
      <div className="w-fit h-fit flex flex-col justify-center items-center gap-16 role-card-gradient rounded-3xl p-10">
        {/* header */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="font-lexend-medium text-sm text-glow">Logo</span>
          <span className="font-lexend-medium text-3xl">
            One Platform, two paths
          </span>
        </div>
        {/* buttons */}
        <div className="flex flex-row gap-2 w-full justify-center items-center">
          <div className="flex flex-row justify-center items-center  relative bg-[#141619]">
            <div className=" absolute">
              <Button2 title="Company" rotationDir="right" />
            </div>
            <FreelancerCardIcon />
          </div>
          <div className="bg-[#141619] flex flex-col justify-center items-center">
            <svg
              width="4"
              height="117"
              viewBox="0 0 4 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0V117"
                stroke="url(#paint0_linear_547_621)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_547_621"
                  x1="2.5"
                  y1="0"
                  x2="2.5"
                  y2="117"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#121417" />
                  <stop offset="1" stopColor="#A6ACB8" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-lexend-medium text-base text-white">or</span>
            <svg
              width="4"
              height="117"
              viewBox="0 0 4 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 117V-2.32458e-06"
                stroke="url(#paint0_linear_547_622)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_547_622"
                  x1="2.5"
                  y1="117"
                  x2="2.5"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#121417" />
                  <stop offset="1" stopColor="#A6ACB8" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-row justify-center items-center  relative bg-[#141619]">
            <div className=" absolute">
              <Button2 title="Freelancer" rotationDir="left" />
            </div>
            <FreelancerCardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
