"use client";

import { useState } from "react";
import { useBlog } from "@/context/BlogContext";
import { useParams, useRouter } from "next/navigation";

function BlogDetails() {
      const { id } = useParams();
      const { blogs, updateBlog, deleteBlog } = useBlog();
      const router = useRouter();
      const blog = blogs.find((b) => b.id === id);
    
      const [editMode, setEditMode] = useState(false);
      const [newTitle, setNewTitle] = useState(blog?.title || "");
      const [newContent, setNewContent] = useState(blog?.content || "");
    
      if (!blog) return <p className="text-center text-gray-500">Blog not found.</p>;
    
      const handleUpdate = () => {
        updateBlog({ ...blog, title: newTitle, content: newContent });
        setEditMode(false);
      };
    
      const handleDelete = () => {
        if (typeof id === "string") {
          deleteBlog(id);
        }
        router.push("/");
      };
    
  return (
    // Blog Title
    <div className=" mx-auto p-6 bg-white shadow-lg  border border-gray-500 my-6">
      {editMode ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full text-2xl font-semibold border p-2 rounded-lg focus:ring-2 focus:ring-gray-400 text-3xl"
        />
      ) : (
        <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      )}

      {/* Blog Content */}
      {editMode ? (
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full mt-4 border p-3 rounded-lg focus:ring-2 focus:ring-gray-400 text-lg"
        />
      ) : (
        <p className="text-gray-700 mt-4 text-lg">{blog.content}</p>
      )}

      {/* Edit Button */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setEditMode(true)}
          disabled={editMode}
          className={`px-4 py-2 rounded-lg text-white ${
            editMode ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
          } transition`}
        >
          Edit
        </button>
        
        {/* Cancel Button */}
        {editMode && (
          <button
            onClick={() => setEditMode(false)}
            className="bg-[#3D3D3D] hover:bg-[#666666] text-white px-4 py-2 rounded-lg transition"
          >
            Cancel
          </button>
        )}

        {/* Save button */}
        {editMode && (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Save
          </button>
        )}

        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BlogDetails
