import { defineField } from "sanity";

export default defineField({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
    }),
    defineField({
      name: "userImage",
      title: "User Image",
      type: "string",
    }),
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: { type: "posts" },
    }),
  ],
});
