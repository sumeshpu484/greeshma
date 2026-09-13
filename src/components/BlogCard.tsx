'use client';

import { BlogPost } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';




export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-none overflow-hidden hover:shadow-lg dark:hover:shadow-black/30 transition-shadow"
    >
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <div className="flex gap-2 mb-2 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <time className="text-sm text-gray-500 dark:text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <Link href={`/blog/${post.slug}`} className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
