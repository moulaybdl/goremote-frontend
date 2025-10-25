// app/dashboard/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import ProjectDetail from '@/components/dashboard/ProjectDetail';
import { useParams } from 'next/navigation';

export default function ProjectDetailPage() {
  const params = useParams();
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      setProjectId(params.id as string);
    }
  }, [params.id]);

  if (!projectId) {
    return (
      <div className="min-h-screen w-full text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p>Loading project...</p>
        </div>
      </div>
    );
  }

  return <ProjectDetail projectId={projectId} />;
}