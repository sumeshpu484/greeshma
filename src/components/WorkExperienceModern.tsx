'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  type: 'full-time' | 'freelance' | 'contract';
}

interface WorkExperienceProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovation Studio',
    position: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    description: 'Leading development of innovative web solutions for enterprise clients',
    responsibilities: [
      'Architected and developed scalable web applications using React & Node.js',
      'Led a team of 3 developers in agile environment',
      'Improved application performance by 45% through optimization',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    type: 'full-time',
  },
  {
    id: '2',
    company: 'Digital Design Agency',
    position: 'Full-Stack Developer',
    period: '2020 - 2022',
    description: 'Developed custom web solutions and digital products for diverse clients',
    responsibilities: [
      'Built 15+ web projects from concept to deployment',
      'Implemented responsive designs and mobile-first approach',
      'Optimized websites for SEO and Core Web Vitals',
      'Collaborated with UX/UI designers on product implementation',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Tailwind', 'MongoDB', 'Express'],
    type: 'full-time',
  },
  {
    id: '3',
    company: 'Freelance / Multiple Startups',
    position: 'Freelance Developer',
    period: '2018 - 2020',
    description: 'Provided development services to startups and small businesses',
    responsibilities: [
      'Developed custom websites and web applications',
      'Provided technical consulting and architecture planning',
      'Managed full project lifecycle from requirements to deployment',
      'Maintained 100% client satisfaction rate',
    ],
    technologies: ['React', 'Vue.js', 'Firebase', 'Vercel'],
    type: 'freelance',
  },
];

export default function WorkExperienceModern({
  experiences = defaultExperiences,
}: WorkExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.experience-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.experience-header',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Timeline animation
      itemsRef.current.forEach((item, idx) => {
        if (!item) return;

        gsap.from(item, {
          opacity: 0,
          x: idx % 2 === 0 ? -50 : 50,
          duration: 0.7,
          delay: idx * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Timeline line animation
      gsap.from('.experience-timeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        scrollTrigger: {
          trigger: '.experience-timeline',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-96 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        {/* Header */}
        <div className="experience-header text-center mb-16 space-y-4">
          <p className="text-label">Career</p>
          <h2 className="text-display gradient-text-ultra">Work Experience</h2>
          <p className="text-body max-w-2xl mx-auto">
            A timeline of my professional journey and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 experience-timeline-line"></div>

          {/* Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                ref={(el) => {
                  if (el) itemsRef.current[idx] = el;
                }}
                className={`relative md:w-1/2 ${
                  idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:block absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-black top-8 ${
                    idx % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  }`}
                ></div>

                {/* Card */}
                <div className="glass-morphism rounded-2xl p-8 space-y-4 group hover:border-white/[0.3] transition-colors">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 whitespace-nowrap">
                        {exp.type === 'full-time'
                          ? 'Full-time'
                          : exp.type === 'freelance'
                          ? 'Freelance'
                          : 'Contract'}
                      </span>
                    </div>
                    <p className="text-sm text-white/60">{exp.period}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-white/20 to-transparent"></div>

                  {/* Description */}
                  <p className="text-body text-sm md:text-base">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-white/80">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex gap-2 text-sm text-white/70">
                          <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Client Satisfaction', value: '100%' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 glass-morphism rounded-xl"
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text-ultra mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
