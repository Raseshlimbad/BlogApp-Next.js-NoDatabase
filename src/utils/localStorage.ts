import { Blog } from "@/data/blogs";

const BLOG_STORAGE_KEY = "blogs";

export const getBlogs = (): Blog[] => {
  if (typeof window !== "undefined") {
    const storedBlogs = localStorage.getItem(BLOG_STORAGE_KEY);
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  }
  return [];
};

export const saveBlogs = (blogs: Blog[]) => {
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(blogs));
};
