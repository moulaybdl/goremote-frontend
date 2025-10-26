

'use client';

import React, { useState, useEffect } from 'react';
import OverviewSection from '@/components/dashboard/OverviewSection';
import ApplicationsSection from '@/components/dashboard/ApplicationsSection';
import TeamsSection from '@/components/dashboard/TeamSection';
import { Pencil, FileText, Users, ExternalLink } from 'lucide-react';
import { Project } from '@/types/project';

// Mock project service - replace with actual API calls
const mockProjectService = {
  getProject: async (id: string): Promise<Project> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const projects: { [key: string]: Project } = {
      '1': {
        id: '1',
        title: 'Basic website for my car agency',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
        applications: [
          {
            id: '1',
            name: 'Moulay Bouabdelli',
            applicationDate: '2024-01-18',
            role: 'backend developer',
            roleColor: '#8B5CF6',
            matchingLevel: 98,
            email: 'moulay@example.com',
            status: 'pending'
          },
          {
            id: '2',
            name: 'Mohamed Frihaoui',
            applicationDate: '2024-01-17',
            role: 'DevOps',
            roleColor: '#F59E0B',
            matchingLevel: 64,
            email: 'mohamed@example.com',
            status: 'pending'
          },
          {
            id: '3',
            name: 'Sarah Johnson',
            applicationDate: '2024-01-16',
            role: 'Frontend developer',
            roleColor: '#3B82F6',
            matchingLevel: 87,
            email: 'sarah@example.com',
            status: 'pending'
          },
        ],
        teamMembers: [
          {
            id: '1',
            name: 'Moulay',
            role: 'backend developer',
            roleColor: '#8B5CF6',
            email: 'moulay@team.com',
            joinDate: '2024-01-10'
          },
          {
            id: '2',
            name: 'Ahmed',
            role: 'Frontend developer',
            roleColor: '#F59E0B',
            email: 'ahmed@team.com',
            joinDate: '2024-01-12'
          },
          {
            id: '3',
            name: 'Fatima',
            role: 'UI/UX Designer',
            roleColor: '#EC4899',
            email: 'fatima@team.com',
            joinDate: '2024-01-08'
          },
        ]
      },
      '2': {
        id: '2',
        title: 'E-commerce platform development',
        description: 'Develop a full-featured e-commerce platform with payment integration, inventory management, and customer relationship management features. The platform should support multiple vendors and have advanced analytics capabilities.',
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
        applications: [
          {
            id: '1',
            name: 'John Doe',
            applicationDate: '2024-01-17',
            role: 'Fullstack developer',
            roleColor: '#8B5CF6',
            matchingLevel: 85,
            email: 'john@example.com',
            status: 'pending'
          },
        ],
        teamMembers: [
          {
            id: '1',
            name: 'John',
            role: 'Fullstack developer',
            roleColor: '#8B5CF6',
            email: 'john@team.com',
            joinDate: '2024-01-05'
          },
        ]
      }
    };

    const project = projects[id];
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  }
};

interface ProjectDetailProps {
  projectId: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'team'>('overview');
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const projectData = await mockProjectService.getProject(projectId);
        setProject(projectData);
      } catch (err) {
        setError('Failed to load project data');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Pencil },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'team', label: 'Team', icon: Users },
  ];

  if (loading) {
    return (
      <div className="min-h-screen w-full text-white p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 border-b-2 border-purple-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen w-full text-white p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-sm sm:text-base mb-2 sm:mb-3">{error || 'Project not found'}</p>
          <button 
            onClick={() => window.history.back()}
            className="text-purple-400 hover:text-purple-300 text-xs sm:text-sm"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-white p-4 sm:p-6 lg:p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                  {project.statusLabel}
                </span>
                <span className="text-gray-400">Created {project.createdAt}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Last updated {project.updatedAt}</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-full text-purple-400 transition-colors text-sm sm:text-base">
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Edit Project
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-700 mb-6 sm:mb-8 lg:mb-12">
          <nav className="flex space-x-4 sm:space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 py-2 sm:py-3 px-1 border-b-2 transition-colors whitespace-nowrap text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'border-purple-400 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-7 sm:w-7 sm:h-7" />
             <span className="font-medium sm:text-xl text-base">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && <OverviewSection project={project} />}
          {activeTab === 'applications' && (
            <ApplicationsSection 
              applications={project.applications} 
              totalApplications={project.stats.totalApplications} 
            />
          )}
          {activeTab === 'team' && <TeamsSection teamMembers={project.teamMembers} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;