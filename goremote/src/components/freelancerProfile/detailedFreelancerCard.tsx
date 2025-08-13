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
    <div className="w-96 h-fit flex flex-col bg-surface-dark rounded-3xl overflow-hidden border border-dark elevation-2">
      <div className="h-72 bg-[#22272C] relative flex justify-center items-center">
        {/* profile pic */}
        <div className="h-40 w-40 aspect-square rounded-full bg-[#485260] self-center absolute top-[80%]"></div>
      </div>
      {/* info */}
      <div className="flex flex-col justify-center gap-6 items-center p-6">
        {/* name */}
        <div className="font-lexend-medium text-3xl mt-28 text-white">
          {name}
        </div>
        {/* description */}
        <div className="font-lexend-normal text-sm text-center text-secondary">
          {description}
        </div>
        {/* icons */}
        <div className="flex flex-row justify-center items-center gap-8">
          {icons.map((icon) => {
            return (
              <div className="cursor-pointer text-link  hover:text-white hover:opacity-80">
                {socialMediaIcons[icon]}
              </div>
            );
          })}
        </div>
        {/* experience level: */}
        <div className="flex flex-col gap-3 self-start">
          <span className="font-lexend-medium text-base">Experience level</span>
          <SimpleTag title={"Expert"} color={"bg-[#00FF5D]"} />{" "}
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
        <div className="w-full px-10">
          <Button3 title={"View profile"} radius="rounded-full" />
        </div>
      </div>
    </div>
  );
}
