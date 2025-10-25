import React from 'react';

interface InfoCardProps {
  title: string;
  subtitle: string;
  number: string | number;
  icon: React.ReactNode;
  variant: 'primary' | 'purple' | 'yellow' | 'teal' | 'cyan' | 'red' | 'green';
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  number,
  icon,
  variant,
}) => {
  const variantStyles = {
    primary: {
      bg: 'bg-slate-800',
      border: 'border-slate-600',
      gradient: 'from-white/25 to-transparent',
      iconColor: 'text-cyan-400',
      titleColor: 'text-gray-400',
      subtitleColor: 'text-white',
      numberColor: 'text-white',
    },
    purple: {
      bg: 'bg-purple-900/30',
      border: 'border-purple-700/50',
      gradient: 'from-white/25 to-purple-900/10',
      iconColor: 'text-purple-400',
      titleColor: 'text-purple-300/70',
      subtitleColor: 'text-purple-100',
      numberColor: 'text-purple-50',
    },
    yellow: {
      bg: 'bg-yellow-900/20',
      border: 'border-yellow-700/40',
      gradient: 'from-white/25 to-yellow-900/10',
      iconColor: 'text-yellow-500',
      titleColor: 'text-yellow-300/70',
      subtitleColor: 'text-yellow-100',
      numberColor: 'text-yellow-50',
    },
    teal: {
      bg: 'bg-teal-900/20',
      border: 'border-teal-700/40',
      gradient: 'from-white/25 to-teal-900/10',
      iconColor: 'text-teal-400',
      titleColor: 'text-teal-300/70',
      subtitleColor: 'text-teal-100',
      numberColor: 'text-teal-50',
    },
    cyan: {
      bg: 'bg-cyan-900/20',
      border: 'border-cyan-700/40',
      gradient: 'from-white/25 to-cyan-900/10',
      iconColor: 'text-cyan-400',
      titleColor: 'text-cyan-300/70',
      subtitleColor: 'text-cyan-100',
      numberColor: 'text-cyan-50',
    },
    red: {
      bg: 'bg-red-900/20',
      border: 'border-red-700/40',
      gradient: 'from-white/25 to-red-900/10',
      iconColor: 'text-red-400',
      titleColor: 'text-red-300/70',
      subtitleColor: 'text-red-100',
      numberColor: 'text-red-50',
    },
    green: {
      bg: 'bg-green-900/20',
      border: 'border-green-700/40',
      gradient: 'from-white/25 to-green-900/10',
      iconColor: 'text-green-400',
      titleColor: 'text-green-300/70',
      subtitleColor: 'text-green-100',
      numberColor: 'text-green-50',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`${styles.bg} rounded-2xl p-4 sm:p-6 lg:p-8 border ${styles.border} shadow-lg w-full`}>
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="py-1 sm:py-2">
          <p className={`${styles.titleColor} text-xs sm:text-sm font-medium`}>{title}</p>
          <p className={`${styles.subtitleColor} text-xl sm:text-2xl lg:text-3xl font-medium mt-1`}>{subtitle}</p>
        </div>

        {/* Subtle top-left gradient behind icon */}
        <div
          className={`p-2 sm:p-3 rounded-xl border ${styles.border} bg-gradient-to-br ${styles.gradient}`}
          style={{
            backgroundImage:
              'linear-gradient(to bottom right, rgba(255,255,255,0.25) 10%, transparent 70%)',
          }}
        >
          <div className={`${styles.iconColor} w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7`}>
            {icon}
          </div>
        </div>
      </div>

      <div className={`${styles.numberColor} text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-3 sm:mt-4`}>
        {number}
      </div>
    </div>
  );
};

export default InfoCard;