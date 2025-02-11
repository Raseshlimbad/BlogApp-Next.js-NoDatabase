'use client'

import { useBlog } from '@/context/BlogContext';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'

function BlogCards() {
    const { blogs } = useBlog();
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    // State to track loading status
    const [isLoading, setIsLoading] = useState(true);

    // Detect when blogs are updated
    useEffect(() => {
        if (blogs.length > 0) {
            setIsLoading(false);
        }
    }, [blogs]);

    const filteredBlogs = blogs.filter(
        (blog) =>
            blog.title.toLowerCase().includes(query.toLowerCase()) ||
            blog.content.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="mt-6 grid md:grid-cols-2 gap-4">
            {isLoading ? (
                <p className="text-gray-500">Loading blogs...</p>
            ) : filteredBlogs.length ? (
                filteredBlogs.map((blog) => (
                    <div key={blog.id} className="bg-white p-6 mb-4 border border-gray-500 hover:border-b-inherit hover:border-r-inherit hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
                        <p className="text-gray-600 mt-2 mb-6">{blog.content.slice(0, 50)}...</p>
                        <Link href={`/blog/${blog.id}`} className="bg-[#3D3D3D] text-white px-4 py-3 rounded-lg hover:bg-[#666666] transition">
                            Read more →
                        </Link>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-center">No blogs found.</p>
            )}
        </div>
    );
}

export default BlogCards;
