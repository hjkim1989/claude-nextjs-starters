import { Code2, Globe } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = [
  { href: "#features", label: "기능" },
  { href: "#components", label: "컴포넌트" },
  { href: "#contact", label: "문의" },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <Container>
        <Separator />
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Starter Kit. All rights reserved.
          </p>

          <nav className="flex items-center gap-4">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="https://github.com" aria-label="GitHub" className="hover:text-foreground">
              <Code2 className="size-4" />
            </a>
            <a href="https://example.com" aria-label="Website" className="hover:text-foreground">
              <Globe className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
