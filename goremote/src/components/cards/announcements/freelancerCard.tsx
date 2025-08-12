import Button3 from "@/components/buttons/buttons3";
import { AvailabilityTag, SimpleTag } from "@/components/tags/simpleTag";
import { FreelancerProfileCardProps } from "@/types/FreelancerProfileCardProps";

export default function FreelancerProfileCard({
  firstname,
  availability,
  experience_level,
}: FreelancerProfileCardProps) {
  return (
    <div className="w-96 rounded-3xl bg-surface-dark flex flex-col justify-center items-center relative">
      <div className="freelancer-card-gradient absolute w-[101%] h-[101%] -z-1 rounded-3xl"></div>
      <div className="bg-[var(--border-dark)] w-full h-56 rounded-3xl flex justify-center items-center relative">
        <div className="w-36 h-36 aspect-square rounded-full absolute top-[70%] bg-[var(--color-link)]"></div>
      </div>
      {/* name */}
      <div className="font-lexend-medium text-3xl text-white mt-20">
        {firstname}
      </div>
      {/* info */}
      <div className="w-full flex flex-col justify-start items-start gap-5 mt-4 p-4">
        <div className="flex flex-col gap-3 px-2">
          <span className="text-base font-lexend-medium">availability:</span>
          <AvailabilityTag available={false} />
        </div>
        <div className="flex flex-col gap-3 px-2">
          <span className="text-base font-lexend-medium">
            Experience Level:
          </span>
          <SimpleTag title={experience_level} color={"bg-[#00FF5D]"} />
        </div>
      </div>
      <div className="w-full px-14 py-4">
        <Button3 title={"View Profile"} radius="rounded-full" />
      </div>
      {/* buttons */}
    </div>
  );
}
