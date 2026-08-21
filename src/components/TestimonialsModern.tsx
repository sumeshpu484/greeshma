'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechStart',
    content: 'Exceptional developer who delivers pixel-perfect results. Their attention to detail and proactive communication made the entire project smooth and enjoyable.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO of Digital Solutions Inc',
    content: 'Transformed our entire web infrastructure. The performance improvements alone saved us thousands in server costs. Truly outstanding work!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead at Creative Agency',
    content: 'A rare developer who truly understands design principles. They brought our most ambitious designs to life flawlessly and with great precision.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'Founder of StartupXYZ',
    content: 'Outstanding problem solver. Handled complex technical challenges with ease and grace. Would definitely work together again in a heartbeat!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5
  }
];

export default function TestimonialsModern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-label">Testimonials</p>
          <h2 className="text-display gradient-text-ultra">What Clients Say</h2>
          <p className="text-body max-w-2xl mx-auto">
            Real feedback from real people I've worked with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="glass-morphism rounded-2xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body mb-8 flex-1 italic">
                "{testimonial.content}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/[0.2]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
