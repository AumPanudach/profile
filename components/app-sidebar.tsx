"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  Home,
  User,
  Mail,
  GraduationCap,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  
  // Data for personal portfolio with active state based on current path
  const data = {
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/profile-image.jpg",
    },
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: Home,
        isActive: pathname === "/",
      },
      {
        title: "About Me",
        url: "/about",
        icon: User,
        isActive: pathname === "/about",
      },
      {
        title: "Education",
        url: "/education",
        icon: GraduationCap,
        isActive: pathname === "/education",
      },
      {
        title: "Contact",
        url: "/contact",
        icon: Mail,
        isActive: pathname === "/contact",
      },
    ],
  };

  return (
    <Sidebar 
      collapsible="icon"
      {...props}
    >
      <SidebarHeader className="flex items-center justify-between py-4 px-4">
        <ThemeToggle />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
