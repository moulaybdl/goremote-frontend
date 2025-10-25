
import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface TeamCardProps {
  id: string;
  name: string;
  role: string;
  roleColor: string;
  avatar?: string;
  onRemove?: () => void;
  onViewProfile?: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  id,
  name,
  role,
  roleColor,
  avatar,
  onRemove,
  onViewProfile,
}) => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 border border-gray-700/50 shadow-lg hover:border-gray-600 transition-all">
      <div className="flex flex-col items-center">
        {/* Circles and Profile Picture Container */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-6">
          {/* Outermost circle with bottom transparency */}
          <div 
            className="absolute inset-0 rounded-full border border-neutral-500"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 95%)'
            }}
          ></div>
          
          {/* Middle circle with bottom transparency */}
          <div 
            className="absolute inset-8 rounded-full border border-neutral-500"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 95%)'
            }}
          ></div>
          
          {/* Inner circle with bottom transparency */}
          <div 
            className="absolute inset-16 rounded-full border border-neutral-500"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 95%)'
            }}
          ></div>
          
          {/* Profile picture */}
          <div className="absolute w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-500">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-2xl font-semibold">
                {name.charAt(0)}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-white font-semibold text-lg mb-2">{name}</h3>

        <span
          className="px-3 py-1 rounded-full text-xs font-medium inline-block mb-6"
          style={{
            backgroundColor: `${roleColor}20`,
            color: roleColor,
            border: `1px solid ${roleColor}40`,
          }}
        >
          {role}
        </span>

        <div className="flex gap-3 w-full">
          <button
            onClick={onRemove}
            className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-red-600 hover:border-red-500 text-red-500 hover:text-red-400 px-4 py-2.5 rounded-full font-medium transition-colors text-sm"
          >
            <X className="w-4 h-4" />
            Remove
          </button>
          <button
            onClick={onViewProfile}
            className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2.5 rounded-full font-medium transition-colors text-sm"
          >
            View Profile
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;