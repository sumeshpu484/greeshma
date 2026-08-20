'use client';

import { BlogPost } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <div className="flex gap-2 mb-2 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <time className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <Link href={`/blog/${post.slug}`} className="text-primary-600 font-semibold hover:underline">
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
