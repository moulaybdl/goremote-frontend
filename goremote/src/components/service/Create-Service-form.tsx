import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SimpleInput from "@/components/input/simpleInput";
import CustomButton from "@/components/ui/customButton";
import Image from "next/image";
import Background from "@/public/login-background.png";


type TimeUnit = "hours" | "days" | "weeks" | "months";

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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateServiceRequest) => void;
  errors: FormErrors<CreateServiceRequest>;
  register: (name: keyof CreateServiceRequest) => {
    ref: (el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null) => void;
    name: string;
  };
  categories: Array<{ id: string; name: string }>;
};

export default function CreateServiceForm({
  isOpen,
  onClose,
  onSubmit,
  errors,
  register,
  categories = [],
}: Props) {
  const [formData, setFormData] = useState<CreateServiceRequest>({
    service_name: "",
    description: "",
    category_id: "",
    price: 0,
    delivery_time: undefined,
    delivery_time_unit: undefined,
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
           <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onClick={onClose}
        >
          {/* Gradients */}
          <div className="login-circle-gradient-2 w-[170%] aspect-square rounded-full absolute z-5 bottom-[5px] mix-blend-hard-light opacity-50"></div>
          <div className="login-circle-gradient aspect-square w-full z-10 rounded-[50%] absolute bottom-[40%] mix-blend-hard-light opacity-50"></div>
          <div className="absolute bg-contain bg-no-repeat bg-center -top-[70%]">
            <Image
              src={Background}
              alt={"Background"}
              className="mix-blend-screen"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </motion.div>
        
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              className="w-full max-w-4xl p-10 flex flex-col justify-center gap-10 items-center bg-neutral-800 rounded-3xl border-2 border-neutral-700 shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="font-medium text-3xl text-neutral-100">
                  Create New Service
                </div>
                <div className="font-normal text-xl text-neutral-300">
                  Share your expertise with the world!
                </div>
              </div>

              {/* Content */}
              <div className="w-full flex flex-col justify-start items-start gap-8">
                {/* Service Name */}
                <div className="w-full">
                  <SimpleInput
                    label="Service Name"
                    value={""}
                    type="text"
                    {...register("service_name")}
                    error={errors.service_name}
                  />
                </div>

 

                {/* Description */}
                <div className="w-full flex flex-col gap-2">
                  <div className="font-normal text-base text-neutral-100 px-4">
                    Description
                  </div>
                  <textarea
                    {...register("description")}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none transition-colors"
                    rows={4}
                  />
                  {errors.description && (
                    <div className="px-4 text-error-300 flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M7.125 7.125L10.875 10.875M10.875 7.125L7.125 10.875M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>{errors.description}</div>
                    </div>
                  )}
                </div>

                {/* Category and Price Row */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  {/* Category */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="font-normal text-base text-neutral-100 px-4">
                      Category
                    </div>
                    <select
                      {...register("category_id")}
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    {errors.category_id && (
                      <div className="px-4 text-error-300 flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M7.125 7.125L10.875 10.875M10.875 7.125L7.125 10.875M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>{errors.category_id}</div>
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex-1">
                    <SimpleInput
                      label="Price ($)"
                      value=""
                      type="number"
                      {...register("price")}
                      error={errors.price}
                    />
                  </div>
                </div>

                {/* Delivery Time Row */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  {/* Delivery Time */}
                  <div className="flex-1">
                    <SimpleInput
                      label="Delivery Time (Optional)"
                      value=""
                      type="number"
                      {...register("delivery_time")}
                      error={errors.delivery_time}
                    />
                  </div>

                  {/* Delivery Time Unit */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="font-normal text-base text-neutral-100 px-4">
                      Time Unit
                    </div>
                    <select
                      {...register("delivery_time_unit")}
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select unit</option>
                      <option value="hours">Hours</option>
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                    </select>
                    {errors.delivery_time_unit && (
                      <div className="px-4 text-error-300 flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M7.125 7.125L10.875 10.875M10.875 7.125L7.125 10.875M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>{errors.delivery_time_unit}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>


              {/* Actions */}
              <div className="w-full flex flex-row justify-end items-end gap-4">
                <CustomButton
                  icon_positions="none"
                  style="outlined"
                  size="S"
                  text="Cancel"
                  onClick={onClose}
                />
                <CustomButton
                  style="filled"
                  size="S"
                  icon_positions="none"
                  text="Create Service"
                  onClick={handleSubmit}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// Example Page Component
export function CreateServicePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors<CreateServiceRequest>>({});

  const mockCategories = [
    { id: "1", name: "Design & Creative" },
    { id: "2", name: "Writing & Translation" },
    { id: "3", name: "Programming & Tech" },
    { id: "4", name: "Marketing" },
    { id: "5", name: "Video & Animation" },
  ];

  const register = (name: keyof CreateServiceRequest) => ({
    ref: () => {},
    name,
  });

  const handleSubmit = (data: CreateServiceRequest) => {
    console.log("Form submitted:", data);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      {/* Plus Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative w-16 h-16 bg-primary-500 hover:bg-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
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
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-neutral-300 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Create Service
        </span>
      </button>

      <CreateServiceForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        errors={errors}
        register={register}
        categories={mockCategories}
      />
    </div>
  );
}