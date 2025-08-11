import { ButtonProps } from "@/types/buttons";

export default function Button3({ title }: ButtonProps) {
  return (
    <div className="min-w-36 h-14 bg-primary rounded-[4px] text-muted font-lexend-medium text-base flex justify-center items-center cursor-pointer select-none">
      {title}
    </div>
  );
}
