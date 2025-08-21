import { RegistrationFormFieldProps } from "@/types/inputFieldProps";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function InputField3({
  label,
  type,
  placeholder,
  options,
  required,
  value,
  onChange,
  helperText,
}: RegistrationFormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-lexend-medium text-sm text-secondary">{label}</span>
      <input
        type={type || "text"}
        className="m-0 p-0 outline-none shadow-none appearance-none box-border px-6
      h-11 min-w-56 w-full rounded-md border border-subtle font-lexend-medium text-secondary 
      focus:border-glow focus:border"
        placeholder={placeholder}
      />
    </div>
  );
}
