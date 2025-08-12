"use client";

import { ButtonProps } from "@/types/buttons";
import { motion } from "motion/react";

export default function Button2({ title, rotationDir = "left" }: ButtonProps) {
  return (
    <motion.div
      className="bg-[var(--border-dark)] w-fit px-10 h-12 flex justify-center items-center rounded-[6px] font-lexend-medium border-2 border-[var(--color-surface-muted)] text-base elevation-2 text-primary-text cursor-pointer"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: rotationDir === "left" ? 8 : -8, scale: 1.1, backgroundColor: "var(--color-primary" }}
      whileTap={{ scale: 0.9, rotate:0 }}
    >
      {title}
    </motion.div>
  );
}
