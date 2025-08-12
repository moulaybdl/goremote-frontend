import { ButtonProps } from "@/types/buttons";

export default function PrimaryButton({ title, radius="4px" }: ButtonProps) {
  return (
    <div
      className={`min-w-36 h-14 bg-primary rounded-[${radius}] text-white font-lexend-medium text-base flex justify-center items-center select-none elevation-2
    cursor-pointer transition-all duration-300 ease-in-out hover:elevation-3 hover:scale-[1.02] active:scale-[0.98] active:elevation-1`}
    >
      {title}
    </div>
  );
}
