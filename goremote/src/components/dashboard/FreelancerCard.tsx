

import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface FreelancerCardProps {
  id: string;
  name: string;
  role: string;
  roleColor: string;
  matchingLevel: number;
  avatar?: string;
  onViewProfile?: () => void;
  onAddToTeam?: () => void;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({
  id,
  name,
  role,
  roleColor,
  matchingLevel,
  avatar,
  onViewProfile,
  onAddToTeam,
}) => {
  const getMatchingColor = () => {
    if (matchingLevel >= 90) return 'bg-purple-500';
    if (matchingLevel >= 70) return 'bg-cyan-500';
    if (matchingLevel >= 50) return 'bg-orange-500';
    return 'bg-gray-500';
  };

  return (
    <div className="bg-neutral-600 rounded-2xl p-4 sm:p-6 border border-gray-700/50 shadow-lg hover:border-gray-600 transition-all">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-sm sm:text-base lg:text-lg font-semibold">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base">{name}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Freelancer</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="mb-4 sm:mb-6">
        <p className="text-gray-400 text-xs mb-1 sm:mb-2">Role:</p>
        <span
          className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium inline-block"
          style={{
            backgroundColor: `${roleColor}33`,
            color: roleColor,
            border: `1px solid ${roleColor}66`,
          }}
        >
          {role}
        </span>
      </div>

      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <p className="text-gray-400 text-xs">Matching level:</p>
          <p className="text-white text-xs sm:text-sm font-semibold">{matchingLevel}%</p>
        </div>
        <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className={`h-full ${getMatchingColor()} transition-all duration-300`}
            style={{ width: `${matchingLevel}%` }}
          />
        </div>
      </div>

      <div className="flex gap-1 sm:gap-2">
        <button
          onClick={onViewProfile}
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-transparent border border-cyan-700 hover:border-gray-500 text-white px-2 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium transition-colors text-xs sm:text-sm"
        >
          View Profile
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={onAddToTeam}
          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-2 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium transition-colors text-xs sm:text-sm"
        >
          + Add to team
        </button>
      </div>
    </div>
  );
};

export default FreelancerCard;