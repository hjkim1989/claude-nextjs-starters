import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FeatureCards } from "@/components/sections/feature-cards";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";

export default async function Home() {
  return (
    <Container className="flex flex-col gap-20 py-10 sm:gap-28">
      <Hero />

      <section className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            필요한 것은 이미 들어 있습니다
          </h2>
          <p className="max-w-xl text-muted-foreground">
            설정에 시간을 쓰지 않고 바로 제품을 만들 수 있도록 구성했습니다.
          </p>
        </div>

        <TechStack />
        <FeatureCards />

        <div className="flex justify-center">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/features">
              기능 자세히 보기
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}
