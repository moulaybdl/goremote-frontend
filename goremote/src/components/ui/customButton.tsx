import { pre } from "framer-motion/client";
import { useEffect, useState } from "react";
import { text } from "stream/consumers";

type CustomButtonProps = {
  text?: string;
  icon?: string;
  icon_positions: "none" | "icon-only" | "left" | "right";
  style: "filled" | "outlined";
  size: "S" | "M";
  className?: string;
  onClick?: () => void;
};

export default function CustomButton({
  text,
  icon_positions = "none",
  style,
  size,
  className = "rounded-full",
  onClick = () => {},
}: CustomButtonProps) {
  const [classname, setClassName] = useState(className);

  const setStyle = () => {
    switch (style) {
      case "filled":
        setClassName(
          (prev) => `${prev} px-8 py-3 bg-primary-500 text-neutral-100`
        );
        break;

      case "outlined":
        setClassName(
          (prev) =>
            `${prev} px-8 py-3 bg-transparent border border-primary-500 text-primary-500`
        );
        break;

      default:
        break;
    }
  };

  const setSize = () => {
    switch (size) {
      case "M":
        setClassName((prev) => `${prev} text-base`);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setStyle();
    setSize();
  }, []);

  return (
    <div
      className={`${classname} w-full cursor-pointer select-none flex justify-center items-center`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
