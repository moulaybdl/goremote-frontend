
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Project } from '@/types/project';

interface CurrentProjectCardProps extends Omit<Project, 'description' | 'createdAt' | 'updatedAt' | 'stats' | 'applications' | 'teamMembers'> {}

const CurrentProjectCard: React.FC<CurrentProjectCardProps> = ({
  id,
  title,
  matchPercentage,
  matchLabel,
  statusLabel,
  categories,
  statusColor,
}) => {
  const router = useRouter();

  const getStatusColorClass = () => {
    switch (statusColor) {
      case 'purple':
        return 'text-purple-400';
      case 'red':
        return 'text-red-400';
      case 'cyan':
        return 'text-cyan-400';
      default:
        return 'text-purple-400';
    }
  };

  const handleViewDetails = () => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <div className="bg-neutral-600 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-lg hover:border-gray-600 transition-all relative">
      <div className="flex items-start justify-between mb-4 sm:mb-6 lg:mb-8">
        <div>
          <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${getStatusColorClass()} mb-1`}>
            {matchPercentage}%
          </h3>
          <p className="text-gray-400 text-xs">{matchLabel}</p>
        </div>
        <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
          {statusLabel}
        </span>
      </div>

      <h4 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6 lg:mb-8 line-clamp-2">{title}</h4>

      <div className="mb-12 sm:mb-16 lg:mb-20">
        <p className="text-gray-400 text-xs mb-2 sm:mb-3">required categories:</p>
        <div className="flex gap-1 sm:gap-2 flex-wrap">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${category.color}33`,
                color: category.color,
                border: `1px solid ${category.color}66`,
              }}
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>

      {/* View Details Button*/}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
        <button
          onClick={handleViewDetails}
          className="flex items-center justify-center bg-purple-500/20 hover:bg-purple-500/30 gap-2bg-neutral-600 px-4 sm:px-7 border border-gray-700/50 text-white py-2 rounded-full font-medium transition-colors text-xs sm:text-sm"
        >
          View details
          <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default CurrentProjectCard;