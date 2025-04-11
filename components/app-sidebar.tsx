"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  GraduationCap,
  FileText,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
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
        title: "Projects",
        url: "/projects",
        icon: Briefcase,
        isActive: pathname === "/projects",
      },
      {
        title: "Skills",
        url: "/skills",
        icon: Code,
        isActive: pathname === "/skills",
      },
      {
        title: "Education",
        url: "/education",
        icon: GraduationCap,
        isActive: pathname === "/education",
      },
      {
        title: "Resume",
        url: "/resume",
        icon: FileText,
        isActive: pathname === "/resume",
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
