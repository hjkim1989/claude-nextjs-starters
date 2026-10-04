import type { Metadata } from "next";
import { Gauge, Layers, Palette, Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { FeatureCards } from "@/components/sections/feature-cards";

export const metadata: Metadata = {
  title: "기능 | Starter Kit",
  description: "스타터킷에 기본 포함된 기능들을 소개합니다.",
};

const DETAILS = [
  {
    icon: Layers,
    title: "계층으로 정리된 컴포넌트",
    description:
      "프리미티브 → 복합 컴포넌트 → 레이아웃 → 페이지 섹션 순서로 구성되어, 어디에 무엇을 추가해야 할지 고민할 필요가 없습니다.",
  },
  {
    icon: Palette,
    title: "토큰 기반 테마",
    description:
      "모든 색상은 oklch CSS 변수로 정의되어 있어 globals.css 한 곳만 수정하면 전체 디자인이 함께 바뀝니다.",
  },
  {
    icon: Gauge,
    title: "Turbopack 기본 적용",
    description:
      "개발 서버와 프로덕션 빌드 모두 Turbopack으로 동작하여 변경 사항이 즉시 반영됩니다.",
  },
  {
    icon: Workflow,
    title: "검증된 폼 파이프라인",
    description:
      "React Hook Form과 Zod가 연결되어 있어 스키마만 정의하면 검증·에러 표시가 자동으로 처리됩니다.",
  },
];

export default async function FeaturesPage() {
  return (
    <Container className="flex flex-col gap-14 py-10">
      <PageHeader
        eyebrow="Features"
        title="제품에만 집중할 수 있도록"
        description="반복되는 설정과 UI 기초 작업을 미리 끝내 두었습니다."
      />

      <FeatureCards />

      <section className="grid gap-5 lg:grid-cols-2">
        {DETAILS.map((detail) => (
          <article key={detail.title} className="glass glass-card rounded-[1.75rem] p-7">
            <div className="flex flex-col gap-3">
              <span className="glass flex size-11 items-center justify-center rounded-2xl">
                <detail.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{detail.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {detail.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}
