import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import { fetchPageData } from '@/lib/payload';
import Link from 'next/link';

export default async function Home() {
  try {
    const { profile, socialLinks, ctaButtons, projects, blogPosts } = await fetchPageData();
    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
    const latestPosts = blogPosts.slice(0, 3);

    return (
      <>
        <Header socialLinks={socialLinks} name={profile.name} />
        <HeroSection profile={profile} ctaButtons={ctaButtons} />

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container-max">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {featuredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div className="text-center">
                <Link href="/projects" className="text-primary-600 font-semibold hover:underline">
                  View All Projects →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Latest Blog Section */}
        {latestPosts.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container-max">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {latestPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              <div className="text-center">
                <Link href="/blog" className="text-primary-600 font-semibold hover:underline">
                  Read More Articles →
                </Link>
              </div>
            </div>
          </section>
        )}

        <Footer profile={profile} socialLinks={socialLinks} />
      </>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Portfolio</h1>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }
}
