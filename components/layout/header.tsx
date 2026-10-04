"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NAV_LINKS } from "@/components/layout/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      {/* 떠 있는 pill 주변으로 스크롤 콘텐츠가 비치지 않도록 상단을 부드럽게 흐린다 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
      />
      <Container className="relative pt-3">
        <div className="glass flex h-14 items-center justify-between rounded-full px-3 pl-5">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <Box className="size-5" />
            Starter Kit
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-foreground/10 text-foreground"
                      : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
