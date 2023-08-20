import type { Image, PortableTextBlock } from "sanity";

export interface Base {
  _id: string;
  _createdAt: Date;
}

export interface Blog extends Base {
  title: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: Date;
  mainImage: Image;
  overview: string;
  category: {
    title: string;
  };
  author: {
    name: string;
  };
  body: PortableTextBlock;
}

export interface Comment {
  _id: string;
  name: string;
  userImage: string;
  comment: string;
  _createdAt?: string;
}
