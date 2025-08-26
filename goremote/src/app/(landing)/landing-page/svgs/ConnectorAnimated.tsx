import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { inflate } from "zlib";

interface ConnectorProps {
  startRef: React.RefObject<HTMLElement | null>;
  endRef: React.RefObject<HTMLElement | null>;
  radius?: number;
  percentage?: number;
  y_margin?: number;
  color: string;
}

export default function ConnectorAnimated({
  startRef,
  endRef,
  radius = 20,
  percentage = 0.4,
  y_margin = 0,
  color = "#FF1A00",
}: ConnectorProps) {
  const maskPathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const windowLength = 80;
  const [path, setPath] = useState("");
  const [horDir, setHorDir] = useState(1);

  // Build your path exactly like before
  useEffect(() => {
    if (!startRef.current || !endRef.current) return;

    const startRect = startRef.current.getBoundingClientRect();
    const endRect = endRef.current.getBoundingClientRect();

    const startX = startRect.left + startRect.width / 2 + window.scrollX;
    const startY = startRect.top + startRect.height / 2 + window.scrollY;
    const endX = endRect.left + endRect.width / 2 + window.scrollX;
    const endY = endRect.top + endRect.height / 2 + window.scrollY;

    const dx = endX - startX;
    const dy = endY - startY;

    const horDir = dx >= 0 ? 1 : -1;
    const verDir = dy >= 0 ? 1 : -1;

    setHorDir(horDir);

    const hLen = Math.abs(dx) * percentage;

    let d = `M ${startX} ${startY}`;
    const hEndX = startX + horDir * hLen;
    d += ` L ${hEndX} ${startY}`;

    const arc1EndX = hEndX + (horDir > 0 ? radius : -radius);
    const arc1EndY = startY + (verDir > 0 ? radius : -radius);
    d += ` A ${radius} ${radius} 0 0 ${
      horDir > 0 ? (verDir > 0 ? 1 : 0) : verDir > 0 ? 0 : 1
    } ${arc1EndX} ${arc1EndY}`;

    const vEndY = endY - verDir * radius + y_margin;
    d += ` L ${arc1EndX} ${vEndY}`;

    const arc2EndX = arc1EndX + (horDir > 0 ? radius : -radius);
    const arc2EndY = vEndY + (verDir > 0 ? radius : -radius);
    d += ` A ${radius} ${radius} 0 0 ${
      horDir > 0 ? (verDir > 0 ? 0 : 1) : verDir > 0 ? 1 : 0
    } ${arc2EndX} ${arc2EndY}`;

    d += ` L ${endX} ${endY + y_margin}`;
    setPath(d);
  }, [startRef, endRef, radius, percentage, y_margin]);

  // Get actual path length
  useEffect(() => {
    if (maskPathRef.current) {
      setPathLength(maskPathRef.current.getTotalLength());
    }
  }, [path]);

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
        {/* Gradient for visible window */}
        <linearGradient
          id="gradWindow"
          x1="0"
          y1="0"
          x2={windowLength}
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1B1E21" />
          <stop offset="100%" stopColor={`${color}`} />
        </linearGradient>

        {/* Mask with moving dash */}
        <mask id="windowMask">
          <motion.path
            ref={maskPathRef}
            d={path}
            stroke="white" // solid white mask
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${windowLength} ${pathLength}`}
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: horDir > 0 ? -pathLength : pathLength + 200 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
          />
        </mask>
      </defs>

      {/* Gradient path masked by moving window */}
      <path
        d={path}
        fill="none"
        stroke="url(#gradWindow)"
        strokeWidth="6"
        strokeLinecap="round"
        mask="url(#windowMask)"
      />
    </svg>
  );
}
