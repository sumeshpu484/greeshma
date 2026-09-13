import { Metadata } from 'next';
import { fetchBlogPosts, fetchPageData } from '@/lib/payload';
import BlogCard from '@/components/BlogCard';
import HeaderMinimal from '@/components/HeaderMinimal';
import FooterMinimal from '@/components/FooterMinimal';
import BlogPageClient from '@/components/BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: 'Read my latest articles and insights',
};

export default async function BlogPage() {
  try {
    const posts = await fetchBlogPosts();
    const { profile, socialLinks } = await fetchPageData();

    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <HeaderMinimal socialLinks={socialLinks} name={profile.name} />
        <BlogPageClient posts={posts} />
        <FooterMinimal profile={profile} socialLinks={socialLinks} />
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400">Loading articles...</p>
        </div>
      </div>
    );
  }
}
