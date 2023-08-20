"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="hover:bg-gray-100 rounded p-1 dark:hover:bg-gray-700"
    >
      {resolvedTheme === "dark" ? <Sun /> : <MoonStar />}
    </button>
  );
}
