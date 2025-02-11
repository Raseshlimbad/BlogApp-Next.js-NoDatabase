import { BlogProvider } from "../context/BlogContext";
import SearchBar from "../components/SearchBar";
import "./globals.css";
import { Oswald } from 'next/font/google'
import Link from "next/link";
 
const mainHeadingFont = Oswald({
  weight: '600',
  display: 'swap',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className="mx-auto px-12">
        <BlogProvider>
          <Link href={"/"}>
          <h1 className="text-6xl font-semibold py-8"><p className = {mainHeadingFont.className}>My Blog</p></h1>
          </Link>
          <SearchBar />
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
