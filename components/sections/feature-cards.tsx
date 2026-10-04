import { Moon, LayoutTemplate, ShieldCheck, Smartphone } from "lucide-react";

export const FEATURES = [
  {
    icon: Moon,
    title: "다크모드 내장",
    description:
      "next-themes로 라이트/다크 테마를 클릭 한 번에 전환합니다. 사용자의 선택은 다음 방문에도 유지됩니다.",
    tint: "oklch(0.88 0.09 290 / 0.55)",
  },
  {
    icon: LayoutTemplate,
    title: "검증된 UI 프리미티브",
    description:
      "shadcn/ui와 Radix 기반의 접근성 높은 컴포넌트를 복사가 아닌 소스 코드로 소유합니다.",
    tint: "oklch(0.88 0.09 345 / 0.55)",
  },
  {
    icon: ShieldCheck,
    title: "타입 안정성",
    description:
      "TypeScript strict 모드와 Zod 스키마 검증으로 런타임 이전에 오류를 잡아냅니다.",
    tint: "oklch(0.88 0.08 205 / 0.55)",
  },
  {
    icon: Smartphone,
    title: "반응형 레이아웃",
    description:
      "모바일부터 데스크톱까지 동일한 디자인 언어를 유지하는 레이아웃 체계를 제공합니다.",
    tint: "oklch(0.9 0.08 150 / 0.55)",
  },
];

export function FeatureCards() {
  return (
    <section className="grid gap-5 sm:grid-cols-2">
      {FEATURES.map((feature) => (
        <article
          key={feature.title}
          className="glass glass-card relative overflow-hidden rounded-[1.75rem] p-7"
        >
          {/* 카드 뒤편에서 배경 그라데이션이 비치는 느낌을 주는 블러 레이어 */}
          <div
            aria-hidden
            className="absolute -right-10 -top-10 size-40 rounded-full blur-2xl"
            style={{ background: feature.tint }}
          />

          <div className="relative flex flex-col gap-3">
            <span className="glass flex size-11 items-center justify-center rounded-2xl">
              <feature.icon className="size-5" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
