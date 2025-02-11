"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { blogs as initialBlogs, Blog } from "@/data/blogs";
import { getBlogs, saveBlogs } from "@/utils/localStorage";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (updatedBlog: Blog) => void;
  deleteBlog: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | null>(null);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs.length > 0 ? storedBlogs : initialBlogs);
  }, []);

  const addBlog = (blog: Blog) => {
    const updatedBlogs = [...blogs, blog];
    setBlogs(updatedBlogs);
    saveBlogs(updatedBlogs);
  };

  const updateBlog = (updatedBlog: Blog) => {
    const updatedBlogs = blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b));
    setBlogs(updatedBlogs);
    saveBlogs(updatedBlogs);
  };

  const deleteBlog = (id: string) => {
    const updatedBlogs = blogs.filter((b) => b.id !== id);
    setBlogs(updatedBlogs);
    saveBlogs(updatedBlogs);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
    {/* <BlogContext.Provider value={{ blogs, updateBlog, deleteBlog }}> */}
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("useBlog must be used within BlogProvider");
  return context;
};
