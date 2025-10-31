import { ButtonProps } from "@/types/buttons";

export default function Button3({
  title,
  radius = "4px",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <div
      className={`min-w-36 h-14 ${
        disabled 
          ? "bg-neutral-600 cursor-not-allowed opacity-60" 
          : "bg-primary-600 cursor-pointer hover:elevation-3 hover:scale-[1.02] active:scale-[0.98] active:elevation-1"
      } ${radius} font-normal text-base text-neutral-100 flex justify-center items-center select-none
      border border-primary-400
    transition-all duration-300 ease-in-out`}
      onClick={disabled ? undefined : onClick}
    >
      {title}
    </div>
  );
}
