"use client";

import { MoreHorizontal } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BUTTON_VARIANTS = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

const BADGE_VARIANTS = ["default", "secondary", "outline", "destructive"] as const;

export function ComponentShowcase() {
  return (
    <section id="components" className="pb-16">
      <Card>
        <CardHeader>
          <CardTitle>컴포넌트 전시</CardTitle>
          <CardDescription>
            설치된 shadcn/ui 컴포넌트를 직접 조작해 보세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="buttons">
            <TabsList>
              <TabsTrigger value="buttons">Button / Badge</TabsTrigger>
              <TabsTrigger value="overlays">Dialog / Dropdown</TabsTrigger>
              <TabsTrigger value="feedback">Avatar / Skeleton</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons" className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                {BUTTON_VARIANTS.map((variant) => (
                  <Tooltip key={variant}>
                    <TooltipTrigger asChild>
                      <Button variant={variant}>{variant}</Button>
                    </TooltipTrigger>
                    <TooltipContent>variant=&quot;{variant}&quot;</TooltipContent>
                  </Tooltip>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {BADGE_VARIANTS.map((variant) => (
                  <Badge key={variant} variant={variant}>
                    {variant}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="overlays" className="flex flex-wrap items-center gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">더 알아보기</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog 예시</DialogTitle>
                    <DialogDescription>
                      Radix UI 기반의 접근성 높은 모달 컴포넌트입니다.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="더보기">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>수정</DropdownMenuItem>
                  <DropdownMenuItem>공유</DropdownMenuItem>
                  <DropdownMenuItem>삭제</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TabsContent>

            <TabsContent value="feedback" className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
