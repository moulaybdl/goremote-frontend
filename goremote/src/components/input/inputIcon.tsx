import { Search } from "lucide-react";

export default function InputIcon() {
  return (
    <div className="flex flex-row justify-center items-center gap-2 bg-surface-deep rounded-[6px] border border-[var(--color-text-muted)] p-2">
      <div className="text-[var(--color-text-muted)]"><Search /></div>
      <input
        type="text"
        placeholder="Search"
        className="m-0 p-0 outline-none shadow-none appearance-none box-border grow
  h-8 min-w-48 w-full bg-surface-deep  text-sm font-lexend-normal text-secondary"
      ></input>
    </div>
  );
}
