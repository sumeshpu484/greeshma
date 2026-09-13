'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { staggerContainer, staggerItem, fadeInUp } from './animationsMinimal';

const PatternStyle = `
  .bg-pattern {
    background-image:
      radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%);
  }
`;

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image?: string;
  icon?: string;
  gradient?: string;
  accentColor?: string;
}

interface PortfolioMinimalProps {
  title?: string;
  subtitle?: string;
  items?: PortfolioItem[];
}

export default function PortfolioMinimal({
  title = 'Design Portfolio',
  subtitle = 'A glimpse into my creative work',
  items = [],
}: PortfolioMinimalProps) {
  // Default portfolio items with verified working professional images
  const defaultItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Digital Transformation',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      id: '2',
      title: 'VR Training Platform',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&h=300&fit=crop',
    },
    {
      id: '3',
      title: 'Operations Optimization',
      category: 'Process',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    },
    {
      id: '4',
      title: 'Team Development',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
    },
    {
      id: '5',
      title: 'Market Analysis',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
    {
      id: '6',
      title: 'Growth Strategy',
      category: 'Planning',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop',
    },
  ];

  const portfolioItems = items.length > 0 ? items : defaultItems;

  return (
    <>
      <style>{PatternStyle}</style>
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Link href={`/projects/${item.id}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-black/30 transition-all cursor-pointer h-full flex flex-col"
                >
                  {/* Image or Gradient Background */}
                  <div className="relative w-full h-40 overflow-hidden group border-b border-gray-100 dark:border-gray-700">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient || 'from-blue-50 to-blue-100'} flex items-center justify-center`}>
                        <div className="absolute inset-0 opacity-3">
                          <div className="absolute inset-0 bg-pattern"></div>
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className={`text-5xl z-10 group-hover:scale-110 transition-transform font-light ${item.accentColor || 'text-blue-600'}`}
                        >
                          {item.icon || '→'}
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-2 uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
      </section>
    </>
  );
}
