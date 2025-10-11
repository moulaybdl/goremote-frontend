import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TimeUnit = "hours" | "days" | "weeks" | "months";

type AnnouncementCategoryIO = {
  category_id: string;
  level: string;
};

type CreateAnnouncementRequest = {
  title: string;
  description: string;
  period?: number;
  period_unit?: TimeUnit;
  number_freelancers?: number;
  skills: string[];
  experiences: AnnouncementCategoryIO[];
};

type FormErrors<T> = {
  [K in keyof T]?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateAnnouncementRequest) => void;
  errors: FormErrors<CreateAnnouncementRequest>;
  availableSkills: Array<{ id: string; name: string }>;
  availableCategories: Array<{ id: string; name: string }>;
};

const experienceLevels = ["beginner", "intermediate", "expert"];

export default function CreateAnnouncementForm({
  isOpen,
  onClose,
  onSubmit,
  errors,
  availableSkills = [],
  availableCategories = [],
}: Props) {
  const [formData, setFormData] = useState<CreateAnnouncementRequest>({
    title: "",
    description: "",
    period: undefined,
    period_unit: undefined,
    number_freelancers: undefined,
    skills: [],
    experiences: [],
  });

  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleAddSkill = () => {
    if (selectedSkill && !formData.skills.includes(selectedSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, selectedSkill],
      });
      setSelectedSkill("");
    }
  };

  const handleRemoveSkill = (skillId: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((id) => id !== skillId),
    });
  };

  const handleAddExperience = () => {
    if (selectedCategory && selectedLevel) {
      const exists = formData.experiences.some(
        (exp) => exp.category_id === selectedCategory
      );
      if (!exists) {
        setFormData({
          ...formData,
          experiences: [
            ...formData.experiences,
            { category_id: selectedCategory, level: selectedLevel },
          ],
        });
        setSelectedCategory("");
        setSelectedLevel("");
      }
    }
  };

  const handleRemoveExperience = (categoryId: string) => {
    setFormData({
      ...formData,
      experiences: formData.experiences.filter(
        (exp) => exp.category_id !== categoryId
      ),
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const getSkillName = (id: string) => {
    return availableSkills.find((s) => s.id === id)?.name || id;
  };

  const getCategoryName = (id: string) => {
    return availableCategories.find((c) => c.id === id)?.name || id;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              className="w-full max-w-4xl p-10 flex flex-col justify-center gap-8 items-center bg-neutral-800 rounded-3xl border-2 border-neutral-700 shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="font-medium text-3xl text-neutral-100">
                  Create New Announcement
                </div>
                <div className="font-normal text-xl text-neutral-300">
                  Find the perfect freelancers for your project
                </div>
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-6">
                <div className="w-full flex flex-col gap-2">
                  <div className="font-normal text-base text-neutral-100 px-4">
                    Title
                  </div>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-5 py-3 bg-neutral-700 border border-neutral-600 rounded-full text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="Enter announcement title"
                  />
                  {errors.title && (
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
                      <div>{errors.title}</div>
                    </div>
                  )}
                </div>

                <div className="w-full flex flex-col gap-2">
                  <div className="font-normal text-base text-neutral-100 px-4">
                    Description
                  </div>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none transition-colors"
                    rows={4}
                    placeholder="Describe your project requirements"
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

                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="font-normal text-base text-neutral-100 px-4">
                      Period (Optional)
                    </div>
                    <input
                      type="number"
                      value={formData.period || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          period: e.target.value ? parseInt(e.target.value) : undefined,
                        })
                      }
                      className="w-full px-5 py-3 bg-neutral-700 border border-neutral-600 rounded-full text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="Duration"
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <div className="font-normal text-base text-neutral-100 px-4">
                      Period Unit
                    </div>
                    <select
                      value={formData.period_unit || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          period_unit: e.target.value as TimeUnit,
                        })
                      }
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select unit</option>
                      <option value="hours">Hours</option>
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                    </select>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <div className="font-normal text-base text-neutral-100 px-4">
                    Number of Freelancers (Optional)
                  </div>
                  <input
                    type="number"
                    value={formData.number_freelancers || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        number_freelancers: e.target.value
                          ? parseInt(e.target.value)
                          : undefined,
                      })
                    }
                    className="w-full px-5 py-3 bg-neutral-700 border border-neutral-600 rounded-full text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="How many freelancers do you need?"
                  />
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div className="font-normal text-base text-neutral-100 px-4">
                    Required Skills
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedSkill}
                      onChange={(e) => setSelectedSkill(e.target.value)}
                      className="flex-1 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select a skill</option>
                      {availableSkills.map((skill) => (
                        <option key={skill.id} value={skill.id}>
                          {skill.name}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={handleAddSkill}
                      className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors font-medium"
                    >
                      Add
                    </button>
                  </div>
                  {formData.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skillId) => (
                        <div
                          key={skillId}
                          className="flex items-center gap-2 px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-full"
                        >
                          <span className="text-neutral-100">
                            {getSkillName(skillId)}
                          </span>
                          <button
                            onClick={() => handleRemoveSkill(skillId)}
                            className="text-error-300 hover:text-error-200"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div className="font-normal text-base text-neutral-100 px-4">
                    Experience Requirements
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="flex-1 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select category</option>
                      {availableCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="flex-1 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select level</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={handleAddExperience}
                      className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors font-medium"
                    >
                      Add
                    </button>
                  </div>
                  {formData.experiences.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.experiences.map((exp) => (
                        <div
                          key={exp.category_id}
                          className="flex items-center gap-2 px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-full"
                        >
                          <span className="text-neutral-100">
                            {getCategoryName(exp.category_id)} -{" "}
                            {exp.level.charAt(0).toUpperCase() + exp.level.slice(1)}
                          </span>
                          <button
                            onClick={() => handleRemoveExperience(exp.category_id)}
                            className="text-error-300 hover:text-error-200"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-row justify-end items-end gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-neutral-600 text-neutral-100 rounded-lg hover:bg-neutral-700 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors font-medium"
                >
                  Create Announcement
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function CreateAnnouncementPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors<CreateAnnouncementRequest>>({});

  const mockSkills = [
    { id: "1", name: "React" },
    { id: "2", name: "TypeScript" },
    { id: "3", name: "Node.js" },
    { id: "4", name: "Python" },
    { id: "5", name: "UI/UX Design" },
  ];

  const mockCategories = [
    { id: "1", name: "Web Development" },
    { id: "2", name: "Mobile Development" },
    { id: "3", name: "Design" },
    { id: "4", name: "Marketing" },
    { id: "5", name: "Writing" },
  ];

  const handleSubmit = (data: CreateAnnouncementRequest) => {
    console.log("Announcement submitted:", data);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
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
          Create Announcement
        </span>
      </button>

      <CreateAnnouncementForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        errors={errors}
        availableSkills={mockSkills}
        availableCategories={mockCategories}
      />
    </div>
  );
}