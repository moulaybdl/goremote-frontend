"use client";

import { useEffect, useState } from "react";

import { addAttrValue, motion } from "framer-motion";

import FreelancerRegisterStep1 from "./freelancer-step1";
import FreelancerRegisterStep2 from "./freelancer-step2";
import CompanyRegisterStep1 from "./company-step1";
import CompanyRegisterStep2 from "./company-step2";
import { useForm, UseFormConfig } from "@/hooks/useForm";
import { RegisterRequest } from "@/types/auth";
import { FormErrors } from "@/types/api";
import RegistrationDone from "./regestrationDone";

export default function RegisterPage() {
  // manage form:
  const form = useForm({
    onSubmit: () => {},
  } as UseFormConfig<RegisterRequest>);

  useEffect(() => {
    console.log("errors from useEffect: ", form.errors);
    setErrors(form.errors);
  }, [form.errors]);

  // manage steps
  const [role, setRole] = useState<"freelancer" | "company">("freelancer");
  const [currentStep, setCurrentStep] = useState(0);

  // manage errors:
  const [errors, setErrors] = useState<FormErrors<RegisterRequest>>(
    {} as FormErrors<RegisterRequest>
  );

  const handleNextStep = () => {
    const max =
      (role === "freelancer" ? freelancerSteps.length : companySteps.length) -
      1;

    const err = form.validate(validator);

    if (currentStep < max && err && Object.keys(err).length === 0) {
      if (currentStep === max - 1) {
        // here make the API call:
        form.handleSubmit()
        // if user created, navigation to submission done page:

      } else {
        if (currentStep < max) {
          setCurrentStep((prev) => prev + 1);
        }
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const validator = (
    values: Partial<RegisterRequest>
  ): FormErrors<RegisterRequest> => {
    // validate user type
    const errors: FormErrors<RegisterRequest> = {};

    if (
      values.user_type !== undefined &&
      values.user_type !== "client" &&
      values.user_type !== "freelancer"
    ) {
      errors.user_type = "Invalid user type";
    }

    if (values.first_name !== undefined && values.first_name.trim() === "") {
      errors.first_name = "First name is required";
    }

    if (values.last_name !== undefined && values.last_name.trim() === "") {
      errors.last_name = "Last name is required";
    }

    // validate gender:
    if (values.gender !== undefined && !values.gender) {
      errors.gender = "Gender is required";
    }

    // validate email
    if (values.email !== undefined && !values.email) {
      errors.email = "Email is required";
    } else if (
      values.email !== undefined &&
      !/\S+@\S+\.\S+/.test(values.email)
    ) {
      errors.email = "Email is invalid";
    }

    // validate password
    if (values.password !== undefined && !values.password) {
      errors.password = "Password is required";
    } else if (values.password !== undefined && values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    // validate birthdate format: must be of format YYYY-MM-DD
    if (!values.birthdate) {
      errors.birthdate = "Birthdate is required";
    }

    if (values.birthdate !== undefined && values.birthdate) {
      const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!birthdateRegex.test(values.birthdate)) {
        errors.birthdate = "Birthdate must be in format YYYY-MM-DD";
      } else {
        // Additional validation to check if it's a valid date
        const [year, month, day] = values.birthdate.split("-").map(Number);
        const date = new Date(year, month - 1, day);

        if (
          date.getFullYear() !== year ||
          date.getMonth() !== month - 1 ||
          date.getDate() !== day
        ) {
          errors.birthdate = "Please enter a valid date";
        }
      }
    }

    // validate phone number to be 10 characters
    if (values.phone_number !== undefined && !values.phone_number) {
      errors.phone_number = "Phone number is required";
    }



    if (values.phone_number !== undefined && values.phone_number) {
      // Remove any non-digit characters for validation
      const digitsOnly = values.phone_number.replace(/\D/g, "");

      if (digitsOnly.length !== 10) {
        errors.phone_number = "Phone number must be exactly 10 digits";
      }
    }

    return errors;
  };

  const freelancerSteps = [
    <FreelancerRegisterStep1
      NextCallBack={handleNextStep}
      PreviousCallBack={handlePreviousStep}
      errors={errors}
      register={form.register}
    />,
    <FreelancerRegisterStep2
      NextCallBack={handleNextStep}
      PreviousCallBack={handlePreviousStep}
      errors={errors}
      register={form.register}
    />,
    <RegistrationDone />
  ];

  const companySteps = [
    <CompanyRegisterStep1
      NextCallBack={handleNextStep}
      PreviousCallBack={handlePreviousStep}
    />,
    <CompanyRegisterStep2
      NextCallBack={handleNextStep}
      PreviousCallBack={handlePreviousStep}
    />,
  ];

  return (
    <motion.div
      className="w-full flex justify-center items-center mt-15"
      layout
    >
      {role === "freelancer"
        ? freelancerSteps[currentStep]
        : companySteps[currentStep]}
    </motion.div>
  );
}
