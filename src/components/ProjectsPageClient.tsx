'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Project, Profile, SocialLink } from '@/types';

interface ProjectsPageClientProps {
  projects: Project[];
  profile: Profile;
  socialLinks: SocialLink[];
}

export default function ProjectsPageClient({
  projects,
  profile,
  socialLinks,
}: ProjectsPageClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.320, 1] },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-blue-600 font-medium mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore a selection of strategic initiatives and transformative projects I've led across operations, technology, and organizational development.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-lg text-gray-600">Projects coming soon. Check back later!</p>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
