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
    name: 'Brahma AM',
    role: 'Program Manager at IBS Software',
    content: 'Greeshma is the most amazing person I have worked with. A highly skilled leader who keeps her clients at the center of her work each day and goes above and beyond in delivering results. Any organization would be proud of such talent.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=brahma-am',
    rating: 5
  },
  {
    name: 'Hadi Kazemi',
    role: 'Academic Programme Director | CIOB Trustee',
    content: 'Greeshma is a hardworking individual with great work ethics. She would be a great asset for any organisation with her dedication to excellence and continuous learning.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hadi-kazemi',
    rating: 5
  },
  {
    name: 'Ignitho Technologies',
    role: 'Rock Star Award - December 2019',
    content: 'Awarded for exceptional project delivery, outstanding contributions, and demonstrating remarkable dedication to team excellence. Recognized across the organization for setting new performance standards.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ignitho-award',
    rating: 5
  },
  {
    name: 'WARTENS UK Leadership',
    role: 'UK National StartUp Awards 2025 Winner',
    content: 'As COO & Co-Founder, Greeshma\'s vision and strategic execution have been instrumental in WARTENS winning the UK National StartUp Awards 2025 for Engineering & Manufacturing. Her leadership drives innovation forward.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wartens-award',
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

        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              markers: false,
            },
          }
        );
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
