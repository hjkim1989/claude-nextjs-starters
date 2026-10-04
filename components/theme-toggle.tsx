"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // 아이콘 전환은 CSS(dark:)로 처리해 마운트 전후 렌더 결과를 동일하게 유지한다.
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full"
      aria-label="테마 전환"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
