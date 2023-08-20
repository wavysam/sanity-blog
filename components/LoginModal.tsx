"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="dark:bg-sky-600 text-white">Join Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Button
          variant="outline"
          className="flex justify-center items-center my-6 h-12"
          onClick={() => signIn("google")}
        >
          <Image
            src="/assets/google.svg"
            alt="Google Logo"
            width={36}
            height={36}
          />
          <span>Sign in with Google</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
