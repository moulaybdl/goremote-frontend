// types/project.ts
export interface Category {
  name: string;
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleColor: string;
  avatar?: string;
  email?: string;
  joinDate?: string;
}

export interface Application {
  id: string;
  name: string;
  applicationDate: string;
  role: string;
  roleColor: string;
  matchingLevel: number;
  avatar?: string;
  email?: string;
  status?: 'pending' | 'accepted' | 'rejected';
}

export interface ProjectStats {
  totalApplications: number;
  bestMatching: number;
  avgApplications: number;
  openPositions: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'closed' | 'in-progress' | 'completed';
  statusLabel: string;
  statusColor: string;
  matchPercentage: number;
  matchLabel: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
  stats: ProjectStats;
  applications: Application[];
  teamMembers: TeamMember[];
}

export interface DashboardData {
  stats: {
    openProjects: number;
    totalApplications: number;
    bestMatching: number;
    avgApplications: number;
  };
  graphData: { label: string; value: number }[];
  currentProjects: Project[];
}