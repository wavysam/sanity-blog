"use client";

import Link from "next/link";
import Topbar from "./Topbar";
import { categories } from "@/constants";
import { usePathname } from "next/navigation";
import SidebarLinks from "./SidebarLinks";

export default function SideNavigation() {
  const pathname = usePathname();
  return (
    <>
      <Topbar />
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 pt-20 h-screen border-r transition-transform -translate-x-full sm:translate-x-0 dark:bg-inherit dark:border-gray-800"
      >
        <div className="h-full px-10 py-4 overflow-y-auto bg-white dark:bg-inherit">
          <ul className="space-y-2 font-medium">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={category.href}
                  className={`${
                    category.href === pathname
                      ? "bg-gray-100 dark:bg-sky-600"
                      : ""
                  } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-sky-600 group`}
                >
                  <span className="ml-3">{category.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
