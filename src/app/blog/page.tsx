import { Metadata } from 'next';
import { fetchBlogPosts } from '@/lib/payload';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: 'Read my latest articles and insights',
};

export default async function BlogPage() {
  try {
    const posts = await fetchBlogPosts();

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-max py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h1>
          {posts.length === 0 ? (
            <p className="text-center text-gray-600">No articles yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </div>
    );
  }
}
