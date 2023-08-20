"use server";

import { client } from "@/sanity/lib/client";
import { Blog } from "@/types";
import { groq } from "next-sanity";
import { revalidatePath } from "next/cache";

const delay = (ms: number): Promise<number> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getBlogs = async () => {
  await delay(1500);
  let lastId: string | null = "";
  try {
    const query = `*[_type == 'posts'] {
      ...,
      category->{title},
      author->{name},
    } | order(_createdAt desc)`;
    revalidatePath("/");
    return await client.fetch(query);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getBlogDetails = async (slug: string) => {
  try {
    const query = groq`*[_type=="posts" && slug.current == "${slug}"][0] {
      ...,
      category->{title},
      author->{name},
    }`;

    const data = client.fetch(query);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRecommendedBlogs = async (blogId: string) => {
  try {
    const query = groq`*[_type=='posts' && _id != "${blogId}"][0...5] {
      ...,
      category->{title},
      author->{name}
    } | order(_createdAt desc)`;
    const data = await client.fetch(query);
    revalidatePath("/");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
