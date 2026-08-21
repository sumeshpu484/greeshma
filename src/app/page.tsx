import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import ScrollSection from '@/components/ScrollSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import { fetchPageData } from '@/lib/payload';

export default async function Home() {
  try {
    const { profile, socialLinks, ctaButtons, projects, blogPosts } = await fetchPageData();
    const allProjects = projects;
    const allPosts = blogPosts;

    return (
      <>
        <Header socialLinks={socialLinks} name={profile.name} />

        {/* Hero Section */}
        <HeroSection profile={profile} ctaButtons={ctaButtons} />

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* All Projects Scroll Section */}
        {allProjects.length > 0 && (
          <ScrollSection
            title="My Projects"
            items={allProjects.slice(0, 12)}
            type="projects"
            viewAllLink="/projects"
          />
        )}

        {/* Latest Blog Posts Scroll Section */}
        {allPosts.length > 0 && (
          <ScrollSection
            title="Latest Articles & Insights"
            items={allPosts.slice(0, 9)}
            type="blog"
            viewAllLink="/blog"
          />
        )}

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
          <div className="container-max">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Get In Touch</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Let's collaborate on your next amazing project. Feel free to reach out!
              </p>
              <a
                href="#contact"
                className="btn-primary inline-block"
              >
                Send Me a Message
              </a>
            </div>
          </div>
        </section>

        <Footer profile={profile} socialLinks={socialLinks} />
      </>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100 mb-2">Portfolio</h1>
          <p className="text-slate-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }
}
