// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { DropDown1Props } from "@/types/dropdownProps";
// import { ArrowDown01, ChevronDown } from "lucide-react";

// export default function DropDown2({ trigger, label, items }: DropDown1Props) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="bg-surface-deep flex justify-between items-center border-1 border-[var(--color-text-muted)]  text-base text-muted rounded-sm 
//       m-0 p-0 outline-none shadow-none appearance-none box-border px-6
//       h-11 min-w-56 w-full rounded-md border border-subtle font-lexend-medium text-secondary 
//       focus:border-glow focus:border
//       ">
//         {trigger}
//         <ChevronDown />
//       </DropdownMenuTrigger>
//       <DropdownMenuContent  className="">
//         <DropdownMenuLabel>{label}</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {items.map((item) => {
//           return <DropdownMenuItem className="" key={item}>{item}</DropdownMenuItem>;
//         })}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDown1Props } from "@/types/dropdownProps";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DropDown2({ trigger, label, items }: DropDown1Props) {
  const [selected, setSelected] = useState(trigger);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-surface-deep flex justify-between items-center border-1 border-[var(--color-text-muted)]  text-base text-muted rounded-sm 
      m-0 p-0 outline-none shadow-none appearance-none box-border px-6
      h-11 min-w-56 w-full  border-subtle font-lexend-medium 
      focus:border-glow focus:border
      ">
        {selected}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => {
          return (
            <DropdownMenuItem 
              onClick={() => setSelected(item)}
              className="" 
              key={item}
            >
              {item}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}