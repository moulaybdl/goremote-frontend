"use client";

import { useState } from "react";
import CreateServiceForm from "@/components/service/Create-Service-form";

type TimeUnit = "hours" | "days" | "weeks";

type CreateServiceRequest = {
  service_name: string;
  description: string;
  category_id: string;
  price: number;
  delivery_time?: number;
  delivery_time_unit?: TimeUnit;
};

type FormErrors<T> = {
  [K in keyof T]?: string;
};

export default function FreelanceServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors<CreateServiceRequest>>({});

  const mockCategories = [
    { id: "1", name: "Design & Creative" },
    { id: "2", name: "Writing & Translation" },
    { id: "3", name: "Programming & Tech" },
    { id: "4", name: "Marketing" },
    { id: "5", name: "Video & Animation" },
    { id: "6", name: "Business & Consulting" },
  ];

  const register = (name: keyof CreateServiceRequest) => ({
    ref: () => {},
    name,
  });

  const handleSubmit = (data: CreateServiceRequest) => {
    console.log("Form submitted:", data);
    
    // Add your validation logic here
    const newErrors: FormErrors<CreateServiceRequest> = {};
    
    if (!data.service_name) {
      newErrors.service_name = "Service name is required";
    }
    
    if (!data.description) {
      newErrors.description = "Description is required";
    }
    
    if (!data.category_id) {
      newErrors.category_id = "Please select a category";
    }
    
    if (!data.price || data.price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // If validation passes, close modal and reset errors
    setErrors({});
    setIsOpen(false);
    
    // Add your API call here
    // Example: await createService(data);
  };

  return (
   <div className="w-full">
      <div className="flex justify-between items-center m-6">
        <h2 className="text-2xl font-semibold text-neutral-100 mr-96">My Services</h2>

        {/* Plus Button */}
        <button
          onClick={() => setIsOpen(true)}
          className=" ml-96 group relative px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          aria-label="Create New Service"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:rotate-90 transition-transform duration-300"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span className="text-white">Create Service</span>
        </button>
      </div>

      {/* Create Service Modal */}
      <CreateServiceForm
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setErrors({});
        }}
        onSubmit={handleSubmit}
        errors={errors}
        register={register}
        categories={mockCategories}
      />

      {/* Services list will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your service cards here */}
      </div>
    </div>
  );
}