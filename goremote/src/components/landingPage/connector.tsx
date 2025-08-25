import Image from "next/image";
import React, { RefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { reverse } from "dns";
import { cp } from "fs";

function getAbsoluteCenter(
  ref: RefObject<HTMLElement | null>
): { x: number; y: number } | null {
  const el = ref.current;
  if (!el) return null;

  const rect = el.getBoundingClientRect();
  let scrollLeft = 0;
  let scrollTop = 0;

  let parent: HTMLElement | null = el.parentElement;
  while (parent && parent !== document.body) {
    if (parent.scrollLeft) scrollLeft += parent.scrollLeft;
    if (parent.scrollTop) scrollTop += parent.scrollTop;
    parent = parent.parentElement;
  }

  scrollLeft += window.scrollX;
  scrollTop += window.scrollY;

  return {
    x: rect.left + scrollLeft + rect.width / 2,
    y: rect.top + scrollTop + rect.height / 2,
  };
}

interface ConnectorProps {
  startRef: React.RefObject<HTMLElement | null>;
  endRef: React.RefObject<HTMLElement | null>;
  radius?: number; // arc radius
  percentage?: number;
  y_margin?: number;
  color?: string | undefined;
}

const Connector: React.FC<ConnectorProps> = ({
  startRef,
  endRef,
  radius = 20,
  percentage = 0.4,
  y_margin = 0,
  color,
}) => {
  const [path, setPath] = useState("");
  const [vertDir, setVertDir] = useState(1);
  const [horDir, setHorDir] = useState(1);

  useEffect(() => {
    if (!startRef.current || !endRef.current) return;

    // --- Get bounding boxes ---
    const startBox = startRef.current.getBoundingClientRect();
    const endBox = endRef.current.getBoundingClientRect();

    const start = getAbsoluteCenter(startRef);
    const end = getAbsoluteCenter(endRef);

    const startX = start?.x;
    const startY = start?.y;
    const endX = end?.x;
    const endY = end?.y;

    if (startX === undefined || startY === undefined) return;
    if (endX === undefined || endY === undefined) return;

    // --- Distances ---
    const dx = endX - startX;
    const dy = endY - startY;

    const horizontalDir = dx >= 0 ? 1 : -1; // 1 = going right, -1 = going left
    const verticalDir = dy >= 0 ? 1 : -1; // 1 = going down, -1 = going up

    setVertDir(verticalDir);
    setHorDir(horizontalDir);

    // --- First horizontal length (60% of |dx| this time for symmetry) ---
    const hLength = Math.abs(dx) * percentage;

    // --- Path building ---
    let d = `M ${startX} ${startY}`; // start at center

    // 1. Horizontal line
    const hEndX = startX + horizontalDir * hLength;
    d += ` L ${hEndX} ${startY}`;

    // 2. First arc (horizontal -> vertical)
    const arc1EndX = hEndX + (horizontalDir > 0 ? radius : -radius);
    const arc1EndY = startY + (verticalDir > 0 ? radius : -radius);
    d += ` A ${radius} ${radius} 0 0 ${
      horizontalDir > 0 ? (verticalDir > 0 ? 1 : 0) : verticalDir > 0 ? 0 : 1
    } ${arc1EndX} ${arc1EndY}`;

    // 3. Vertical line (towards endY, stop radius away)
    const vEndY = endY - verticalDir * radius + y_margin;
    d += ` L ${arc1EndX} ${vEndY}`;

    // 4. Second arc (vertical -> horizontal)
    const arc2EndX = arc1EndX + (horizontalDir > 0 ? radius : -radius);
    const arc2EndY = vEndY + (verticalDir > 0 ? radius : -radius);
    d += ` A ${radius} ${radius} 0 0 ${
      horizontalDir > 0 ? (verticalDir > 0 ? 0 : 1) : verticalDir > 0 ? 1 : 0
    } ${arc2EndX} ${arc2EndY}`;

    // 5. Horizontal line to end center
    d += ` L ${endX} ${endY + y_margin}`;

    setPath(d);
  }, [startRef, endRef, radius]);

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="4"
            floodColor="black"
            floodOpacity="0.25"
          />
        </filter>
      </defs>

      <path
        d={path}
        fill="none"
        stroke="#1C1F23"
        strokeWidth={3}
        filter="url(#shadow)"
      />
      {/* Animated glowing path */}
      <motion.path
        d={path}
        stroke="url(#glowGradient)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="100 300"
        initial={{
          strokeDashoffset: 0,
          // opacity: 0.6
        }}
        animate={{
          strokeDashoffset: horDir > 0 ? -400 : 400, // moves along path
          // opacity: [0.4, 1, 0.4], // pulse
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      />

      {/* Gradient for glow */}
      <defs>
        <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1B1E21" stopOpacity="0" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Connector;
