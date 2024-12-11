import React from 'react';
import { Post } from '../types';
import { Calendar } from 'lucide-react';

interface BlogSectionProps {
  posts: Post[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="max-w-6xl mx-auto mt-12 p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Son Blog Yazıları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};