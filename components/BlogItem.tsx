import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import dayjs from "dayjs";
import { Blog } from "@/types";

export default function BlogItem({ blog }: { blog: Blog }) {
  return (
    <article className="grid md:grid-cols-3 gap-3 sm:gap-6 border-b py-4 dark:border-gray-700">
      <div>
        <p className="dark:text-sky-600 font-medium">{blog.category.title}</p>
        <div>
          <p className="text-2xl font-bold">{blog.title}</p>
          <p className="font-medium mt-2">{blog.author.name}</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-white">
          {dayjs(blog._createdAt).format("MMMM DD, YYYY")}
        </p>
      </div>
      <div className="sm:block hidden">
        <p className="line-clamp-4 text-gray-500 dark:text-white">
          {blog.overview}
        </p>
      </div>
      <div className="relative h-48 sm:h-36">
        <Image
          src={urlForImage(blog.mainImage).url()}
          alt="Blog Post Image"
          fill
          className="object-cover"
        />
      </div>
    </article>
  );
}
