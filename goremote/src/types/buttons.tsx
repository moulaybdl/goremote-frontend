export type ButtonProps = {
  title: string;
  rotationDir?: "left" | "right";
  radius?: string;
  onClick?: () => void;
  disabled?: boolean;
};
