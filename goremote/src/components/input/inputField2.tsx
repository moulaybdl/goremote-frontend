import { InputFieldProps } from "@/types/inputFieldProps";

export default function InputField2({
  label,
  placeholder,
  type = "text",
  value,
}: InputFieldProps) {
  return (
    <input
      type={type}
      className="m-0 p-0 outline-none shadow-none appearance-none box-border px-6
      h-16 min-w-96 w-full rounded-[9px] bg-[var(--border-dark)] text-base font-lexend-medium text-secondary
      focus:border-glow focus:border-2"
      placeholder={placeholder}
    ></input>
  );
}
