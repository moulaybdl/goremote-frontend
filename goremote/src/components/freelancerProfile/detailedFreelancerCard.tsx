import { DetailedFreelancerCardProps } from "@/types/FreelancerCardsProps";
import { socialMediaIcons } from "./icons/socialMedia";
import { SimpleTag } from "../tags/simpleTag";
import Button2 from "../buttons/button2";
import Button3 from "../buttons/buttons3";

export default function DetailedFreelancerCard({
  name,
  description,
  icons,
  experience_level,
  categories,
  skills,
}: DetailedFreelancerCardProps) {
  return (
    <div className="w-96 h-fit flex flex-col bg-neutral-600 border border-neutral-400 rounded-3xl overflow-hidden  elevation-2">
      <div className="h-72 bg-[#22272C] relative flex justify-center items-center">
        {/* profile pic */}
        <div className="h-40 w-40 aspect-square rounded-full bg-[#485260] self-center absolute top-[80%]"></div>
      </div>
      {/* info */}
      <div className="flex flex-col justify-center gap-6 items-center p-6">
        {/* name */}
        <div className="text-3xl font-normal mt-28 text-neutral-100">
          {name}
        </div>
        {/* description */}
        <div className="font-lexend-normal text-sm text-center text-neutral-200">
          {description}
        </div>
        {/* icons */}
        <div className="flex flex-row justify-center items-center gap-8">
          {icons.map((icon) => {
            return (
              <div className="cursor-pointer text-neutral-200 opacity-80 hover:opacity-100">
                {socialMediaIcons[icon]}
              </div>
            );
          })}
        </div>
        {/* experience level: */}
        <div className="flex flex-col gap-3 self-start">
          <span className="font-normal text-base text-neutral-100">Experience level</span>
          <SimpleTag title={"Expert"} color={"bg-[#00FF5D]"} />{" "}
        </div>
        {/* category */}
        <div className="flex flex-col gap-3 self-start">
          <span className="font-normal text-base text-neutral-100">Categories</span>
          <div className="flex flex-row gap-2">
            {categories.map((category, index) => {
              return <SimpleTag key={index} title={category.name} color={category.color} />;
            })}
          </div>
        </div>
        {/* skills */}
        <div className="flex flex-col gap-3 self-start">
          <span className="font-normal text-base text-neutral-100">Skills</span>
          <div className="flex flex-row gap-3">
            {skills.map((skill, index) => {
              return <SimpleTag key={index} title={skill.name} color={skill.color} />;
            })}
          </div>
        </div>
        <div className="w-full px-10">
          <Button3 title={"View profile"} radius="rounded-full" />
        </div>
      </div>
    </div>
  );
}
