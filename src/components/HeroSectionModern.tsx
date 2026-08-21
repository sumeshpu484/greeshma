'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { Profile, CTAButton } from '@/types';

interface HeroSectionModernProps {
  profile: Profile;
  ctaButtons: CTAButton[];
}

export default function HeroSectionModern({ profile, ctaButtons }: HeroSectionModernProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Text animation
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.from('.hero-buttons button', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: 'power3.out',
      });

      // Image animation with parallax
      gsap.from('.hero-image', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Floating animation
      gsap.to('.hero-image', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const primaryButtons = ctaButtons.filter(btn => btn.style === 'primary').sort((a, b) => a.displayOrder - b.displayOrder);
  const secondaryButtons = ctaButtons.filter(btn => btn.style !== 'primary').sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Text Content */}
          <div ref={textRef} className="space-y-8">
            {/* Name */}
            <div className="space-y-4">
              <h1 className="hero-title text-hero leading-tight">
                <span className="gradient-text-ultra">
                  {profile.name.split(' ')[0]}
                </span>
                <br />
                <span className="text-white">
                  {profile.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </div>

            {/* Title */}
            <div>
              <p className="hero-subtitle text-lg md:text-2xl font-semibold text-blue-400">
                {profile.title}
              </p>
            </div>

            {/* Tagline */}
            <div>
              <p className="hero-description text-body max-w-lg">
                {profile.tagline}
              </p>
            </div>

            {/* Divider */}
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full"></div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
              {primaryButtons.map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className="btn-primary inline-flex justify-center"
                >
                  {btn.label}
                </Link>
              ))}
              {secondaryButtons.slice(0, 1).map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className="btn-secondary inline-flex justify-center"
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/[0.1]">
              <div>
                <p className="text-2xl font-bold gradient-text-ultra">5+</p>
                <p className="text-label mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text-ultra">20+</p>
                <p className="text-label mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text-ultra">100%</p>
                <p className="text-label mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right: Avatar */}
          <div ref={imageRef} className="flex justify-center md:justify-end">
            <div className="hero-image relative">
              {/* Glowing background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-75"></div>

              {/* Avatar container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl border border-white/[0.15] overflow-hidden backdrop-blur-xl">
                  <Image
                    src={profile.avatar.url}
                    alt={profile.avatar.alt || profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 p-[2px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl"></div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-cyan-500/30 rounded-full opacity-75"></div>
              <div className="absolute -top-8 -left-8 w-20 h-20 border-2 border-pink-500/30 rounded-full opacity-75"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-center">
          <p className="text-sm text-white/60 mb-3">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
