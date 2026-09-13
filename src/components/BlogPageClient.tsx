'use client';

import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/types';
import { fadeInUp, staggerContainer, staggerItem } from './animationsMinimal';

interface BlogPageClientProps {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="py-20 md:py-28">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Blog
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest Articles
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Insights, thoughts, and perspectives on strategic innovation, operations, and digital transformation.
          </p>
        </motion.div>
      </div>

      {/* Blog Posts */}
      {posts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-lg text-gray-600">Articles coming soon. Check back later!</p>
        </motion.div>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={staggerItem}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
