export type MiniFreelanceCardProps = {
  firstname: string;
  availability: boolean;
  experience_level: "Beginner" | "Intermediate" | "Expert";
};

type Category = {
  name: string;
  color: string;
};

type Skill = {
  name: string;
  color: string;
};

export type DetailedFreelancerCardProps = {
  name: string;
  description: string;
  icons: string[];
  experience_level: "Beginner" | "Intermediate" | "Expert";
  categories: Category[];
  skills: Skill[];
};

export type FreelancerAllInfoCard = {
  name: string;
  description: string;
  icons: string[];
  experience_level: "Beginner" | "Intermediate" | "Expert";
  categories: Category[];
  skills: Skill[];
};
