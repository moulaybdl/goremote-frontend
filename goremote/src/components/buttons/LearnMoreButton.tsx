import { ButtonProps } from "@/types/buttons";

export default function LearnMoreButton({ title }: ButtonProps) {
  return (
    <div className="h-6 min-w-28 text-neutral-600 bg-[#00E0FF] text-sm font-lexend font-lexend-medium rounded-[4px] flex justify-center items-center cursor-pointer select-none">
      {title}
    </div>
  );
}
