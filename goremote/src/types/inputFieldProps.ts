export type InputFieldProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}

export type RegistrationFormFieldProps = {
  label: string;
  type: "text" | "email" | "password" | "select" | "checkbox";
  placeholder?: string;
  helperText?: string;
  options?: string[]; // For select fields
  required?: boolean;
  value?: string | boolean; // For checkbox
  onChange?: (value: string | boolean) => void;
}