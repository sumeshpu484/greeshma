import Header from '@/components/Header';
import HeroSectionModern from '@/components/HeroSectionModern';
import Footer from '@/components/Footer';
import ProjectsModern from '@/components/ProjectsModern';
import SkillsModern from '@/components/SkillsModern';
import ServicesModern from '@/components/ServicesModern';
import TestimonialsModern from '@/components/TestimonialsModern';
import AboutSection from '@/components/AboutSection';
import PhotoGallery from '@/components/PhotoGallery';
import WorkExperienceModern from '@/components/WorkExperienceModern';
import { mockPageData } from '@/lib/mock-data';

// Override profile data with Greeshma's actual information
const greeshmaProfile = {
  name: "Greeshma Jenson",
  title: "Chief Operating Officer | Technical Business Analyst",
  tagline: "Driving Strategic Innovation in Industrial Training, Automation & VR Solutions",
  avatar: {
    url: "https://api.dicebear.com/7.x/avataaars/svg?seed=greeshma-jenson",
    alt: "Greeshma Jenson",
  },
};

export default function Home() {
  try {
    const profile = { ...mockPageData.profile, ...greeshmaProfile };
    const { socialLinks, ctaButtons, projects, blogPosts } = mockPageData;

    return (
      <>
        <Header socialLinks={socialLinks} name={profile.name} />

        {/* Ultra-Modern Hero Section */}
        <HeroSectionModern profile={profile} ctaButtons={ctaButtons} />

        {/* Services Section */}
        <ServicesModern />

        {/* Work Experience Section */}
        <WorkExperienceModern
          experiences={[
            {
              id: '1',
              company: 'WARTENS UK',
              position: 'Chief Operating Officer | Technical Business Analyst',
              period: 'Jun 2022 - Present',
              description: 'Leading strategic operations across WARTENS ecosystem ventures including iUNI (VR/XR Training), EdWartens (Industrial Automation Training), RobotEd (STEM Education), and OSCABE (Industrial Recruitment).',
              responsibilities: [
                'Drive operational strategy and execution across all group businesses to achieve organizational goals and market expansion',
                'Align business operations, technology, and workforce strategies to enhance efficiency and scalability',
                'Lead business transformation initiatives including digitalization, automation, and VR-based learning solutions',
                'Manage strategic partnerships, stakeholder engagement, and client relationships across education and industrial sectors',
                'Support expansion in UK and international markets with focus on workforce development ecosystem',
              ],
              technologies: ['Project Management', 'Agile', 'Operations Strategy', 'Business Analysis', 'Digital Transformation', 'VR/XR Technology'],
              type: 'full-time',
            },
            {
              id: '2',
              company: 'iUNI',
              position: 'Co-Founder & Technical Business Analyst',
              period: 'Sep 2024 - Aug 2025',
              description: 'Leading technical direction and architecture of iUNI VR Training Platform - cutting-edge immersive XR solution for industrial training combining VR with Learning Management System.',
              responsibilities: [
                'Oversee platform architecture and technology strategy ensuring scalability and seamless XR integration',
                'Lead cross-functional teams to deliver innovative training modules and tools',
                'Integrate AI-powered adaptive learning to personalize training and improve engagement',
                'Drive agile development practices for timely and efficient feature delivery',
                'Collaborate with stakeholders to align technology solutions with business goals',
              ],
              technologies: ['Project Coordination', 'Digital Transformation', 'VR/XR', 'Agile', 'AI Learning'],
              type: 'full-time',
            },
            {
              id: '3',
              company: 'EY (Ernst & Young)',
              position: 'Senior Associate - Business Analyst',
              period: 'Aug 2021 - Jan 2022',
              description: 'Managed multiple concurrent projects with focus on Agile expertise, business process optimization, and organizational assessments.',
              responsibilities: [
                'Efficiently managed multiple concurrent projects meeting objectives and timelines',
                'Conducted organizational assessments and recommended improvements aligned with corporate goals',
                'Established industry benchmark project management practices and ensured regulatory compliance',
                'Directed customer-facing team consistently exceeding client expectations',
                'Presented detailed progress reports to senior management informing strategic decisions',
              ],
              technologies: ['Quantitative Analytics', 'Agile Project Management', 'Business Analysis', 'Stakeholder Management'],
              type: 'full-time',
            },
            {
              id: '4',
              company: 'Ignitho Technologies',
              position: 'Business Analyst / Scrum Master',
              period: 'Apr 2019 - Aug 2021',
              description: 'Delivered 3 major digital projects for Gatwick Airport (UK), iDirect UK, and Mente Health UK. Recognized as Rock Star of Ignitho Technologies for outstanding project delivery.',
              responsibilities: [
                'Delivered 3 digital projects, web portals and mobile apps for major UK clients',
                'Defined and documented business requirements with full traceability through functional specs',
                'Facilitated all Agile ceremonies and managed squad dynamics maintaining high sprint velocity',
                'Conducted AS-IS and TO-BE process mapping identifying improvement opportunities',
                'Increased team output and efficiency by 55% through targeted Agile mentoring',
                'Awarded Rock Star of Ignitho Technologies - recognized for outstanding delivery',
              ],
              technologies: ['Agile Project Management', 'Stakeholder Management', 'Requirements Analysis', 'JIRA', 'Scrum'],
              type: 'full-time',
            },
            {
              id: '5',
              company: 'StaxLabs Inc',
              position: 'Jr. Quality Analyst',
              period: 'Apr 2018 - Apr 2019',
              description: 'Conducted quality assurance and testing of software applications, collaborating with development teams to ensure high quality standards.',
              responsibilities: [
                'Conducted thorough quality checks and testing of software applications',
                'Collaborated with development team to report and track issues ensuring timely resolution',
                'Maintained detailed records of test cases, results, and defects',
                'Contributed to continuous improvement through feedback on software quality',
              ],
              technologies: ['Agile Project Management', 'Requirements Analysis', 'Testing', 'Manual Testing', 'Data Analysis'],
              type: 'full-time',
            },
          ]}
        />

        {/* Skills Section */}
        <SkillsModern />

        {/* About Section with Photo */}
        <AboutSection
          photoUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=greeshma-jenson-operations"
          title="About Me"
          description="As Chief Operating Officer at WARTENS UK, I drive strategic integration across our ecosystem of innovative ventures - from VR-based industrial training (iUNI) to specialized recruitment (OSCABE) and automation solutions. With a Master's degree in IT Project Management and 7+ years of experience, I combine technical expertise with strategic business acumen to build future-ready ecosystems where technology, workforce development, and industry demands converge."
          highlights={[
            'COO & Co-Founder overseeing WARTENS ecosystem (iUNI, EdWartens, OSCABE, RobotEd)',
            'Expert in Operations Strategy, Digital Transformation, and Business Analysis',
            'Master\'s in IT Project Management from Leeds Beckett University (First Class)',
            'Led UK National StartUp Awards 2025 - Engineering & Manufacturing Category Winner',
            'Specialized in VR/XR training solutions and industrial workforce development',
            'Agile & Scrum certified with proven track record in large-scale digital project delivery',
          ]}
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
    console.error('Error rendering home page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-white/60">There was an error loading the portfolio. Please refresh the page.</p>
        </div>
      </div>
    );
  }
}
