# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

위 `AGENTS.md`는 `next dev` 실행 시 자동으로 재생성되는 파일로, 이 프로젝트의 Next.js(16.3.8) / React(19.2.8)가 학습 데이터 시점과 다른 브레이킹 체인지를 포함한다는 경고다. App Router 관련 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 확인할 것.

## 자주 사용하는 명령어

```bash
npm run dev     # 개발 서버 (포트 3002 고정, package.json에서 `next dev -p 3002`로 지정)
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 (포트 3002 고정)
npm run lint    # ESLint (eslint-config-next의 core-web-vitals + typescript 규칙)
```

- 포트가 3002로 고정되어 있는 이유는 다른 로컬 Next.js 프로젝트와의 포트 충돌을 피하기 위함이다. 단일 테스트 실행용 스크립트나 테스트 러너(Jest/Vitest/Playwright 등)는 아직 구성되어 있지 않다.

## 아키텍처

- **디렉터리 구조**: `src/` 없이 레포 루트에 바로 `app/`, `components/`, `lib/`가 있다. 경로 별칭 `@/*`는 레포 루트를 가리킨다(`tsconfig.json`의 `paths`, `components.json`의 `aliases`).
- **라우트**: `app/page.tsx`(`/`), `app/features/page.tsx`, `app/components/page.tsx`, `app/contact/page.tsx` 4개 라우트로 구성된 App Router 기반 마케팅형 스타터킷. 새 라우트 추가 시 `components/layout/nav-links.ts`의 `NAV_LINKS`에도 함께 등록해야 데스크톱 헤더(`components/layout/header.tsx`)와 모바일 시트 메뉴(`components/layout/mobile-nav.tsx`) 양쪽에 자동 반영된다(두 컴포넌트 모두 이 배열을 공유).
- **레이아웃 합성**: `app/layout.tsx`가 모든 페이지를 `ThemeProvider`(next-themes, `attribute="class"`, 시스템 테마 기본) → `TooltipProvider` → `Header` + `<main>{children}</main>` + `Footer` + `Toaster`(sonner) 순으로 감싼다.
- **컴포넌트 3계층**:
  - `components/ui/*`: shadcn/ui로 생성된 Radix 기반 프리미티브. 외부 패키지가 아니라 레포에 직접 소유된 소스이므로 자유롭게 수정 가능. `components.json`에 `style: "radix-nova"`, `baseColor: "neutral"`로 설정되어 있어 신규 컴포넌트는 `npx shadcn@latest add <name>`으로 추가하면 같은 스타일로 생성된다.
  - `components/sections/*`: 각 페이지에 들어가는 조립된 섹션(`hero`, `feature-cards`, `tech-stack`, `component-showcase`, `contact-form`).
  - `components/layout/*`: 페이지 공통 뼈대(`header`, `footer`, `container`, `page-header`, `mobile-nav`, `nav-links`).
- **스타일링**: Tailwind CSS v4이며 별도의 `tailwind.config` 파일이 없다 — 모든 디자인 토큰(색상, radius 등)은 `app/globals.css`의 `@theme inline` 블록과 `:root`/`.dark` CSS 변수(oklch)로 정의된다. 다크 모드는 `@custom-variant dark (&:is(.dark *))`와 `.dark` 클래스 조합으로 동작한다. `globals.css`에 정의된 `.glass`/`.glass-card` 유틸리티 클래스가 헤더·모바일 내비·카드 전반의 글래스모피즘 외관을 담당하므로, 비슷한 반투명 효과가 필요하면 블러/투명도를 새로 만들지 말고 이 클래스를 재사용한다.
- **클래스 합성**: `lib/utils.ts`는 자체 구현이 아니라 `cn` 패키지의 `cn`을 그대로 재노출한다. 조건부 className은 전부 이 `cn`을 사용한다.
- **폼 패턴**: `react-hook-form` + `zod`(`@hookform/resolvers/zod`) 조합을 쓴다. `components/sections/contact-form.tsx`가 레퍼런스 구현으로, zod 스키마로 먼저 검증 규칙을 정의하고, 네이티브 `<input>`이 아닌 커스텀 컴포넌트(Select, RadioGroup, Checkbox)는 `Controller`로 연결하며, 제출 결과 피드백은 `sonner`의 `toast`로 표시한다.
- **언어**: 사용자에게 노출되는 모든 문구(네비게이션, 페이지 타이틀/설명, 폼 라벨·에러 메시지 등)가 한국어로 작성되어 있다. 새 UI 텍스트를 추가할 때도 기존 톤(해요체/합니다체 혼용 없이 일관된 문체)을 유지한다.
