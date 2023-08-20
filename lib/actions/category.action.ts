import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const getCategoryBlogs = async (category: string) => {
  try {
    const query = groq`*[_type == 'posts' && category->title  match "${category}"] {
      ...,
      category->{title},
      author->{name}
    }`;
    const data = await client.fetch(query);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
