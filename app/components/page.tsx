import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { ComponentShowcase } from "@/components/sections/component-showcase";

export const metadata: Metadata = {
  title: "컴포넌트 | Starter Kit",
  description: "스타터킷에 포함된 UI 컴포넌트 예제 모음입니다.",
};

export default async function ComponentsPage() {
  return (
    <Container className="flex flex-col gap-14 py-10">
      <PageHeader
        eyebrow="Components"
        title="바로 가져다 쓰는 컴포넌트"
        description="카테고리를 선택하면 해당 컴포넌트의 실제 동작 예제를 확인할 수 있습니다."
      />

      <ComponentShowcase />
    </Container>
  );
}
