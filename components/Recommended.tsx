import { getRecommendedBlogs } from "@/lib/actions/blog.action";
import { Blog } from "@/types";
import BlogItem from "./BlogItem";
import Link from "next/link";

export default async function Recommended({ postId }: { postId: string }) {
  const blogs: Blog[] = await getRecommendedBlogs(postId);
  return (
    <div>
      {blogs.map((blog) => (
        <Link key={blog._id} href={`/blog/${blog.slug.current}`}>
          <BlogItem blog={blog} />
        </Link>
      ))}
    </div>
  );
}
