"use client";

import { useState } from "react";
import { Bell, Check, MoreHorizontal, Star, TriangleAlert } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "buttons", label: "Button" },
  { id: "badges", label: "Badge" },
  { id: "forms", label: "Form" },
  { id: "selection", label: "Selection" },
  { id: "overlays", label: "Overlay" },
  { id: "feedback", label: "Feedback" },
  { id: "data", label: "Data" },
  { id: "disclosure", label: "Disclosure" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const MEMBERS = [
  { name: "김하준", role: "Product Designer", status: "활성" },
  { name: "이서윤", role: "Frontend Engineer", status: "활성" },
  { name: "박도현", role: "Backend Engineer", status: "휴가" },
];

export function ComponentShowcase() {
  const [category, setCategory] = useState<CategoryId>("buttons");

  return (
    <section className="flex flex-col gap-8">
      {/* 뱃지 형태의 카테고리 선택 — 클릭하면 하단 예제가 교체된다. */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((item) => {
          const active = category === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              aria-pressed={active}
              className={cn(
                "glass rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                active
                  ? "bg-foreground text-background shadow-lg dark:bg-white dark:text-neutral-900"
                  : "text-muted-foreground hover:-translate-y-0.5 hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="glass rounded-[2rem] p-7 sm:p-10">
        {category === "buttons" && (
          <ExampleBlock
            title="Button"
            description="여섯 가지 variant와 크기 조합을 제공합니다."
          >
            <div className="flex flex-wrap items-center gap-3">
              {(
                ["default", "secondary", "outline", "ghost", "destructive", "link"] as const
              ).map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {(["xs", "sm", "default", "lg"] as const).map((size) => (
                <Button key={size} size={size} variant="outline">
                  size: {size}
                </Button>
              ))}
              <Button size="icon" variant="outline" aria-label="알림">
                <Bell className="size-4" />
              </Button>
              <Button disabled>disabled</Button>
            </div>
          </ExampleBlock>
        )}

        {category === "badges" && (
          <ExampleBlock
            title="Badge"
            description="상태 표시와 라벨링에 사용하는 작은 조각입니다."
          >
            <div className="flex flex-wrap items-center gap-2">
              {(["default", "secondary", "outline", "destructive", "ghost"] as const).map(
                (variant) => (
                  <Badge key={variant} variant={variant}>
                    {variant}
                  </Badge>
                )
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <Check className="size-3" />
                배포 완료
              </Badge>
              <Badge variant="secondary">
                <Star className="size-3" />
                즐겨찾기
              </Badge>
              <Badge variant="destructive">
                <TriangleAlert className="size-3" />
                점검 필요
              </Badge>
            </div>
          </ExampleBlock>
        )}

        {category === "forms" && (
          <ExampleBlock
            title="Form"
            description="입력 요소는 React Hook Form과 그대로 연결할 수 있습니다."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-name">이름</Label>
                <Input id="demo-name" placeholder="홍길동" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-email">이메일</Label>
                <Input id="demo-email" type="email" placeholder="hong@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-plan">요금제</Label>
                <Select>
                  <SelectTrigger id="demo-plan">
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-invalid">검증 실패 예시</Label>
                <Input id="demo-invalid" aria-invalid defaultValue="잘못된 값" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="demo-message">메시지</Label>
                <Textarea id="demo-message" rows={3} placeholder="내용을 입력하세요" />
              </div>
            </div>
          </ExampleBlock>
        )}

        {category === "selection" && (
          <ExampleBlock
            title="Selection"
            description="체크박스, 스위치, 라디오, 슬라이더로 상태를 조작합니다."
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">알림 설정</span>
                <label className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Checkbox defaultChecked />
                  이메일 알림 받기
                </label>
                <label className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Checkbox />
                  마케팅 정보 수신
                </label>
                <label className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Switch defaultChecked />
                  주간 리포트
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">배포 환경</span>
                <RadioGroup defaultValue="preview" className="flex flex-col gap-2.5">
                  {["production", "preview", "development"].map((value) => (
                    <label
                      key={value}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <RadioGroupItem value={value} />
                      {value}
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">동시 실행 수</span>
                <Slider defaultValue={[40]} max={100} step={1} />
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium">정렬 기준</span>
                <ToggleGroup type="single" defaultValue="recent" variant="outline">
                  <ToggleGroupItem value="recent">최신</ToggleGroupItem>
                  <ToggleGroupItem value="popular">인기</ToggleGroupItem>
                  <ToggleGroupItem value="name">이름</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </ExampleBlock>
        )}

        {category === "overlays" && (
          <ExampleBlock
            title="Overlay"
            description="모달, 드롭다운, 팝오버, 툴팁 모두 키보드 조작을 지원합니다."
          >
            <div className="flex flex-wrap items-center gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Dialog 열기</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>프로젝트를 삭제할까요?</DialogTitle>
                    <DialogDescription>
                      삭제한 프로젝트는 복구할 수 없습니다. 계속 진행하시겠습니까?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">취소</Button>
                    <Button variant="destructive">삭제</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    메뉴
                    <MoreHorizontal className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>이름 바꾸기</DropdownMenuItem>
                  <DropdownMenuItem>복제</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">삭제</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2">
                  <p className="text-sm font-medium">빠른 설정</p>
                  <p className="text-sm text-muted-foreground">
                    자주 쓰는 옵션을 이곳에 배치합니다.
                  </p>
                </PopoverContent>
              </Popover>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>마우스를 올리면 나타납니다</TooltipContent>
              </Tooltip>
            </div>
          </ExampleBlock>
        )}

        {category === "feedback" && (
          <ExampleBlock
            title="Feedback"
            description="상태 전달에 사용하는 알림, 진행률, 로딩 자리표시자입니다."
          >
            <div className="flex flex-col gap-4">
              <Alert>
                <Bell className="size-4" />
                <AlertTitle>새 버전이 배포되었습니다</AlertTitle>
                <AlertDescription>
                  변경 사항을 적용하려면 페이지를 새로고침하세요.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <TriangleAlert className="size-4" />
                <AlertTitle>빌드에 실패했습니다</AlertTitle>
                <AlertDescription>
                  타입 오류 3건이 발견되었습니다. 로그를 확인해 주세요.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">업로드 진행률</span>
                  <span className="text-muted-foreground">68%</span>
                </div>
                <Progress value={68} />
              </div>

              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3.5 w-40" />
                  <Skeleton className="h-3.5 w-24" />
                </div>
              </div>
            </div>
          </ExampleBlock>
        )}

        {category === "data" && (
          <ExampleBlock
            title="Data"
            description="목록과 사용자 정보를 표현하는 패턴입니다."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>멤버</TableHead>
                  <TableHead>역할</TableHead>
                  <TableHead className="text-right">상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MEMBERS.map((member) => (
                  <TableRow key={member.name}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="size-8">
                          <AvatarImage src="https://github.com/shadcn.png" alt="" />
                          <AvatarFallback>{member.name.slice(0, 1)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{member.role}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={member.status === "활성" ? "default" : "secondary"}>
                        {member.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ExampleBlock>
        )}

        {category === "disclosure" && (
          <ExampleBlock
            title="Disclosure"
            description="긴 내용을 접어 두었다가 필요할 때 펼칩니다."
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="install">
                <AccordionTrigger>설치는 어떻게 하나요?</AccordionTrigger>
                <AccordionContent>
                  저장소를 클론한 뒤 npm install 명령으로 의존성을 설치하면 바로 개발
                  서버를 실행할 수 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="theme">
                <AccordionTrigger>테마 색상을 바꾸려면?</AccordionTrigger>
                <AccordionContent>
                  app/globals.css의 CSS 변수만 수정하면 라이트·다크 모드 전체에 즉시
                  반영됩니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="component">
                <AccordionTrigger>컴포넌트를 추가하려면?</AccordionTrigger>
                <AccordionContent>
                  npx shadcn@latest add [컴포넌트명] 명령으로 필요한 컴포넌트를
                  components/ui 아래에 소스 코드로 추가합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ExampleBlock>
        )}
      </div>
    </section>
  );
}

function ExampleBlock({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Separator />
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}
