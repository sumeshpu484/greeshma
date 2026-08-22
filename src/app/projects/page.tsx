import { Metadata } from 'next';
import { mockPageData } from '@/lib/mock-data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'View my work and projects',
};

export default function ProjectsPage() {
  try {
    const projects = mockPageData.projects;

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-max py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            My Projects
          </h1>
          {projects.length === 0 ? (
            <p className="text-center text-gray-600">No projects yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }
}
