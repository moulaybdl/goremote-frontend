import Button3 from "@/components/buttons/buttons3";
import { AvailabilityTag, SimpleTag } from "@/components/tags/simpleTag";
import { MiniFreelanceCardProps } from "@/types/FreelancerCardsProps";

export default function MiniFreelancerCard({
  firstname,
  availability,
  experience_level,
}: MiniFreelanceCardProps) {
  return (
    <div className="w-96 h-fit rounded-3xl bg-surface-dark flex flex-col justify-center items-center relative bg-neutral-600
    border-2 border-neutral-400">
      <div className="bg-neutral-500 w-full h-56 rounded-3xl flex justify-center items-center relative">
        <div className="w-36 h-36 aspect-square rounded-full absolute top-[70%] bg-neutral-400"></div>
      </div>
      {/* name */}
      <div className="font-lexend-medium text-3xl text-neutral-100 mt-20">
        {firstname}
      </div>
      {/* info */}
      <div className="w-full flex flex-col justify-start items-start gap-5 mt-4 p-4">
        <div className="flex flex-col gap-3 px-2">
          <span className="text-base text-neutral-100 font-normal">availability:</span>
          <AvailabilityTag available={false} />
        </div>
        <div className="flex flex-col gap-3 px-2">
          <span className="text-base text-neutral-100 font-normal">
            Experience Level:
          </span>
          <SimpleTag title={experience_level} color={"bg-[#00FF5D]"} />
        </div>
      </div>
      <div className="w-full px-14 py-4">
        <Button3 title={"View Profile"} radius="rounded-full" />
      </div>
    </div>
  );
}
