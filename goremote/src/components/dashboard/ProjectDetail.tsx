
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
      <div className="min-h-screen w-full text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full text-white p-8 flex items-center justify-center">
        <div className="text-center text-red-400">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen w-full text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <p>Project not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-white p-8">
      <div className="mx-auto">
        <div className="flex items-center justify-between my-20">
          <div className="flex items-center gap-4">
            <h1 className="text-5xl font-light">{project.title}</h1>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">
              {project.statusLabel}
            </span>
          </div>
          <button className="flex items-center gap-2 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors border border-gray-700">
            Go Announcement
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="border-b border-gray-800 mb-10">
          <div className="flex gap-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 pb-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-400 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                  <span className="font-medium text-xl">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {activeTab === 'overview' && (
            <OverviewSection 
              project={project}
            />
          )}
          {activeTab === 'applications' && (
            <ApplicationsSection 
              applications={project.applications}
              totalApplications={project.stats.totalApplications}
            />
          )}
          {activeTab === 'team' && (
            <TeamsSection 
              teamMembers={project.teamMembers}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;