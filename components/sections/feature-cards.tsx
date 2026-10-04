import { Moon, LayoutTemplate, ShieldCheck, Smartphone } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FEATURES = [
  {
    icon: Moon,
    title: "다크모드 내장",
    description: "next-themes로 라이트/다크/시스템 테마를 즉시 전환합니다.",
  },
  {
    icon: LayoutTemplate,
    title: "검증된 UI 프리미티브",
    description: "shadcn/ui와 Radix 기반 접근성 높은 컴포넌트를 제공합니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안정성",
    description: "TypeScript strict 모드와 Zod 스키마 검증을 기본 적용합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 레이아웃",
    description: "모바일부터 데스크톱까지 일관된 레이아웃을 제공합니다.",
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES.map((feature) => (
        <Card key={feature.title}>
          <CardHeader>
            <feature.icon className="size-6 text-primary" />
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
