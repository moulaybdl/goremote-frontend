
import React from 'react';
import { MoreVertical } from 'lucide-react';

interface Application {
  id: string;
  name: string;
  applicationDate: string;
  role: string;
  roleColor: string;
}

interface ApplicationsListProps {
  applications: Application[];
}

const ApplicationsList: React.FC<ApplicationsListProps> = ({ applications }) => {
  return (
    <div className="bg-neutral-600 rounded-2xl p-4 sm:p-6 border border-gray-700/50 shadow-lg h-full flex flex-col">
      <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium py-3 sm:py-5 mb-4 sm:mb-8">Recent applications:</h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left text-gray-400 text-base sm:text-lg lg:text-xl font-medium pb-3 sm:pb-4">Name</th>
              <th className="text-left text-gray-400 text-base sm:text-lg lg:text-xl font-medium pb-3 sm:pb-4">Application date</th>
              <th className="text-left text-gray-400 text-base sm:text-lg lg:text-xl font-medium pb-3 sm:pb-4">Role</th>
              <th className="text-left text-gray-400 text-base sm:text-lg lg:text-xl font-medium pb-3 sm:pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr
                key={application.id}
                className={`border-b border-gray-800 hover:bg-gray-800/30 transition-colors ${
                  index === applications.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <td className="py-3 sm:py-4 text-white font-medium text-sm sm:text-base">{application.name}</td>
                <td className="py-3 sm:py-4 text-gray-400 text-sm sm:text-base">{application.applicationDate}</td>
                <td className="py-3 sm:py-4">
                  <span
                    className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium inline-block"
                    style={{
                      backgroundColor: `${application.roleColor}33`,
                      color: application.roleColor,
                      border: `1px solid ${application.roleColor}66`,
                    }}
                  >
                    {application.role}
                  </span>
                </td>
                <td className="py-3 sm:py-4">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;