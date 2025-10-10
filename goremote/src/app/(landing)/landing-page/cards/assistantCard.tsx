import Background_dark from "@/app/(landing)/landing-page/svgs/chat_dark.svg";
import Background_light from "@/app/(landing)/landing-page/svgs/chat_light.svg";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AssistantCard() {
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

  const cursor1_variant = {
    initial: {
      bottom: "0%",
      right: "20%",
    },
    hover: {
      bottom: "15%",
      right: "60%",
    },
  };

  const svg_variants = {
    initial: {
      fill: "#868e96", // Red color
      opacity: 0.5,
    },
    hover: {
      fill: "#FFC800", // Blue color
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="bg-neutral-700 border w-fit h-fit border-neutral-400 hover:border-neutral-300  rounded-[42px]
    flex flex-col justify-center items-center
    relative
    transition-all duration-300 ease-out"
      variants={container_variants}
      initial="initial"
      whileHover="hover"
    >
      {/* image */}
      <div className="">
        <div className="relative flex justify-center items-center">
          <motion.div className="absolute" variants={dark_variant}>
            <Image src={Background_dark} alt={""} className="" />
          </motion.div>
          <motion.div className="" variants={light_variants}>
            <Image src={Background_light} alt={""} className="" />
          </motion.div>
          {/* cursor */}
          <motion.div className={`absolute -rotate-70`} variants={cursor1_variant}>
            <motion.svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svg_variants}
            >
              <motion.path
                d="M9.87003 2.09337L10.2281 12.2784C10.2378 12.5494 10.173 12.8171 10.0427 13.0448C9.91243 13.2725 9.72301 13.4491 9.50043 13.5503C9.27785 13.6515 9.03303 13.6723 8.79956 13.61C8.56608 13.5476 8.3554 13.4051 8.19641 13.202L6.5314 11.0983C6.29004 10.7931 5.98941 10.5553 5.6531 10.4035C5.31678 10.2517 4.95393 10.1901 4.59301 10.2235L2.10633 10.4565C1.86741 10.479 1.62814 10.4179 1.42097 10.2815C1.2138 10.1451 1.04876 9.93995 0.948221 9.69389C0.847683 9.44783 0.816517 9.17277 0.85895 8.906C0.901383 8.63924 1.01536 8.39369 1.18543 8.20264L7.58652 1.06291C7.77211 0.855383 8.00725 0.713598 8.26308 0.654948C8.51891 0.596298 8.78433 0.623333 9.02677 0.732737C9.26921 0.842142 9.47814 1.02916 9.62793 1.27085C9.77772 1.51254 9.86186 1.79841 9.87003 2.09337Z"
                variants={svg_variants}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-col max-w-[442px] p-5 pt-0">
        <div className="text-2xl font-normal text-neutral-50">
          AI Assistance
        </div>
        <div className="text-base font-light text-neutral-200">
          An AI assistant that refines vague technical ideas by asking
          clarifying questions, then suggests a tailored team of freelancers to
          build your project.
        </div>
      </div>
    </motion.div>
  );
}
