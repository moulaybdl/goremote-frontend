"use client";

import Image from "next/image";
import Background from "@/public/login-background.png";
import Left from "@/public/login-left.svg";
import Right from "@/public/login-right.svg";
import { motion } from "framer-motion";
import RoleCard from "@/components/auth/RoleCard";

export default function ChooseRole() {
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image src={Left} alt={""} />
      </motion.div>
      <motion.div
        className="z-1000"
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <RoleCard />
      </motion.div>
      <motion.div
        className=""
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image src={Right} alt={""} />
      </motion.div>
    </div>
  );
}
