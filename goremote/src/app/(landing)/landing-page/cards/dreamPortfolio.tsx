import Background_Light from "@/app/(landing)/landing-page/svgs/portfolio_light.svg";
import Background_Dark from "@/app/(landing)/landing-page/svgs/portfolio_dark.svg";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DreamPortfolioCard() {
  const container_variants = {
    initial: {},
    hover: {},
  };

  const light_variants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 100,
    },
  };

  const dark_variant = {
    initial: {
      opacity: 100,
    },
    hover: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="bg-neutral-700 border w-fit h-fit border-neutral-400 hover:border-neutral-300 rounded-[42px]
    flex flex-row justify-center items-center gap-5 p-7
    transition-all duration-300 ease-out"
      variants={container_variants}
      initial="initial"
      whileHover="hover"
    >
      {/* text */}
      <div className="flex flex-col gap-3">
        <div className="text-2xl font-normal text-neutral-50">
          Dream Portfolio
        </div>
        <div className="text-base font-light text-neutral-200 max-w-3xs">
          Our website lets you create a portfolio to showcase your skills and
          attract potential clients.
        </div>
      </div>
      <div className="grow relative">
        <div className="relative flex justify-center items-center">
          <motion.div className="absolute" variants={dark_variant}>
            <Image src={Background_Dark} alt={""} className="" />
          </motion.div>
          <motion.div className="" variants={light_variants}>
            <Image src={Background_Light} alt={""} className="" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
