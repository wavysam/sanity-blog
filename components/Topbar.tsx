"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeButton from "./ThemeToggle";
import LoginModal from "./LoginModal";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SidebarLinks from "./SidebarLinks";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, Menu } from "lucide-react";
import { Righteous } from "next/font/google";
import { cn } from "@/lib/utils";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

export default function Topbar() {
  const { data: session } = useSession();
  return (
    <nav className="fixed top-0 z-50 w-full sm:px-10 bg-white border-b dark:bg-inherit">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Menu className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="py-10">
                    <SidebarLinks />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <Link href="/" className="flex ml-2 md:mr-24">
              <span
                className={cn(
                  "self-center text-2xl font-semibold sm:text-3xl whitespace-nowrap dark:text-white tracking-wide",
                  righteous.className
                )}
              >
                blox
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeButton />
            <div>
              {session?.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="relative">
                    <Image
                      src={session.user.image as string}
                      alt="Profile Image"
                      width={36}
                      height={36}
                      className="rounded-full cursor-pointer"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72 absolute right-0">
                    <div className="p-3">
                      <p>{session.user.name}</p>
                      <p className="font-medium">{session.user.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="dark:bg-sky-600 my-1"
                      onClick={() => signOut()}
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <LoginModal />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
