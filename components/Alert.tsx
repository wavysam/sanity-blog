import Image from "next/image";

export default function Alert() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-12">No article found.</h1>
      <div className="relative">
        <Image src="/assets/blog.svg" alt="" width={600} height={600} />
      </div>
    </div>
  );
}
