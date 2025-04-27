"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevents mismatch during SSR

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="">
      {theme === "dark" ? (
        <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ) : (
        <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      )}
    </button>
  );
}
