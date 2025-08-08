import { ButtonProps } from "@/types/buttons";

export default function Button3({ title }: ButtonProps) {
  return (
    <div className="bg-primary  w-fit px-10 h-12 flex justify-center items-center rounded-[6px] font-lexend-medium text-base elevation-2 text-primary-text cursor-pointer transition-all duration-300 ease-in-out hover:elevation-3 hover:scale-[1.02] active:scale-[0.98] active:elevation-1">
      {title}
    </div>
  );
}
