import { ButtonProps } from "@/types/buttons";

export default function LearnMoreButton({ title }: ButtonProps) {
  return (
    <div className="h-6 min-w-28 bg-accent text-[var(--color-background)] text-sm font-lexend font-lexend-medium rounded-[4px] flex justify-center items-center cursor-pointer select-none">
      {title}
    </div>
  );
}
