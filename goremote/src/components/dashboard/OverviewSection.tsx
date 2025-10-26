

import React from 'react';
import InfoCard from '@/components/dashboard/InfoCard';
import AppGraph from '@/components/dashboard/ApplicantsGraph';
import ApplicationsList from '@/components/dashboard/ApplicationsList';
import { FileText, Link as LinkIcon } from 'lucide-react';
import { Project } from '@/types/project';

interface OverviewSectionProps {
  project: Project;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ project }) => {
  const graphData = [
    { label: 'Backend', value: 45 },
    { label: 'Frontend', value: 30 },
    { label: 'DevOps', value: 38 },
    { label: 'Design', value: 28 },
    { label: 'Fullstack', value: 35 },
  ];

  return (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 mt-4 sm:mt-10">Project descriptions:</h2>
          <p className="text-gray-400 leading-relaxed mb-8 sm:mb-12 lg:mb-17 text-base sm:text-lg lg:text-xl">
            {project.description}
          </p>
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Some insights:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <InfoCard
              title="total"
              subtitle="Applications"
              number={project.stats.totalApplications}
              icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              variant="purple"
            />

            <InfoCard
              title="best"
              subtitle="Matching"
              number={`${project.stats.bestMatching}%`}
              icon={<LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              variant="yellow"
            />
          </div>
        </div>
        <div>
          <AppGraph data={graphData} />
        </div>
      </div>

      <ApplicationsList applications={project.applications.slice(0, 5)} />
    </div>
  );
};

export default OverviewSection;