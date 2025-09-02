"use client";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  LogOut,
  SidebarClose,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Moulay",
    url: "/moulay",
    icon: Home,
  },
  {
    title: "Chaima",
    url: "/chaima",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
      className={`${!open ? "cursor-pointer" : ""} `}
      
      onClick={() => {
        if (!open) {
          toggleSidebar();
        }
      }}
    >
      <SidebarHeader className="bg-neutral-700 rounded-lg">
        <SidebarMenu>
          <SidebarMenuItem className="">
            <span
              className={`text-neutral-100 flex ${
                state === "collapsed" ? "justify-center" : "justify-start "
              }  p-4 text-2xl`}
            >
              {state === "collapsed" ? "L" : "Logo"}
            </span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-neutral-700 ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-neutral-100 text-sm">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent className="z-1">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="rounded-full p-4 mb-2 hover:bg-[#212529]"
                    >
                      <a
                        href={item.url}
                        className={`flex  ${isActive ? "bg-primary-600" : ``}`}
                      >
                        <item.icon
                          className={`${isActive ? "text-primary-100" : "text-neutral-300"}`}
                        />
                        <span className={`${isActive ? "text-primary-100" : "text-neutral-300"}`}>
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-neutral-700 rounded-lg">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <a href="#" className="flex justify-center items-center gap-4">
                <span className="text-neutral-300 rotate-180">
                  <LogOut className="w-5 h-5" />
                </span>
                <span className="text-neutral-300">Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
