"use client";

import { Textarea } from "./ui/textarea";
import { createComment } from "@/lib/actions/comment.action";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

type Input = {
  comment: string;
};

export default function ConversationForm({ _id }: { _id: string }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitted },
  } = useForm<Input>();

  const onSubmit = async (data: Input) => {
    const values = {
      _id,
      name: session?.user?.name as string,
      userImage: session?.user?.image as string,
      comment: data.comment,
    };
    await createComment(values, pathname);

    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Textarea
            {...register("comment", { required: true })}
            disabled={!session?.user}
          />
          <Button
            type="submit"
            disabled={isSubmitting || !session?.user}
            className="mt-5 w-full dark:bg-sky-600 dark:text-white"
          >
            Comment
          </Button>
          {!session?.user && (
            <p className="text-center my-4">
              You must sign in first to share your thoughts about this topic.
            </p>
          )}
        </div>
      </form>
    </>
  );
}
