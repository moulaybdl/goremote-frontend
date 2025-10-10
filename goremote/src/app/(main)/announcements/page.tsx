import InfoCard from "@/components/announcement/infoCard";
import DropDown from "@/components/input/dropDown";

export default function AnnouncementsPage() {
  return (
    <div className=" w-full min-h-screen pt-5">
      {/* navbar */}
      {/* content */}
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          {/* tile */}
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-normal text-neutral-100">
              Features Services
            </div>
            <div className="text-base font-light text-neutral-300">
              Handpicked services from top-rated freelancers, ready to boost
              your next project.
            </div>
          </div>
          {/* fitlers */}
          <div className="flex flex-row gap 5">
            <div className="">
              <DropDown placeholder="Category" />
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="flex flex-row gap-4">
          <InfoCard
            name={"Moulay Boubdelli"}
            tag={""}
            availability={true}
            title={"Website for Car agency"}
            description={"I build a webiste for your car agency"}
            delivery_time={"24H"}
            price={"200000"}
          />
        </div>
      </div>
    </div>
  );
}
