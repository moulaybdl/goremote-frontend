"use client";

import Form, { FormProps } from "@/components/auth/form";
import AuthGeneralCard from "@/components/auth/generalCard";
import Stepper from "@/components/auth/stepper";
import Button2 from "@/components/buttons/button2";
import Button4 from "@/components/buttons/button4";
import Button3 from "@/components/buttons/buttons3";
import { RegistrationFormFieldProps } from "@/types/inputFieldProps";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import InputWithHelper from "@/components/input/InputWithHelper";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/customButton";
import SimpleInput from "@/components/input/simpleInput";
import CheckBoxQuestion from "@/components/input/checkBoxQuestion";
import RadioQuestion from "@/components/input/radioButtonQuestion";
import InputButton from "@/components/input/InputButton";
import FreelancerRegisterStep1 from "./freelancer-step1";
import FreelancerRegisterStep2 from "./freelancer-step2";
import CompanyRegisterStep1 from "./company-step1";
import { Logger } from "@/util/Logger";
import CompanyRegisterStep2 from "./company-step2";

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
  // useEffect(() => {
  //   Logger.logError("Error Occured", "RegisterPage");
  // }, []);

  return (
    <div className="w-full flex justify-center items-center mt-15">
      {/* <FreelancerRegisterStep1 /> */}
      {/* <CompanyRegisterStep1 /> */}
      <CompanyRegisterStep2 />
      {/* <FreelancerRegisterStep2 /> */}
    </div>
  );
}
