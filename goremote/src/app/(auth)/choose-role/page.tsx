"use client";

import Image from "next/image";
import Background from "@/public/login-background.png";
import Left from "@/public/login-left.svg";
import Right from "@/public/login-right.svg";
import { motion } from "framer-motion";
import RoleCard from "@/components/auth/RoleCard";

export default function ChooseRole() {
  return (
    <div className="w-full h-screen relative flex justify-center items-center overflow-hidden">
      {/* background all in aboslute mode */}
      <div className="login-circle-gradient-2 w-[170%] aspect-square rounded-full absolute z-5 bottom-[5px] mix-blend-lighten"></div>
      <div className="login-circle-gradient aspect-square w-full z-10  rounded-[50%] absolute bottom-[40%] mix-blend-overlay"></div>
      <div className="absolute bg-contain bg-no-repeat bg-center -top-[70%]">
        <Image
          src={Background}
          alt={"Login Background"}
          className="mix-blend-screen"
        />
      </div>

      {/* card */}
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
    </div>
  );
}
