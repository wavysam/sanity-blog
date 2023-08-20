"use server";

import { client } from "@/sanity/lib/client";
import { Comment } from "@/types";
import { groq } from "next-sanity";
import { revalidatePath } from "next/cache";

export const createComment = async (data: Comment, path: string) => {
  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: data._id,
      },
      name: data.name,
      userImage: data.userImage,
      comment: data.comment,
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getComments = async (slug: string): Promise<Comment[]> => {
  try {
    const query = groq`*[_type == 'comment' && post->slug.current == "${slug}"]`;
    const data = await client.fetch(query);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
