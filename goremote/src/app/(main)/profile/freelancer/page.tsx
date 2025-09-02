"use client";

import DetailedFreelancerCard from "@/components/freelancerProfile/detailedFreelancerCard";
import FreelancerPortfolioSection from "@/components/sections/freelancerProfile/freelancerPortfolio";
import FreelanceServices from "@/components/sections/freelancerProfile/freelancerServices";
import Navbar from "@/components/ui/navbar";
import { useState } from "react";

const tabs = ["Services", "Portfolio"];

const tabs_compo = [<FreelanceServices />, <FreelancerPortfolioSection />];

export default function FreelancerProfile() {
  const [profileTabs, setprofileTabs] = useState(tabs);
  const [profileTabSections, setprofileTabSections] = useState(tabs_compo);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* navbar */}
      <div className="w-full">
        <Navbar />
      </div>
      {/* content */}
      <div className="flex flex-row gap-4">
        {/* freelancer card */}
        <div className="flex flex-row mb-4">
          {/* Freelancer card */}
          <div className="">
            <DetailedFreelancerCard
              name={"Moulay Bouabelli"}
              description={"Web developer"}
              icons={["github"]}
              experience_level={"Expert"}
              categories={[
                {
                  color: "bg-[#FFC800]",
                  name: "Web Development",
                },
              ]}
              skills={[
                {
                  color: "bg-[#FF3C58]",
                  name: "React.js",
                },
              ]}
            />
          </div>
          {/* tabs section */}
          <div className=""></div>
        </div>
        {/* tabs */}
        <div className="w-fullflex flex-col gap-6 p-4">
          {/* tabs */}
          <div className="flex flex-row gap-5 justify-start">
            {tabs.map((tab, index) => {
              return (
                <div
                  className={`select-none cursor-pointer ${
                    activeTab === index
                      ? "text-primary-500"
                      : "text-neutral-400"
                  }`}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </div>
              );
            })}
          </div>
          {/* displayed section */}
          <div className="p-4">
            {profileTabSections && profileTabSections[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
}
