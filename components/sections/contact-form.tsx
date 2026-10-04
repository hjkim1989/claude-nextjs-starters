"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const BUDGETS = [
  { value: "under-10m", label: "1천만원 미만" },
  { value: "10m-30m", label: "1천만 ~ 3천만원" },
  { value: "30m-100m", label: "3천만 ~ 1억원" },
  { value: "over-100m", label: "1억원 이상" },
];

const INTERESTS = [
  { id: "web", label: "웹 애플리케이션" },
  { id: "design", label: "디자인 시스템" },
  { id: "migration", label: "레거시 마이그레이션" },
  { id: "consulting", label: "기술 컨설팅" },
];

const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해주세요."),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  company: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^[0-9-]{9,13}$/.test(value),
      "숫자와 하이픈만 사용해 9~13자로 입력해주세요."
    ),
  budget: z.string().min(1, "예산 범위를 선택해주세요."),
  timeline: z.enum(["asap", "1month", "3months", "undecided"], {
    required_error: "희망 일정을 선택해주세요.",
    invalid_type_error: "희망 일정을 선택해주세요.",
  }),
  interests: z.array(z.string()).min(1, "관심 분야를 하나 이상 선택해주세요."),
  message: z.string().min(10, "메시지는 10자 이상 입력해주세요."),
  agree: z
    .boolean()
    .refine((value) => value, "개인정보 수집 및 이용에 동의해주세요."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      interests: [],
      message: "",
      agree: false,
    },
  });

  function onSubmit(values: ContactFormValues) {
    // 데모용 페이지이므로 실제 전송 없이 토스트로만 결과를 알린다.
    toast.success(`${values.name}님, 문의가 접수되었습니다.`, {
      description: "실제로 전송되지는 않는 예시 폼입니다.",
    });
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="glass rounded-[2rem] p-7 sm:p-10">
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">이름 *</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  placeholder="홍길동"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">이메일 *</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="hong@example.com"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="company"
            control={form.control}
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="company">회사명</FieldLabel>
                <Input {...field} id="company" placeholder="(선택) 소속 회사" />
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="phone">연락처</FieldLabel>
                <Input
                  {...field}
                  id="phone"
                  placeholder="010-1234-5678"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Separator />

        <div className="grid gap-5 sm:grid-cols-2">
          <Controller
            name="budget"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="budget">예산 범위 *</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="budget" aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGETS.map((budget) => (
                      <SelectItem key={budget.value} value={budget.value}>
                        {budget.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="timeline"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>희망 일정 *</FieldLabel>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col gap-2.5 pt-1"
                >
                  {[
                    { value: "asap", label: "가능한 빨리" },
                    { value: "1month", label: "1개월 이내" },
                    { value: "3months", label: "3개월 이내" },
                    { value: "undecided", label: "아직 미정" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <RadioGroupItem value={option.value} />
                      {option.label}
                    </label>
                  ))}
                </RadioGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Controller
          name="interests"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>관심 분야 *</FieldLabel>
              <div className="grid gap-2.5 pt-1 sm:grid-cols-2">
                {INTERESTS.map((interest) => (
                  <label
                    key={interest.id}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <Checkbox
                      checked={field.value?.includes(interest.id)}
                      onCheckedChange={(checked) =>
                        field.onChange(
                          checked
                            ? [...(field.value ?? []), interest.id]
                            : (field.value ?? []).filter((id) => id !== interest.id)
                        )
                      }
                    />
                    {interest.label}
                  </label>
                ))}
              </div>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Separator />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">프로젝트 설명 *</FieldLabel>
              <Textarea
                {...field}
                id="message"
                rows={5}
                placeholder="어떤 문제를 해결하고 싶으신가요?"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>최소 10자 이상 입력해주세요.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="agree"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Checkbox
                  checked={field.value === true}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                  className="mt-0.5"
                />
                개인정보 수집 및 이용에 동의합니다. (예시 페이지로 실제 수집은 하지 않습니다)
              </label>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto sm:self-end">
          <Send className="size-4" />
          문의 보내기
        </Button>
      </FieldGroup>
    </form>
  );
}
