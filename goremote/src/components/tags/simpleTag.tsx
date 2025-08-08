import { simpelTag } from "@/types/tags";

export default function SimpleTag({ title, color }: simpelTag) {
  return <div className={`p-1 font-lexend-medium flex justify-center items-center ${color} px-2 text-sm text-[var(--color-background)] rounded-full`}>{title}</div>;
}
