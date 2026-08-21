import Header from '@/components/Header';
import HeroSectionModern from '@/components/HeroSectionModern';
import Footer from '@/components/Footer';
import ProjectsModern from '@/components/ProjectsModern';
import SkillsModern from '@/components/SkillsModern';
import ServicesModern from '@/components/ServicesModern';
import TestimonialsModern from '@/components/TestimonialsModern';
import AboutSection from '@/components/AboutSection';
import PhotoGallery from '@/components/PhotoGallery';
import { fetchPageData } from '@/lib/payload';

export default async function Home() {
  try {
    const { profile, socialLinks, ctaButtons, projects, blogPosts } = await fetchPageData();

    return (
      <>
        <Header socialLinks={socialLinks} name={profile.name} />

        {/* Ultra-Modern Hero Section */}
        <HeroSectionModern profile={profile} ctaButtons={ctaButtons} />

        {/* Services Section */}
        <ServicesModern />

        {/* Skills Section */}
        <SkillsModern />

        {/* About Section with Photo */}
        <AboutSection
          photoUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=greeshma-workspace"
          title="About Me"
          description="I'm passionate about creating beautiful, performant digital experiences. With expertise in modern web technologies, I combine technical excellence with creative thinking to deliver solutions that exceed expectations."
        />

        {/* Photo Gallery Section */}
        <PhotoGallery
          title="Behind the Scenes"
          subtitle="A glimpse into my creative process and project work"
        />

        {/* Featured Projects */}
        {projects.length > 0 && <ProjectsModern projects={projects} />}

        {/* Testimonials Section */}
        <TestimonialsModern />

        {/* Contact CTA Section */}
        <section className="relative py-20 md:py-28">
          <div className="container-max">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div>
                <p className="text-label mb-4">Let's Create</p>
                <h2 className="text-display gradient-text-ultra mb-4">Ready to Build Something Great?</h2>
                <p className="text-body max-w-2xl mx-auto">
                  I'm always interested in hearing about new projects and opportunities to work with incredible people.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="mailto:contact@example.com" className="btn-primary">
                  Start a Conversation
                </a>
                <a href="/about" className="btn-secondary">
                  Learn More About Me
                </a>
              </div>
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
          <h1 className="text-2xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-white/60">Loading portfolio...</p>
        </div>
      </div>
    );
  }
}
