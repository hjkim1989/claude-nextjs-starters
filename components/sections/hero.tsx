import { ArrowRight, Code2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <Badge variant="secondary">Next.js 16 Starter Kit</Badge>

      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        빠르게 시작하는 모던 웹 스타터킷
      </h1>

      <p className="max-w-xl text-muted-foreground sm:text-lg">
        Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui가 모두 설정된
        상태로 바로 개발을 시작하세요.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <a href="#components">
            컴포넌트 보기
            <ArrowRight className="size-4" />
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Code2 className="size-4" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
