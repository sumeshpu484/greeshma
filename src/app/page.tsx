import HeaderMinimal from '@/components/HeaderMinimal';
import HeroMinimal from '@/components/HeroMinimal';
import FooterMinimal from '@/components/FooterMinimal';
import SkillsMinimal from '@/components/SkillsMinimal';
import ServicesMinimal from '@/components/ServicesMinimal';
import TestimonialsMinimal from '@/components/TestimonialsMinimal';
import AboutMinimal from '@/components/AboutMinimal';
import PortfolioMinimal from '@/components/PortfolioMinimal';
import WorkExperienceSidebar from '@/components/WorkExperienceSidebar';
import CTAMinimal from '@/components/CTAMinimal';
import { fetchPageData } from '@/lib/payload';

// Override profile data with Greeshma's actual information
const greeshmaProfile = {
  name: "Greeshma Jenson",
  title: "Chief Operating Officer | Technical Business Analyst",
  tagline: "Driving Strategic Innovation in Industrial Training, Automation & VR Solutions",
  avatar: {
    url: "/portfolio-1.jpeg",
    alt: "Greeshma Jenson",
  },
};

export default async function Home() {
  try {
    const { profile: originalProfile, socialLinks, ctaButtons, projects, blogPosts } = await fetchPageData();
    const profile = { ...originalProfile, ...greeshmaProfile };

    return (
      <>
        <HeaderMinimal socialLinks={socialLinks} name={profile.name} />

        {/* Minimal Creative Hero Section */}
        <HeroMinimal profile={profile} ctaButtons={ctaButtons} />

        {/* Services Section */}
        <ServicesMinimal />

        {/* Work Experience Section */}
        <WorkExperienceSidebar
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
        <SkillsMinimal />

        {/* About Section with Photo */}
        <AboutMinimal
          photoUrl="/portfolio-2.jpeg"
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

        {/* Portfolio Section */}
        <PortfolioMinimal
          title="Design Portfolio"
          subtitle="A glimpse into my creative process and strategic initiatives"
          items={projects.slice(0, 6).map((p) => ({
            id: p.id,
            title: p.title,
            category: p.tags?.[0] || 'Project',
            image: p.image,
          }))}
        />

        {/* Testimonials Section */}
        <TestimonialsMinimal />

        {/* Contact CTA Section */}
        <CTAMinimal
          heading="Ready to Collaborate?"
          description="Let's discuss how I can help you drive strategic innovation and achieve your goals."
          primaryCTA={{ label: 'Get in Touch', href: '/contact' }}
          secondaryCTA={{ label: 'Learn More About Me', href: '/about' }}
        />

        <FooterMinimal profile={profile} socialLinks={socialLinks} />
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
