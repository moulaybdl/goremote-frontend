
'use client';

import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import ProjectGraph from './ProjectGraph';
import CurrentProjectCard from './CurrentProjectCard';
import { Briefcase, FileText, Link as LinkIcon, BarChart3 } from 'lucide-react';
import { DashboardData, Project } from '@/types/project';

// Mock data service - replace with actual API calls
const mockDashboardService = {
  getDashboardData: async (): Promise<DashboardData> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      stats: {
        openProjects: 12,
        totalApplications: 102,
        bestMatching: 98,
        avgApplications: 12
      },
      graphData: [
        { label: 'Jan', value: 45 },
        { label: 'Feb', value: 30 },
        { label: 'Mar', value: 38 },
        { label: 'Apr', value: 28 },
        { label: 'May', value: 35 },
        { label: 'Jun', value: 42 },
      ],
      currentProjects: [
        {
          id: '1',
          title: 'Basic website for my car agency',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          status: 'open',
          statusLabel: 'Open',
          statusColor: 'purple',
          matchPercentage: 90,
          matchLabel: 'best candidate match found',
          categories: [
            { name: 'Web Dev', color: '#EF4444' },
            { name: 'Design', color: '#8B5CF6' },
            { name: 'Marketing', color: '#F59E0B' },
          ],
          createdAt: '2024-01-15',
          updatedAt: '2024-01-20',
          stats: {
            totalApplications: 102,
            bestMatching: 98,
            avgApplications: 12,
            openPositions: 3
          },
          applications: [],
          teamMembers: []
        },
        {
          id: '2',
          title: 'E-commerce platform development',
          description: 'Develop a full-featured e-commerce platform with payment integration and inventory management',
          status: 'open',
          statusLabel: 'Open',
          statusColor: 'red',
          matchPercentage: 48,
          matchLabel: 'best candidate match found',
          categories: [
            { name: 'Web Dev', color: '#EF4444' },
            { name: 'E-commerce', color: '#10B981' },
            { name: 'Backend', color: '#8B5CF6' },
          ],
          createdAt: '2024-01-10',
          updatedAt: '2024-01-18',
          stats: {
            totalApplications: 75,
            bestMatching: 85,
            avgApplications: 8,
            openPositions: 2
          },
          applications: [],
          teamMembers: []
        },
        {
          id: '3',
          title: 'Mobile app for fitness tracking',
          description: 'Create a cross-platform mobile application for fitness and health tracking with social features',
          status: 'open',
          statusLabel: 'Open',
          statusColor: 'cyan',
          matchPercentage: 63,
          matchLabel: 'best candidate match found',
          categories: [
            { name: 'Mobile', color: '#3B82F6' },
            { name: 'Health', color: '#8B5CF6' },
            { name: 'React Native', color: '#61DAFB' },
          ],
          createdAt: '2024-01-05',
          updatedAt: '2024-01-22',
          stats: {
            totalApplications: 89,
            bestMatching: 92,
            avgApplications: 11,
            openPositions: 4
          },
          applications: [],
          teamMembers: []
        },
      ]
    };
  }
};

function ProjectsDashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await mockDashboardService.getDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full text-white p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border-b-2 border-purple-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full text-white p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center text-red-400">
          <p className="text-sm sm:text-base">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return null;
  }

  const { stats, graphData, currentProjects } = dashboardData;

  return (
    <div className="min-h-screen w-full text-white p-4 sm:p-6 lg:p-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Projects dashboard</h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">track and manage your projects</p>
        </div>

        {/* Stats and ProjectGraph Section - 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-14">
          {/* 4 Cards Grid - 50% */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <InfoCard
              title="Open"
              subtitle="Projects"
              number={stats.openProjects}
              icon={<Briefcase className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              variant="primary"
            />

            <InfoCard
              title="total"
              subtitle="Applications"
              number={stats.totalApplications}
              icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              variant="purple"
            />

            <InfoCard
              title="best"
              subtitle="Matching"
              number={`${stats.bestMatching}%`}
              icon={<LinkIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              variant="yellow"
            />

            <InfoCard
              title="Avg"
              subtitle="Applications"
              number={stats.avgApplications}
              icon={<BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              variant="teal"
            />
          </div>

          {/* Graph - 50% */}
          <div className="w-full">
            <ProjectGraph data={graphData} />
          </div>
        </div>

        {/* Current Projects Section */}
        <div className="bg-neutral-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-600 shadow-lg transition-all">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">Current projects</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Showing {currentProjects.length} active projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {currentProjects.map((project) => (
              <CurrentProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDashboard;