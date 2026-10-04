import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "문의 | Starter Kit",
  description: "프로젝트 문의를 남겨주세요.",
};

const INFO = [
  { icon: Mail, label: "이메일", value: "hello@starterkit.dev" },
  { icon: Clock, label: "응답 시간", value: "영업일 기준 1~2일" },
  { icon: MapPin, label: "위치", value: "서울특별시 강남구" },
];

export default async function ContactPage() {
  return (
    <Container className="flex flex-col gap-14 py-10">
      <PageHeader
        eyebrow="Contact"
        title="프로젝트를 들려주세요"
        description="아래 폼을 채워 보내주시면 담당자가 확인 후 회신드립니다."
      />

      <section className="grid gap-5 sm:grid-cols-3">
        {INFO.map((item) => (
          <article
            key={item.label}
            className="glass glass-card flex items-center gap-4 rounded-[1.5rem] p-5"
          >
            <span className="glass flex size-11 shrink-0 items-center justify-center rounded-2xl">
              <item.icon className="size-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          </article>
        ))}
      </section>

      <ContactForm />
    </Container>
  );
}
