'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PhotoFrame from './PhotoFrame';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface PhotoGalleryProps {
  photos?: GalleryPhoto[];
  title?: string;
  subtitle?: string;
}

const defaultPhotos: GalleryPhoto[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
    alt: 'Working on a project',
    title: 'Creative Process',
    description: 'Collaborating with teams to bring ideas to life',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    alt: 'Development workspace',
    title: 'Development',
    description: 'Building solutions with modern technologies',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
    alt: 'Team collaboration',
    title: 'Collaboration',
    description: 'Working together to achieve great results',
  },
];

export default function PhotoGallery({
  photos = defaultPhotos,
  title = 'Behind the Scenes',
  subtitle = 'A glimpse into my creative journey',
}: PhotoGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.gallery-header', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.gallery-header',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Ultra-smooth photos stagger animation
      photosRef.current.forEach((photo, idx) => {
        if (!photo) return;

        gsap.from(photo, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          duration: 1.3,
          delay: idx * 0.15,
          ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          scrollTrigger: {
            trigger: photo,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 0.8,
            once: false,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        {/* Header */}
        <div className="gallery-header text-center mb-16 space-y-4">
          <p className="text-label">Gallery</p>
          <h2 className="text-display gradient-text-ultra">{title}</h2>
          <p className="text-body max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              ref={(el) => {
                if (el) photosRef.current[idx] = el;
              }}
              className="group cursor-pointer"
            >
              {/* Photo Frame */}
              <div className="mb-4 overflow-hidden rounded-3xl">
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={250}
                  style="neuro"
                  hasHover3D={true}
                  hasParallax={false}
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {photo.title}
                </h3>
                <p className="text-body text-sm">{photo.description}</p>

                {/* Hover indicator */}
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                  View Details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
