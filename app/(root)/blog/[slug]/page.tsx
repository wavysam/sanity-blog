import { getBlogDetails } from "@/lib/actions/blog.action";
import { urlForImage } from "@/sanity/lib/image";
import { Blog } from "@/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/components/PortbaleTextComponents";
import dayjs from "dayjs";
import Recommended from "@/components/Recommended";
import { getComments } from "@/lib/actions/comment.action";
import ConversationForm from "@/components/ConversationForm";
import Comments from "@/components/Comments";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const data: Blog = await getBlogDetails(slug);
  return {
    title: data.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogDetails: Blog = await getBlogDetails(params.slug);
  const comments = await getComments(params.slug);

  return (
    <section className="max-w-5xl">
      <article>
        <div>
          <p className="font-medium dark:text-sky-600">
            {blogDetails.category.title}
          </p>
          <p className="text-4xl font-bold mb-8 mt-3">{blogDetails.title}</p>
          <div className="flex items-center gap-6">
            <p>{blogDetails.author.name}</p>
            <p>{dayjs(blogDetails._createdAt).format("MMMM DD, YYYY")}</p>
          </div>
          <div className="relative h-64 sm:h-96 my-10">
            <Image
              src={urlForImage(blogDetails.mainImage).url()}
              fill
              alt="Blog post image"
              className="object-cover"
            />
          </div>
          <div>
            <PortableText
              value={blogDetails.body}
              components={PortableTextComponents}
            />
          </div>
        </div>
      </article>
      <div className="mt-24">
        <h1 className="text-2xl font-bold border-b pb-8">Conversation</h1>
        <p className="my-8">
          Welcome to Blox comments! Please keep conversations courteous and
          on-topic.
        </p>
        <ConversationForm _id={blogDetails._id} />
      </div>
      <div>
        <Comments comments={comments} />
      </div>

      <div className="mt-24 border-t">
        <Recommended postId={blogDetails._id} />
      </div>
    </section>
  );
}
