'use client'

import { useBlog } from '@/context/BlogContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function CreareBlog() {

    const { addBlog } = useBlog();
      const router = useRouter();
    
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
    
      const handleCreate = () => {
        if (!title.trim() || !content.trim()) {
          alert("Title and content cannot be empty!");
          return;
        }
    
        const newBlog = {
          id: Date.now().toString(), 
          title,
          content,
        };
    
        addBlog(newBlog);
        router.push("/"); // Redirect to home page after adding
      };

  return (
    <div className="mx-auto p-4 bg-gray-100 rounded-lg shadow-md mt-5 ">
    <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>

    <input
      type="text"
      placeholder="Enter blog title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border px-3 py-2 rounded-md w-full mb-4"
    />

    <textarea
      placeholder="Enter blog content..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="border px-3 py-2 rounded-md w-full h-40 mb-4"
    />

    <div className="flex justify-between">
      <button onClick={() => router.push("/")} className="px-4 py-2 bg-[#3D3D3D] hover:bg-[#666666] text-white rounded-md">
        Cancel
      </button>
      <button onClick={handleCreate} className="px-4 py-2 bg-green-600 text-white rounded-md">
        Create Blog
      </button>
    </div>
  </div>
  )
}

export default CreareBlog
