
'use client';

import React, { useState } from 'react';
import FreelancerCard from '@/components/dashboard/FreelancerCard';
import { ChevronDown } from 'lucide-react';
import { Application } from '@/types/project';

interface ApplicationsSectionProps {
  applications: Application[];
  totalApplications: number;
}

const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ 
  applications = [], 
  totalApplications = 0 
}) => {
  const [matchingLevel, setMatchingLevel] = useState('');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('');

  const handleViewProfile = (id: string) => {
    console.log('View profile:', id);
    // Add navigation or modal logic here
  };

  const handleAddToTeam = (id: string) => {
    console.log('Add to team:', id);
    // Add logic to add freelancer to team
  };

  // Filter applications based on selected filters
  const filteredApplications = applications.filter(app => {
    if (matchingLevel === 'high' && app.matchingLevel < 80) return false;
    if (matchingLevel === 'medium' && (app.matchingLevel < 50 || app.matchingLevel >= 80)) return false;
    if (matchingLevel === 'low' && app.matchingLevel >= 50) return false;
    if (role && !app.role.toLowerCase().includes(role.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Total applications: {totalApplications}</h2>
        <p className="text-gray-400 text-sm">
          Showing {filteredApplications.length} applications
        </p>
      </div>

      <div className="flex items-center gap-4 flex-wrap mb-8">
        <span className="text-gray-400 mb-4">Filter:</span>
        
        <div className="relative">
          <select
            value={matchingLevel}
            onChange={(e) => setMatchingLevel(e.target.value)}
            className="appearance-none bg-neutral-600 border border-gray-700 text-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-gray-600 cursor-pointer text-sm"
          >
            <option value="">Matching level</option>
            <option value="high">High (80-100%)</option>
            <option value="medium">Medium (50-79%)</option>
            <option value="low">Low (0-49%)</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="appearance-none bg-neutral-600 border border-gray-700 text-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-gray-600 cursor-pointer text-sm"
          >
            <option value="">Date</option>
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="appearance-none bg-neutral-600 border border-gray-700 text-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-gray-600 cursor-pointer text-sm"
          >
            <option value="">Role</option>
            <option value="backend">Backend Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="devops">DevOps</option>
            <option value="design">Designer</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {filteredApplications.map((application) => (
          <FreelancerCard
            key={application.id}
            id={application.id}
            name={application.name}
            role={application.role}
            roleColor={application.roleColor}
            matchingLevel={application.matchingLevel}
            avatar={application.avatar}
            onViewProfile={() => handleViewProfile(application.id)}
            onAddToTeam={() => handleAddToTeam(application.id)}
          />
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No applications found matching your filters</p>
        </div>
      )}
    </div>
  );
};

export default ApplicationsSection;