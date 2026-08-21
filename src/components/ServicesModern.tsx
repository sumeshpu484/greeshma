'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { icon: '📊', title: 'Business Analysis & Strategy', desc: 'Strategic insights and business transformation roadmaps for organizations' },
  { icon: '🎯', title: 'Operations Management', desc: 'End-to-end operational excellence through systems thinking and agile frameworks' },
  { icon: '🔄', title: 'Digital Transformation', desc: 'Modernizing businesses through technology integration and process optimization' },
  { icon: '⚡', title: 'Project Management', desc: 'Agile-driven project delivery with proven track record of 55%+ efficiency gains' },
  { icon: '🚀', title: 'Ecosystem Building', desc: 'Creating integrated platforms connecting training, recruitment, and innovation' },
  { icon: '🤝', title: 'Stakeholder Management', desc: 'Cross-functional collaboration and executive advisory for complex initiatives' },
];

export default function ServicesModern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger cards on scroll reveal
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1.5,
          delay: i * 0.15,
          ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            end: 'top 45%',
            scrub: 1,
            once: false,
          },
        });

        // Smooth 3D hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            boxShadow: '0 25px 70px rgba(37, 99, 235, 0.35)',
            scale: 1.03,
            duration: 0.5,
            ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            scale: 1,
            duration: 0.5,
            ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-28">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-label">Services</p>
          <h2 className="text-display gradient-text-ultra">What I Deliver</h2>
          <p className="text-body max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="group neuro-soft p-8 cursor-pointer"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-body mb-6">{service.desc}</p>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
