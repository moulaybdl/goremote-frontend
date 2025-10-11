"use client";

import DetailedFreelancerCard from "@/components/freelancerProfile/detailedFreelancerCard";
import FreelancerPortfolioSection from "@/components/sections/freelancerProfile/freelancerPortfolio";
import FreelanceServices from "@/components/sections/freelancerProfile/freelancerServices";
import Navbar from "@/components/ui/navbar";
import { useState } from "react";

const PackageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const FolderIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);


const tabs = [
  { name: "Services", icon: PackageIcon },
  { name: "Portfolio", icon: FolderIcon }
];
const tabs_compo = [<FreelanceServices />, <FreelancerPortfolioSection />];

export default function FreelancerProfile() {
  const [profileTabs, setprofileTabs] = useState(tabs);
  const [profileTabSections, setprofileTabSections] = useState(tabs_compo);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full min-h-screen bg-black">
      {/* navbar */}
      <div className="w-full">
        <Navbar />
      </div>
      
      {/* content */}
      <div className="flex flex-row gap-8 p-8">
        {/* freelancer card */}
        <div className="flex-shrink-0">
          <DetailedFreelancerCard
            name={"Moulay"}
            description="Web developer"
            experience_level="Expert"
            icons={["github"]}
            categories={[
              { color: "bg-green-500", name: "Development" },
              { color: "bg-cyan-400", name: "Design" }
            ]}
            skills={[
              { color: "bg-yellow-500", name: "JavaScript" },
              { color: "bg-pink-500", name: "React" }
            ]}
          />
        </div>

        {/* tabs section */}
        <div className="flex-1 flex flex-col ml-10 mt-15">
          {/* tabs */}
          <div className="relative flex flex-row gap-8 border-b border-neutral-800">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={index}
                  className={`relative flex items-center gap-2 pb-4 px-2 transition-all duration-300 ease-in-out ${
                    activeTab === index
                      ? "text-primary-500"
                      : "text-neutral-400 hover:text-neutral-300"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <Icon className="w-8 h-8" />
                  <span className="font-semibold text-xl">{tab.name}</span>
                  
                  {/* Active indicator line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 transition-all duration-300 ease-in-out ${
                      activeTab === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* displayed section with smooth transition */}
          <div className="mt-8 relative">
            <div className="transition-opacity duration-300 ease-in-out">
              {tabs_compo[activeTab]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}