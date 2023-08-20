import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-5xl">
      {[...Array(3)].map((i) => (
        <div
          key={i}
          className="grid sm:grid-cols-3 gap-6 py-6 border-b border-gray-100"
        >
          <div>
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-6 w-full my-2" />
            <Skeleton className="h-6 w-full my-2" />
            <Skeleton className="h-6 w-1/2 my-2" />
            <Skeleton className="h-3 w-2/3 my-2" />
            <Skeleton className="h-3 w-1/3 my-2" />
          </div>
          <div className="sm:block hidden">
            <Skeleton className="h-4 w-full my-2" />
            <Skeleton className="h-4 w-full my-2" />
            <Skeleton className="h-4 w-full my-2" />
            <Skeleton className="h-4 w-full my-2" />
          </div>
          <div>
            <Skeleton className="sm:h-36 h-48" />
          </div>
        </div>
      ))}
    </div>
  );
}
