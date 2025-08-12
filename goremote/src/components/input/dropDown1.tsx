import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDown1Props } from "@/types/dropdownProps";
import { ArrowDown01, ChevronDown } from "lucide-react";

export default function DropDown1({ trigger, label, items }: DropDown1Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-28 p-2 bg-surface-deep flex justify-between items-center border-1 border-[var(--color-text-muted)]  text-base text-muted rounded-sm">
        {trigger}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent  className="">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => {
          return <DropdownMenuItem className="" key={item}>{item}</DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
