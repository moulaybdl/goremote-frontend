"use client";

import Button2 from "@/components/buttons/button2";
import Button3 from "@/components/buttons/buttons3";
import PrimaryButton from "@/components/buttons/primaryButton";
import Button4 from "@/components/buttons/button4";
import { SimpleTag, AvailabilityTag } from "@/components/tags/simpleTag";
import { ThemeToggle } from "@/components/ui/theme-switcher";
import LearnMoreButton from "@/components/buttons/LearnMoreButton";
import CoreFunctionalityCard from "@/components/cards/landingPage/coreFunctionalityCard";
import Image from "next/image";
import { motion } from "motion/react";

// images:
import workspacePNG from "@/components/cards/landingPage/img/workspace.svg";
import matchingSVG from "@/components/cards/landingPage/img/matching.svg";
import assistantSVG from "@/components/cards/landingPage/img/assistant.svg";
import portfolioSVG from "@/components/cards/landingPage/img/portfolio.svg";
import InputField1 from "@/components/input/inputField1";
import InputField2 from "@/components/input/inputField2";
import InputField3 from "@/components/input/inputField3";
import InputIcon from "@/components/input/inputIcon";
import InfoCard from "@/components/announcement/infoCard";
import DropDown1 from "@/components/input/dropDown1";
import FreelancerProfileCard from "@/components/cards/announcements/freelancerCard";
import RatingCard from "@/components/cards/announcements/ratingCard";
import CompanyCard from "@/components/cards/announcements/companyCard";
import LoginCard from "@/components/auth/loginCard";
import RoleCard from "@/components/auth/RoleCard";

export default function Moulay() {
  return (
    <div className="w-full h-full flex-col justify-start mt-10">
      {/* tags */}
      <div className="flex flex-col gap-5 ">
        <span className="font-lexend-medium text-2xl">General tags</span>
        <div className={`flex flex-row gap-2 `}>
          <SimpleTag title={"Expert"} color="bg-[#00FF5D]" />
          <SimpleTag title={"Intermediate"} color="bg-[#F6A93A]" />
          <SimpleTag title={"Beginner"} color="bg-[#3A8EF6]" />
        </div>
      </div>
      {/* company type */}
      <div className="flex flex-col gap-5 mt-5">
        <span className="font-lexend-medium text-2xl">Company type</span>
        <div className={`flex flex-row gap-2 `}>
          <SimpleTag title={"Start-up"} color="bg-[#12AFE4]" />
          <SimpleTag title={"Non-profit"} color="bg-[#12AFE4]" />
          <SimpleTag title={"Corporation"} color="bg-[#12AFE4]" />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-5 mt-5">
        <div className="font-lexend-medium text-2xl">Buttons</div>
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          <ThemeToggle />
          <PrimaryButton title="Freelancer" />
          <Button2 title="Company" />
          <Button3 title="Next" />
          <Button4 title="Previous" />
          <LearnMoreButton title="Learn More" />
        </div>
      </div>
      {/* Landing page */}
      <div className="flex flex-col gap-5 mt-5">
        <div className="font-lexend-medium text-2xl">
          Landing page componenets
        </div>
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
          <CoreFunctionalityCard
            title={"Perfect workspace"}
            description={
              "Our website provides a dedicated workspace to streamline collaboration with your teammates."
            }
            direction="right"
            image={workspacePNG}
          />
          <CoreFunctionalityCard
            title={"Smart matching"}
            description={
              "Our matching system considers your project context, company needs, and requirements, aligning them with the skills and experience of available freelancers to suggest the best-fit team."
            }
            direction="left"
            image={matchingSVG}
          />
          <CoreFunctionalityCard
            title={"AI Assistant"}
            description={
              "An AI assistant that refines vague technical ideas by asking clarifying questions, then suggests a tailored team of freelancers to build your project."
            }
            direction="right"
            image={assistantSVG}
          />
          <CoreFunctionalityCard
            title={"Dream Portfolio"}
            description={
              "Our website lets you create a portfolio to showcase your skills and attract potential clients."
            }
            direction="left"
            image={portfolioSVG}
          />
        </div>
      </div>
      {/* input fields */}
      <div className="flex flex-col gap-4 mt-15">
        <div className="font-lexend-medium text-2xl">Input fields</div>
        <div className="flex flex-col justify-start items-start gap-4 w-fit">
          <InputField1 />
          <span>-</span>
          <InputField2 placeholder="Enter taxt here" />
          <span>-</span>
          <InputField3 />
          <span>-</span>
          <InputIcon />
          <span>-</span>
          <DropDown1
            trigger={"filter"}
            label={"filte name"}
            items={["option 1", "option 2", "option 3"]}
          />
        </div>
      </div>
      {/* services and announcement components */}
      <div className="flex flex-col gap-5 mt-15">
        <div className="font-lexend-medium text-2xl">
          services and announcement components
        </div>
        <div className="flex flex-row gap-5">
          <InfoCard
            name={"Moulay Bouabelli"}
            tag={"Web developer"}
            availability={false}
            title={"Landing page for your website "}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore... "
            }
            delivery_time={"5-7 days"}
            price={""}
          />
          <FreelancerProfileCard
            firstname={"Moulay"}
            availability={true}
            experience_level={"Expert"}
          />
          <div className="flex flex-col gap-5">
            <RatingCard />
            <CompanyCard
              name={"Goremote"}
              label={"Startup"}
              Verified={true}
              email={"company@email.com"}
              phone_number={"+213 0 00 00 00 00"}
            />
          </div>
        </div>
      </div>
      {/* auth componenets */}
      <div className="flex flex-col gap-5 mt-15">
        <div className="font-lexend-medium text-2xl">
          Authentication componenets
        </div>
        <div className="flex flex-row gap-5">
          <LoginCard />
          <RoleCard />
        </div>
      </div>
    </div>
  );
}
