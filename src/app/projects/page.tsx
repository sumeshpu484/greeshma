import { Metadata } from 'next';
import { fetchProjects, fetchPageData } from '@/lib/payload';
import ProjectCard from '@/components/ProjectCard';
import HeaderMinimal from '@/components/HeaderMinimal';
import FooterMinimal from '@/components/FooterMinimal';
import ProjectsPageClient from '@/components/ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'View my work and strategic initiatives',
};

export default async function ProjectsPage() {
  try {
    const projects = await fetchProjects();
    const { profile, socialLinks } = await fetchPageData();

    return (
      <div className="min-h-screen bg-white">
        <HeaderMinimal socialLinks={socialLinks} name={profile.name} />
        <ProjectsPageClient projects={projects} profile={profile} socialLinks={socialLinks} />
        <FooterMinimal profile={profile} socialLinks={socialLinks} />
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }
}
