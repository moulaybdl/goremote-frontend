import Button2 from "@/components/buttons/button2";
import SimpleTag from "@/components/tags/simpleTag";

export default function Moulay() {
  return (
    <div className="w-full h-full flex-col justify-start mt-10">
      {/* tags */}
      <div className="flex flex-col gap-5 ">
        <span className="font-lexend-medium">General tags</span>
        <div className={`flex flex-row gap-2 `}>
          <SimpleTag title={"Expert"} color="bg-[#00FF5D]" />
          <SimpleTag title={"Intermediate"} color="bg-[#F6A93A]" />
          <SimpleTag title={"Beginner"} color="bg-[#3A8EF6]" />
        </div>
      </div>
      {/* company type */}
      <div className="flex flex-col gap-5 mt-5">
        <span className="font-lexend-medium">Company type</span>
        <div className={`flex flex-row gap-2 `}>
          <SimpleTag title={"Start-up"} color="bg-[#12AFE4]" />
          <SimpleTag title={"Non-profit"} color="bg-[#12AFE4]" />
          <SimpleTag title={"Corporation"} color="bg-[#12AFE4]" />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-5 mt-5">
        <div className="font-lexend-medium">Buttons</div>
        <Button2 title="Company" />
      </div>
    </div>
  );
}
