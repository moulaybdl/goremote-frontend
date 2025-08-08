import App from "next/app";
import { AppSidebar } from "./app-sidebar";
import { SidebarTrigger } from "./sidebar";

export default function CustomeSidebar() {
  return (
    <div className="top-0 left-0 h-screen relative">
      <AppSidebar />
    </div>
  );
}
