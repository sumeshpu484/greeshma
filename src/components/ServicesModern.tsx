'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { icon: '⚡', title: 'Web Design & Development', desc: 'Beautiful, responsive websites with cutting-edge tech' },
  { icon: '🚀', title: 'Performance Optimization', desc: 'Lightning-fast sites optimized for SEO and UX' },
  { icon: '🔧', title: 'Full-Stack Development', desc: 'Complete apps built with modern architecture' },
  { icon: '📱', title: 'Mobile-First Design', desc: 'Seamless experience across all devices' },
  { icon: '🤝', title: 'Team Augmentation', desc: 'Expert developers to accelerate your projects' },
  { icon: '🎯', title: 'Strategic Consultation', desc: 'Technical guidance for your product vision' },
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
          y: 50,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        // Hover 3D effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            boxShadow: '0 20px 60px rgba(37, 99, 235, 0.25)',
            duration: 0.3,
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            duration: 0.3,
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
