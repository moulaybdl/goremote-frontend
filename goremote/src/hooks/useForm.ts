import { FormErrors } from "@/types/api";
import { RegisterRequest } from "@/types/auth";
import { useCallback, useRef, useState } from "react";

// T represent FormData
export interface UseFormConfig<T> {
  initialValues?: Partial<T>;
  validate?: (values: T) => Partial<T>;
  // validators: ((values: T) => Partial<T>)[];
  onSubmit: (values: T) => Promise<void> | void;
}

export function useForm<T extends Record<string, any>>({
  initialValues = {},
  // validators,
  onSubmit,
}: UseFormConfig<T>) {
  const refs = useRef<Record<string, HTMLInputElement | null>>({});
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const register = useCallback(
    (name: keyof T) => ({
      ref: (el: HTMLInputElement | null) => {
        // Store reference
        refs.current[name as string] = el;

        // Set initial value
        if (el && initialValues[name]) {
          el.value = String(initialValues[name]);
        }
      },
      name: name as string,
    }),
    [initialValues]
  );

  // Get all form values
  const getValues = useCallback((): Partial<T> => {
    const values = {} as T;
    Object.keys(refs.current).forEach((key) => {
      const input = refs.current[key];
      if (input) {
        values[key as keyof T] = input.value as T[keyof T];
      }
    });
    return values;
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async () => {
    const values = getValues();

    setIsSubmitting(true);
    try {
      await onSubmit(values as T);
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }

  }, [getValues, onSubmit]);

  const validate = useCallback(
    (
      validator: (values: Partial<T>) => FormErrors<T>
    ): FormErrors<RegisterRequest> => {
      const values = getValues();
      const errors: FormErrors<T> = validator(values);

      setErrors(errors);
      return errors;
    },
    [getValues]
  );

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    getValues,
    validate,
  };
}
