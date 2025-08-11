import Button2 from "@/components/buttons/button2";
import Button3 from "@/components/buttons/primaryButton";
import PrimaryButton from "@/components/buttons/primaryButton";
import Button4 from "@/components/buttons/button4";
import SimpleTag from "@/components/tags/simpleTag";
import { ThemeToggle } from "@/components/ui/theme-switcher";
import LearnMoreButton from "@/components/buttons/LearnMoreButton";
import CoreFunctionalityCard from "@/components/cards/landingPage/coreFunctionalityCard";
import Image from "next/image";

// images:
import workspacePNG from "@/components/cards/landingPage/img/workspace.svg";
import matchingSVG from "@/components/cards/landingPage/img/matching.svg";
import assistantSVG from "@/components/cards/landingPage/img/assistant.svg";
import portfolioSVG from "@/components/cards/landingPage/img/portfolio.svg";
import InputField1 from "@/components/input/inputField1";
import InputField2 from "@/components/input/inputField2";
import InputField3 from "@/components/input/inputField3";
import InputIcon from "@/components/input/inputIcon";

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
        <div className="font-lexend-medium">Landing page componenets</div>
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
        <div className="font-lexend-medium">Input fields</div>
        <div className="flex flex-row justify-center items-center gap-4 w-fit">
          <InputField1 />
          <span>-</span>
          <InputField2 />
          <span>-</span>
          <InputField3 />
          <span>-</span>
          <InputIcon />
        </div>
      </div>
    </div>
  );
}
