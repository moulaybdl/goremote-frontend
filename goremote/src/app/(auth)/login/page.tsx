"use client";

import Image from "next/image";

import Background from "@/public/login-background.png";
import Left from "@/public/login-left.svg";
import Right from "@/public/login-right.svg";

import LoginCard from "@/components/auth/loginCard";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
      <div className="w-full flex items-center justify-center gap-2">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image src={Left} alt={""} />
        </motion.div>
        <motion.div
          className="z-100"
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
          <LoginCard />
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
