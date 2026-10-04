import { Badge } from "@/components/ui/badge";

const STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "next-themes",
  "lucide-react",
  "React Hook Form",
  "Zod",
];

export function TechStack() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-2 pb-16">
      {STACK.map((tech) => (
        <Badge key={tech} variant="secondary">
          {tech}
        </Badge>
      ))}
    </section>
  );
}
