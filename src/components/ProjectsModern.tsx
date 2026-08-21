'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectsModernProps {
  projects: Project[];
}

export default function ProjectsModern({ projects }: ProjectsModernProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Smooth scroll reveal with stagger
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );

        // Optimized hover 3D effect
        const onMouseMove = (e: MouseEvent) => {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / 50;
          const y = (e.clientY - rect.top - rect.height / 2) / 50;

          gsap.to(card, {
            rotationX: y * 0.5,
            rotationY: x * 0.5,
            duration: 0.3,
            transformPerspective: 1000,
            ease: 'power2.out',
            overwrite: 'auto',
          });

          gsap.to(card, {
            y: -10,
            boxShadow: '0 25px 60px rgba(37, 99, 235, 0.25)',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };

        const onMouseLeave = () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            y: 0,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            duration: 0.4,
            ease: 'power2.inOut',
            overwrite: 'auto',
          });
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);

        return () => {
          card.removeEventListener('mousemove', onMouseMove);
          card.removeEventListener('mouseleave', onMouseLeave);
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-28">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-label">Portfolio</p>
          <h2 className="text-display gradient-text-ultra">Featured Projects</h2>
          <p className="text-body max-w-2xl mx-auto">
            Showcasing my latest and greatest work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 9).map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="group glass-morphism rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-white/70 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center text-blue-400 hover:text-cyan-400 font-semibold text-sm transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
