'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface PhotoFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: 'glass' | 'neuro' | 'overlay';
  hasHover3D?: boolean;
  hasParallax?: boolean;
  priority?: boolean;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export default function PhotoFrame({
  src,
  alt,
  width = 480,
  height = 480,
  style = 'glass',
  hasHover3D = true,
  hasParallax = false,
  priority = false,
  className = '',
  loading = 'lazy',
}: PhotoFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !hasHover3D) return;

    const ctx = gsap.context(() => {
      const onMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 35;
        const y = (e.clientY - rect.top - rect.height / 2) / 35;

        gsap.to(containerRef.current, {
          rotationX: y * 0.7,
          rotationY: x * 0.7,
          duration: 0.5,
          transformPerspective: 1500,
          overwrite: 'auto',
          ease: 'power2.out',
        });

        gsap.to(containerRef.current, {
          boxShadow: '0 40px 100px rgba(37, 99, 235, 0.4)',
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      const onMouseLeave = () => {
        gsap.to(containerRef.current, {
          rotationX: 0,
          rotationY: 0,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          duration: 0.7,
          ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        });
      };

      containerRef.current?.addEventListener('mousemove', onMouseMove);
      containerRef.current?.addEventListener('mouseleave', onMouseLeave);

      return () => {
        containerRef.current?.removeEventListener('mousemove', onMouseMove);
        containerRef.current?.removeEventListener('mouseleave', onMouseLeave);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [hasHover3D]);

  useEffect(() => {
    if (!imageRef.current || !hasParallax) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: 0.5,
          onUpdate: (self) => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              gsap.to(imageRef.current, { y: 0, scrollTrigger: null });
            }
          },
        },
      });
    }, imageRef);

    return () => ctx.revert();
  }, [hasParallax]);

  const frameClasses = {
    glass: 'glass-morphism',
    neuro: 'neuro-soft',
    overlay: 'photo-overlay',
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl ${frameClasses[style]} ${className}`}
      style={{
        perspective: hasHover3D ? '1000px' : 'none',
        transformStyle: hasHover3D ? 'preserve-3d' : 'flat',
      }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-3xl blur-3xl -z-10 opacity-75"></div>

      {/* Image container with parallax */}
      <div
        ref={imageRef}
        className="relative w-full h-full overflow-hidden"
        style={{ willChange: hasParallax ? 'transform' : 'auto' }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={loading}
          className="w-full h-full object-cover"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
        />

        {/* Overlay gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Animated border for glass effect */}
      {style === 'glass' && (
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 p-[2px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl"></div>
        </div>
      )}
    </div>
  );
}
