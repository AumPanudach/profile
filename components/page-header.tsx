"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

interface PageHeaderProps {
  breadcrumbItems?: {
    title: string;
    href: string;
    isCurrentPage?: boolean;
  }[];
}

export function PageHeader({ breadcrumbItems = [] }: PageHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbItems.length > 0 && (
                <BreadcrumbSeparator className="hidden md:inline" />
                )}
            {breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={index}>
                {item.isCurrentPage ? (
                  <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="md:hidden">
        <ThemeToggle />
      </div>
    </header>
  )
}