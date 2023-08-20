import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-5xl">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-9 w-full my-3" />
      <Skeleton className="h-9 w-1/2 my-3" />
      <div className="flex items-center gap-6 mt-6">
        <Skeleton className="h-4 w-44" />
        <Skeleton className="h-4 w-36" />
      </div>
      <Skeleton className="w-full h-64 sm:h-96 my-10" />
    </div>
  );
}
