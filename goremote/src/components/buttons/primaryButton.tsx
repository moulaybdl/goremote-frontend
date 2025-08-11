import { ButtonProps } from "@/types/buttons";

export default function PrimaryButton({ title }: ButtonProps) {
  return (
    <div className="min-w-36 h-14 bg-primary rounded-[4px] text-white font-lexend-medium text-base flex justify-center items-center cursor-pointer select-none">
      {title}
    </div>
  );
}
