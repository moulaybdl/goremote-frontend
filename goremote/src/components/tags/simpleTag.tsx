import { simpelTag } from "@/types/tags";

export function SimpleTag({ title, color }: simpelTag) {
  return (
    <div
      className={`p-1 w-fit  flex justify-center items-center ${color} px-2 text-sm text-neutral-600 rounded-full`}
    >
      {title}
    </div>
  );
}

export function AvailabilityTag({ available }: { available: boolean }) {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <div
        className={`w-[7px] h-[7px] rounded-full ${
          available ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
      <span className="text-neutral-200 text-[10px]">{available ? "Available" : "Not available"}</span>
    </div>
  );
}
