import { RegistrationFormFieldProps } from "@/types/inputFieldProps";
import InputField3 from "../input/inputField3";
import {motion} from "framer-motion";



export type FormProps = {
  step_name: string
  fields: RegistrationFormFieldProps[];
};

export default function Form({ fields }: FormProps) {
  return (
    <motion.div className="flex  flex-wrap gap-7 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {fields.map((field, index) => {
        return (
          <div className="">
            <InputField3
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              helperText={field.helperText}
            />
          </div>
        );
      })}
    </motion.div>
  );
}
