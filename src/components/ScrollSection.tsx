'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project, BlogPost } from '@/types';
import { cardAnimation } from './animations';

interface ScrollSectionProps {
  title: string;
  items: (Project | BlogPost)[];
  type: 'projects' | 'blog';
  viewAllLink: string;
}

export default function ScrollSection({
  title,
  items,
  type,
  viewAllLink,
}: ScrollSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    ref?.addEventListener('scroll', checkScroll);
    return () => ref?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const isProject = (item: Project | BlogPost): item is Project => {
    return 'tags' in item && !('excerpt' in item);
  };

  const isBlogPost = (item: Project | BlogPost): item is BlogPost => {
    return 'excerpt' in item;
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-400 to-neon-pink rounded-full" />
        </motion.div>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Left Arrow */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('left')}
              className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-glow transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
          )}

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                {...cardAnimation}
                className="flex-shrink-0 w-full md:w-96"
              >
                <div className="card-modern group cursor-pointer overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                    {(isProject(item) ? item.image : (isBlogPost(item) ? item.image : null)) && (
                      <Image
                        src={isProject(item) ? item.image! : (isBlogPost(item) ? item.image! : '')}
                        alt={isProject(item) ? item.title : (isBlogPost(item) ? item.title : '')}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-100 group-hover:text-primary-400 transition-colors">
                      {isProject(item) ? item.title : (isBlogPost(item) ? item.title : '')}
                    </h3>

                    <p className="text-slate-300 mb-4 line-clamp-2">
                      {isProject(item)
                        ? item.description
                        : isBlogPost(item)
                        ? item.excerpt
                        : ''}
                    </p>

                    {/* Tags */}
                    {isProject(item) && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {isBlogPost(item) && (
                      <p className="text-sm text-slate-400 mb-4">
                        {new Date(item.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={
                      isProject(item)
                        ? (item.link || '#')
                        : isBlogPost(item)
                        ? `/blog/${item.slug}`
                        : '#'
                    }
                    target={isProject(item) ? '_blank' : '_self'}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold group/link transition-colors"
                  >
                    {type === 'projects' ? 'View Project' : 'Read Article'}
                    <svg
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('right')}
              className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-glow transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          )}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href={viewAllLink}
            className="btn-primary"
          >
            View All {type === 'projects' ? 'Projects' : 'Blog Posts'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
