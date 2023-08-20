import BlogItem from "@/components/BlogItem";
import { getCategoryBlogs } from "@/lib/actions/category.action";
import { Blog } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import { RiArticleLine } from "react-icons/ri";

type Props = {
  params: {
    name: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const wordArr = params.name.split(" ");
  const capitalizedCategory = wordArr.map((word) => {
    return word === "ai"
      ? word.toUpperCase()
      : word.charAt(0).toUpperCase().concat(word.slice(1));
  });
  return {
    title: `Blox - ${capitalizedCategory}`,
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  const blogs: Blog[] = await getCategoryBlogs(params.name);
  const wordArr = params.name.split(" ");
  const capitalizedCategory = wordArr.map((word) => {
    return word === "ai"
      ? word.toUpperCase()
      : word.charAt(0).toUpperCase().concat(word.slice(1));
  });

  return (
    <section className="max-w-5xl">
      <h1 className="text-7xl font-extrabold border-b pb-10">
        {capitalizedCategory}
      </h1>
      {!blogs.length && (
        <div className="text-center py-10">
          <div className="bg-gray-100 inline-block p-4 rounded-full dark:bg-sky-600 ">
            <RiArticleLine size={40} />
          </div>
          <h1 className="text-xl font-medium mt-2">No article found.</h1>
        </div>
      )}
      <div>
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug.current}`} key={blog._id}>
            <BlogItem blog={blog} />
          </Link>
        ))}
      </div>
    </section>
  );
}
