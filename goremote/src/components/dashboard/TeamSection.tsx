
'use client';

import React, { useState } from 'react';
import TeamCard from '@/components/dashboard/TeamCard';
import { ChevronDown } from 'lucide-react';
import { TeamMember } from '@/types/project';

interface TeamsSectionProps {
  teamMembers: TeamMember[];
}

const TeamsSection: React.FC<TeamsSectionProps> = ({ teamMembers = [] }) => {
  const [matchingLevel, setMatchingLevel] = useState('');
  const [date, setDate] = useState('');
  const [role, setRole] = useState('');

  const handleRemoveMember = (id: string) => {
    console.log('Remove member:', id);
    // Add logic to remove team member
  };

  const handleViewProfile = (id: string) => {
    console.log('View profile:', id);
    // Add navigation or modal logic here
  };

  // Filter team members based on selected filters
  const filteredTeamMembers = teamMembers.filter(member => {
    if (role && !member.role.toLowerCase().includes(role.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Team members: {teamMembers.length}</h2>
        <p className="text-gray-400 text-sm">
          Showing {filteredTeamMembers.length} team members
        </p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-400 mb-4">Filter:</span>
        
        <div className="relative">
          <select
            value={matchingLevel}
            onChange={(e) => setMatchingLevel(e.target.value)}
            className="appearance-none bg-neutral-600 border border-gray-700 text-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-gray-600 cursor-pointer"
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
            className="appearance-none bg-neutral-600 border border-gray-700 text-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-gray-600 cursor-pointer"
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
            className="appearance-none bg-neutral-600 border border-gray-700 text-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:border-gray-600 cursor-pointer"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTeamMembers.map((member) => (
          <TeamCard
            key={member.id}
            id={member.id}
            name={member.name}
            role={member.role}
            roleColor={member.roleColor}
            avatar={member.avatar}
            onRemove={() => handleRemoveMember(member.id)}
            onViewProfile={() => handleViewProfile(member.id)}
          />
        ))}
      </div>

      {filteredTeamMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No team members found matching your filters</p>
        </div>
      )}
    </div>
  );
};

export default TeamsSection;