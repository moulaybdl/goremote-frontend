import { FreelancerAllInfoCard } from "@/types/FreelancerCardsProps";
import { SimpleTag } from "../tags/simpleTag";

export default function AllInfoFreelancerCard({
  name,
  description,
  icons,
  experience_level,
  categories,
  skills,
}: FreelancerAllInfoCard) {
  return (
    <div className="w-full h-fit flex flex-col bg-[var( --border-dark)] rounded-2xl overflow-hidden border-2 border-dark">
      {/* cover picture */}
      <div className="w-full h-64 bg-[#22272C] relative">
        {/* profile picture and short info */}
        <div className="flex flex-row gap-5 items-center absolute top-[80%] left-[5%]">
          <div className="w-52 h-52 aspect-square rounded-full bg-[#485260]"></div>
          <div className="fex flex-col">
            <span className="font-lexend-medium text-2xl text-white">
              {name}
            </span>
            <div className="font-lexend-medium text-base text-muted ">
              Joined on: 2025
            </div>
            <div className="font-lexend-medium text-base text-muted ">
              Tiaret
            </div>
          </div>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col gap-10 p-10 mt-48">
        <div className="flex flex-col gap-2 ">
          <span className="font-lexend-medium text-xl text-white">Bio</span>
          <span className="font-lexend-normal text-secondary text-xl">
            {description}
          </span>
        </div>
        {/* category */}
        <div className="flex flex-col gap-3 self-start">
          <span className="font-lexend-medium text-base">Categories</span>
          <div className="flex flex-row gap-2">
            {categories.map((category) => {
              return <SimpleTag title={category.name} color={category.color} />;
            })}
          </div>
        </div>
        {/* skills */}
        <div className="flex flex-col gap-3 self-start">
          <span className="font-lexend-medium text-base">Skills</span>
          <div className="flex flex-row gap-3">
            {skills.map((skill) => {
              return <SimpleTag title={skill.name} color={skill.color} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
