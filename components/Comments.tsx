import { Comment } from "@/types";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiMessageRounded } from "react-icons/bi";

dayjs.extend(relativeTime);

export default function Comments({ comments }: { comments: Comment[] }) {
  if (!comments.length) {
    return (
      <div className="text-center py-10 border-t">
        <div className="bg-gray-100 inline-block p-4 rounded-full dark:bg-sky-600">
          <BiMessageRounded size={40} />
        </div>
        <h4>No one seems to have shared their thoughts on this topic yet</h4>
        <p>Leave a comment so your voice will be heard first.</p>
      </div>
    );
  }

  return (
    <div className="">
      {comments.map((comment) => (
        <div key={comment._id} className="flex items-start gap-2 py-5">
          <div>
            <Image
              src={comment.userImage}
              alt="user image"
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>
          <div className="w-full">
            <p className="font-medium">{comment.name}</p>
            <p className="text-base">{comment.comment}</p>
            <p className="text-xs mt-1">
              {dayjs(comment._createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
