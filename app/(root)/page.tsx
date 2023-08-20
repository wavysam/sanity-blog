import BlogItem from "@/components/BlogItem";
import { getBlogs } from "@/lib/actions/blog.action";
import { Blog } from "@/types";
import Link from "next/link";

export default async function Home() {
  const blogs: Blog[] = await getBlogs();
  return (
    <section>
      <div className="max-w-5xl">
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug.current}`}>
            <BlogItem blog={blog} />
          </Link>
        ))}
      </div>
    </section>
  );
}
