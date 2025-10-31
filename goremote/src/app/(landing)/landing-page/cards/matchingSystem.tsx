import Background from "@/app/(landing)/landing-page/svgs/ai-assistant.svg";
import Image from "next/image";

import { motion } from "framer-motion";

type Props = {
  className?: string;
}

export default function MatchingSystemCard({ className }: Props) {
  const container_variants = {
    initial: {},
    hover: {},
  };

  const image_variants = {
    initial: {
      opacity: 0.5,
    },
    hover: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={`bg-neutral-700 border  h-fit border-neutral-400 hover:border-neutral-300 rounded-[42px]
    flex  justify-center items-center gap-12 p-7
    transition-all duration-300 ease-out ${className}`}
      variants={container_variants}
      initial="initial"
      whileHover="hover"
    >
      {/* text */}
      <div className="flex flex-col gap-3">
        <div className="sm:text-2xl text-xl font-normal text-neutral-50">
          Smart matching
        </div>
        <div className="sm:text-base text-sm font-light text-neutral-200 max-w-80">
          Our matching system considers your project context, company needs, and
          requirements, aligning them with the skills and experience of
          available freelancers to suggest the best-fit team.
        </div>
      </div>
      <motion.div className="grow" variants={image_variants}>
        <Image src={Background} alt={""} />
      </motion.div>
    </motion.div>
  );
}
