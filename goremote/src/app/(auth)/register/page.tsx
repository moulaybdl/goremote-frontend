"use client";

import Form, { FormProps } from "@/components/auth/form";
import AuthGeneralCard from "@/components/auth/generalCard";
import Stepper from "@/components/auth/stepper";
import Button2 from "@/components/buttons/button2";
import Button4 from "@/components/buttons/button4";
import Button3 from "@/components/buttons/buttons3";
import { RegistrationFormFieldProps } from "@/types/inputFieldProps";
import { useState } from "react";

import {motion} from "framer-motion";

const fields: RegistrationFormFieldProps[] = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    helperText: "Your legal name as it appears on ID",
    required: true,
    value: "John Doe",
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    helperText: "We’ll never share your email with anyone else",
    required: true,
    value: "john.doe@example.com",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter a strong password",
    helperText: "At least 8 characters with a number and symbol",
    required: true,
    value: "P@ssw0rd123",
  },
  {
    label: "Country",
    type: "select",
    placeholder: "Select your country",
    options: ["Algeria", "United States", "Canada", "France"],
    required: true,
    value: "Algeria",
  },
];

const fields_2: RegistrationFormFieldProps[] = [
  {
    label: "Company name",
    type: "text",
    placeholder: "Enter your full name",
    helperText: "Your legal name as it appears on ID",
    required: true,
    value: "John Doe",
  },
  {
    label: "Phon number",
    type: "text",
    placeholder: "Enter your email",
    helperText: "We’ll never share your email with anyone else",
    required: true,
    value: "john.doe@example.com",
  },
];

const steps: FormProps[] = [
  {
    step_name: "Basic Info 1",
    fields: fields,
  },
  {
    step_name: "Basic Info 2",
    fields: fields_2,
  },
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="w-full flex justify-center items-center">
      <AuthGeneralCard>
        <div className="m-10 flex flex-col justify-center items-center w-4xl gap-20">
          {/* header */}
          <div className="text-3xl font-lexend text-white">
            Let’s setup your profile!
          </div>
          {/* stepper */}
          <Stepper
            steps={[
              "basic info",
              "basic info",
            ]}
            currentStep={currentStep}
          />
          {/* input fields */}
          {
            <div className="">
              <Form
                step_name={steps[currentStep].step_name}
                fields={steps[currentStep].fields}
              />
            </div>
          }
          {/* action buttons */}
          <div className="flex gap-4">
            <Button4
              title={"Previous"}
              onClick={() => {
                if (currentStep > 0) {
                  setCurrentStep(currentStep - 1);
                }
              }}
            />
            <Button3
              title={"Next"}
              onClick={() => {
                setCurrentStep(currentStep + 1);
              }}
            />
          </div>
        </div>
      </AuthGeneralCard>
    </div>
  );
}
