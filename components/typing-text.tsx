"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TypingTextProps = {
  text: string;
  /** 글자당 입력 간격(ms) */
  typingSpeed?: number;
  /** 문장 완성 후 머무는 시간(ms) */
  holdDuration?: number;
  className?: string;
};

export function TypingText({
  text,
  typingSpeed = 110,
  holdDuration = 1000,
  className,
}: TypingTextProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 문장을 모두 쓴 뒤 holdDuration 만큼 머물렀다가 처음부터 다시 시작한다.
    const done = count >= text.length;
    const timer = window.setTimeout(
      () => setCount(done ? 0 : count + 1),
      done ? holdDuration : typingSpeed
    );

    return () => window.clearTimeout(timer);
  }, [count, text.length, typingSpeed, holdDuration]);

  return (
    <span className={cn("relative inline-block", className)}>
      {/* 레이아웃이 흔들리지 않도록 전체 문장을 투명하게 깔아 높이를 고정한다. */}
      <span className="invisible" aria-hidden>
        {text}
      </span>
      <span className="absolute inset-0">
        <span aria-hidden>{text.slice(0, count)}</span>
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] rounded-full bg-foreground/70 align-middle"
          style={{ animation: "caret-blink 1s steps(1, end) infinite" }}
        />
        <span className="sr-only">{text}</span>
      </span>
    </span>
  );
}
