'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PhotoFrame from './PhotoFrame';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutSectionProps {
  photoUrl?: string;
  title?: string;
  description?: string;
  highlights?: string[];
}

const defaultDescription = `I'm a full-stack developer passionate about creating beautiful, performant digital experiences. With 5+ years in the industry, I specialize in modern web technologies and user-centered design.

My approach combines technical expertise with creative thinking, ensuring every project not only meets but exceeds expectations. I believe in continuous learning and staying at the forefront of web technology trends.`;

const defaultHighlights = [
  'Expert in React, Next.js & TypeScript',
  'Passionate about UX/UI and accessibility',
  'Experienced with modern design systems',
  'Strong advocate for clean, maintainable code',
  'Mentor and tech community contributor',
  'Open source enthusiast',
];

export default function AboutSection({
  photoUrl = 'https://api.dicebear.com/7.x/avataaars/svg?seed=workspace',
  title = 'About Me',
  description = defaultDescription,
  highlights = defaultHighlights,
}: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth content animation
      gsap.from(contentRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Smooth photo animation with scale
      gsap.from(photoRef.current, {
        opacity: 0,
        x: 60,
        scale: 0.9,
        duration: 1,
        delay: 0.15,
        ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        scrollTrigger: {
          trigger: photoRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Smooth stagger highlights
      gsap.from('.highlight-item', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <p className="text-label">About</p>
              <h2 className="text-display gradient-text-ultra">{title}</h2>
            </div>

            <div className="space-y-6">
              <p className="text-body leading-relaxed">{description}</p>

              {/* Highlights */}
              <div className="space-y-3 pt-4">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-body pt-0.5">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a href="#contact" className="btn-primary inline-flex">
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>

          {/* Right: Photo */}
          <div ref={photoRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <PhotoFrame
                src={photoUrl}
                alt="About me - workspace photo"
                width={500}
                height={600}
                style="glass"
                hasHover3D={true}
                hasParallax={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
