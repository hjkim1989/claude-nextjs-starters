import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/typing-text";

/** 히어로 안을 천천히 떠다니는 글래스 구체 (영역 밖으로 나가지 않도록 여백 안쪽에 배치) */
const ORBS = [
  {
    className: "left-[6%] top-[18%] size-40 sm:size-56",
    tint: "oklch(0.86 0.09 290 / 0.45)",
    animation: "orb-drift-a 18s ease-in-out infinite",
  },
  {
    className: "right-[8%] top-[12%] size-28 sm:size-40",
    tint: "oklch(0.88 0.09 340 / 0.45)",
    animation: "orb-drift-b 22s ease-in-out infinite",
  },
  {
    className: "right-[18%] bottom-[14%] size-32 sm:size-48",
    tint: "oklch(0.88 0.08 210 / 0.45)",
    animation: "orb-drift-c 26s ease-in-out infinite",
  },
  {
    className: "left-[16%] bottom-[12%] size-20 sm:size-28",
    tint: "oklch(0.9 0.08 150 / 0.45)",
    animation: "orb-drift-b 20s ease-in-out infinite reverse",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/70 px-6 py-24 shadow-[0_24px_80px_oklch(0.4_0.05_280_/_0.12)] backdrop-blur-xl sm:py-32 dark:border-white/10 dark:bg-white/5">
      {/* 흰 바탕 위 파스텔 그라데이션 (강한 블러로 번지게 처리) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          backgroundImage: `
            radial-gradient(28rem 20rem at 20% 25%, oklch(0.88 0.1 290 / 0.75), transparent 65%),
            radial-gradient(26rem 18rem at 80% 20%, oklch(0.89 0.1 345 / 0.7), transparent 65%),
            radial-gradient(30rem 20rem at 70% 85%, oklch(0.89 0.09 205 / 0.65), transparent 65%),
            radial-gradient(24rem 18rem at 15% 80%, oklch(0.91 0.09 150 / 0.6), transparent 65%)
          `,
        }}
      />

      {ORBS.map((orb, index) => (
        <span
          key={index}
          aria-hidden
          className={`glass-orb pointer-events-none absolute -z-10 ${orb.className}`}
          style={{ background: orb.tint, animation: orb.animation }}
        />
      ))}

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center">
        <span className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium">
          <Sparkles className="size-3.5" />
          Next.js 16 Starter Kit
        </span>

        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          <TypingText text="빠르게 시작하는 모던 웹 스타터킷" />
        </h1>

        <p className="max-w-xl text-balance text-muted-foreground sm:text-lg">
          Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui가 모두 설정된
          상태로 바로 개발을 시작하세요.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/components">
              컴포넌트 보기
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="glass rounded-full border-0 px-6"
          >
            <Link href="/features">기능 살펴보기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
