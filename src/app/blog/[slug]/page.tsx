import { Metadata } from 'next';
import { fetchBlogPostBySlug } from '@/lib/payload';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await fetchBlogPostBySlug(params.slug);
    return {
      title: `${post.title} | Blog`,
      description: post.excerpt,
    };
  } catch {
    return {
      title: 'Blog Post | Portfolio',
    };
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await fetchBlogPostBySlug(params.slug);

    return (
      <div className="min-h-screen bg-white">
        <div className="container-max py-20">
          <Link href="/blog" className="text-primary-600 font-semibold hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>
          <article className="max-w-3xl mx-auto">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
            )}
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex gap-4 mb-8 text-gray-600 flex-wrap">
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <Link href="/blog" className="text-primary-600 font-semibold hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
}
