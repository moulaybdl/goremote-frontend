import React from 'react';
import { BarChart3 } from 'lucide-react';

interface GraphProps {
  data?: { label: string; value: number }[];
}

const ProjectGraph: React.FC<GraphProps> = ({ data }) => {
  const defaultData = [
    { label: 'project1', value: 45 },
    { label: 'project2', value: 30 },
    { label: 'project3', value: 38 },
    { label: 'project4', value: 28 },
  ];

  const chartData = data || defaultData;
  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="bg-neutral-600 rounded-2xl p-6 border border-gray-700/50 shadow-lg h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
        <div>
          <h3 className="text-white text-lg font-semibold">Number of applications</h3>
          <p className="text-gray-400 text-sm">Per Project</p>
        </div>
      </div>

      <div className="flex-1 relative min-h-[280px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between text-gray-500 text-xs py-2">
          <span>50</span>
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-6 h-full flex items-end justify-around gap-4 sm:gap-6 border-b border-l border-gray-700 pb-6 pl-2">
          {chartData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="flex flex-col items-center justify-end h-full w-full">
                <div
                  className="w-full max-w-[40px] bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-md transition-all duration-300 hover:from-cyan-400 hover:to-cyan-300 shadow-lg hover:shadow-cyan-500/25"
                  style={{ 
                    height: `${(item.value / maxValue) * 100}%`,
                    minHeight: '8px'
                  }}
                />
                <span className="text-gray-400 text-xs mt-2 text-center px-1">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none ml-6">
          {/* Horizontal grid lines */}
          <div className="absolute left-0 right-0 top-0 border-t border-gray-700/50" style={{ top: '0%' }}></div>
          <div className="absolute left-0 right-0 top-0 border-t border-gray-700/50" style={{ top: '20%' }}></div>
          <div className="absolute left-0 right-0 top-0 border-t border-gray-700/50" style={{ top: '40%' }}></div>
          <div className="absolute left-0 right-0 top-0 border-t border-gray-700/50" style={{ top: '60%' }}></div>
          <div className="absolute left-0 right-0 top-0 border-t border-gray-700/50" style={{ top: '80%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGraph;