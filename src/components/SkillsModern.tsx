'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const skillCategories = [
  {
    title: 'Core Expertise',
    skills: [
      { name: 'Project Management', level: 95 },
      { name: 'Business Analysis', level: 94 },
      { name: 'Operations Strategy', level: 92 },
      { name: 'Stakeholder Management', level: 93 },
    ]
  },
  {
    title: 'Agile & Delivery',
    skills: [
      { name: 'Agile Methodologies', level: 95 },
      { name: 'Scrum Master', level: 93 },
      { name: 'Project Delivery', level: 94 },
      { name: 'Requirements Analysis', level: 92 },
    ]
  },
  {
    title: 'Business & Strategy',
    skills: [
      { name: 'Digital Transformation', level: 91 },
      { name: 'Business Process Improvement', level: 90 },
      { name: 'Strategic Planning', level: 89 },
      { name: 'Risk Management', level: 88 },
    ]
  },
  {
    title: 'Technology & Tools',
    skills: [
      { name: 'JIRA & Project Tools', level: 92 },
      { name: 'VR/XR Technology', level: 87 },
      { name: 'Data Analysis', level: 85 },
      { name: 'CRM Systems', level: 86 },
    ]
  }
];

export default function SkillsModern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      skillBarsRef.current.forEach((bar, i) => {
        if (!bar) return;

        gsap.from(bar, {
          width: '0%',
          opacity: 0,
          duration: 1,
          delay: i * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-label">Technical Skills</p>
          <h2 className="text-display gradient-text-ultra">My Expertise</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="glass-morphism rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-8 text-blue-400">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-base font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden backdrop-blur">
                      <div
                        ref={(el) => {
                          if (el) skillBarsRef.current[catIdx * 4 + skillIdx] = el;
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
