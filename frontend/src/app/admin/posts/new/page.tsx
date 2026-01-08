'use client';

import PostForm from '@/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">New Post</h1>
        <p className="text-gray-600 mt-1">Create a new blog post</p>
      </div>

      <PostForm />
    </div>
  );
}
