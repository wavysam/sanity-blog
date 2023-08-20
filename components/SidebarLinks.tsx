import { categories } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLinks() {
  const pathname = usePathname();
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-inherit">
      <ul className="space-y-2 font-medium">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={category.href}
              className={`${
                category.href === pathname ? "bg-gray-100 dark:bg-sky-600" : ""
              } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-sky-600 group`}
            >
              <span className="ml-3">{category.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
