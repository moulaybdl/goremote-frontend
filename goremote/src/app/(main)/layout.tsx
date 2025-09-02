import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import CustomeSidebar from "@/components/ui/custome-sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={true}>
      <main className="flex w-full min-h-screen">
        <CustomeSidebar />
        <SidebarTrigger className="opacity-60 hover:opacity-100" />
        {children}
      </main>
    </SidebarProvider>
  );
}
