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
    <section className="flex flex-wrap items-center justify-center gap-2">
      {STACK.map((tech) => (
        <span
          key={tech}
          className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </section>
  );
}
