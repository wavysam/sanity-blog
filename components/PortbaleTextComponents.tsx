import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative h-80 w-full my-4">
        <Image
          src={urlForImage(value).url()}
          alt="Blog image"
          fill
          className="object-contain"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-8 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-6 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl py-4 font-bold">{children}</h4>
    ),
    normal: ({ children }: any) => <p className="text-base py-2">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-sky-600">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mt-xl list-disc p-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal p-4">{children}</ol>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    stong: ({ children }: any) => (
      <strong className="text-gray-600 font-semibold">{children}</strong>
    ),
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-sky-600 font-medium hover:underline hover:underline-offset-2"
        >
          {children}
        </Link>
      );
    },
  },
};
