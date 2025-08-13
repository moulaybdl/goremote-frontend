import Button3 from "@/components/buttons/buttons3";
import { SimpleTag } from "@/components/tags/simpleTag";
import { CompanyCardPros } from "@/types/CompanyCard";
import { FreelancerProfileCardProps } from "@/types/FreelancerCardsProps";
import { verify } from "crypto";
import { Verified } from "lucide-react";

export default function CompanyCard({
  name,
  label,
  Verified,
  email,
  phone_number,
}: CompanyCardPros) {
  return (
    <div className="w-96 h-fit rounded-3xl bg-surface-dark flex flex-col gap-32 justify-center items-center relative">
      <div className="freelancer-card-gradient absolute w-[101%] h-[101%] -z-1 rounded-3xl"></div>
      <div className="bg-[var(--border-dark)] w-full h-56 rounded-3xl flex justify-center items-center relative">
        <div className="w-28 h-28 aspect-square rounded-full absolute top-[85%] left-[7%] bg-[var(--color-link)]"></div>
        <div className="absolute top-[100%] left-[40%] flex flex-col gap-4">
          <div className="font-lexend-medium text-xl text-white  flex gap-2 justify-center self-center items-center pt-4">
            {name}
            {Verified && (
              <span>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.069 8.50123L15.9923 7.25039C15.7865 7.01289 15.6202 6.56956 15.6202 6.25289V4.90706C15.6202 4.06789 14.9315 3.37914 14.0923 3.37914H12.7465C12.4377 3.37914 11.9865 3.21289 11.749 3.00706L10.4981 1.93039C9.95188 1.46331 9.0573 1.46331 8.50313 1.93039L7.26018 3.01497C7.02268 3.21289 6.57143 3.37914 6.26268 3.37914H4.8931C4.05393 3.37914 3.36518 4.06789 3.36518 4.90706V6.26081C3.36518 6.56956 3.19893 7.01289 3.00102 7.25039L1.93227 8.50915C1.4731 9.0554 1.4731 9.94207 1.93227 10.4883L3.00102 11.7471C3.19893 11.9846 3.36518 12.4279 3.36518 12.7366V14.0904C3.36518 14.9296 4.05393 15.6183 4.8931 15.6183H6.26268C6.57143 15.6183 7.02268 15.7846 7.26018 15.9904L8.51105 17.0671C9.0573 17.5341 9.95188 17.5341 10.506 17.0671L11.7569 15.9904C11.9944 15.7846 12.4377 15.6183 12.7544 15.6183H14.1002C14.9394 15.6183 15.6281 14.9296 15.6281 14.0904V12.7446C15.6281 12.4358 15.7944 11.9846 16.0002 11.7471L17.0769 10.4962C17.536 9.94998 17.536 9.04748 17.069 8.50123ZM12.794 8.00248L8.97021 11.8262C8.85938 11.9371 8.70896 12.0004 8.55063 12.0004C8.3923 12.0004 8.24188 11.9371 8.13105 11.8262L6.21518 9.9104C5.9856 9.68082 5.9856 9.30082 6.21518 9.07123C6.44477 8.84165 6.82477 8.84165 7.05435 9.07123L8.55063 10.5675L11.9548 7.16331C12.1844 6.93372 12.5644 6.93372 12.794 7.16331C13.0235 7.39289 13.0235 7.77289 12.794 8.00248Z"
                    fill="#12AFE4"
                  />
                </svg>
              </span>
            )}
          </div>
          <SimpleTag title={label} color={"bg-[#12AFE4]"} />
        </div>
      </div>
      <div className="flex flex-col gap-4 self-start px-10 w-full">
        <div className="flex flex-col gap-3">
          <div className="font-lexed-medium text-base text-secondary">
            {email}
          </div>
          <div className="font-lexed-medium text-base text-secondary">
            {phone_number}
          </div>
          <div className="w-full px-14 py-4">
            <Button3 title={"View Profile"} radius="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
