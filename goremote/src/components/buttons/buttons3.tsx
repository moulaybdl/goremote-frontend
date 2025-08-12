import { ButtonProps } from "@/types/buttons";

export default function Button3({ title, radius="4px" }: ButtonProps) {
  return (
    <div className={`min-w-36 h-14 bg-primary ${radius}  font-lexend-medium text-white flex justify-center items-center cursor-pointer select-none
    transition-all duration-300 ease-in-out hover:elevation-3 hover:scale-[1.02] active:scale-[0.98] active:elevation-1`}>
      {title}
    </div>
  );
}
