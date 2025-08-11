import { ButtonProps } from "@/types/buttons";

export default function Button4({ title }: ButtonProps) {
  return (
    <div className="min-w-36 h-14 bg-surface-light border border-[var(--color-text-muted)] rounded-[4px] text-muted font-lexend-medium text-base flex justify-center items-center cursor-pointer select-none
    transition-all duration-300 ease-in-out hover:elevation-3 hover:scale-[1.02] active:scale-[0.98] active:elevation-1">
      {title}
    </div>
  );
}
