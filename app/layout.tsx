import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";


export const metadata: Metadata = {
  title: "John Doe | Portfolio",
  description: "Personal portfolio of John Doe, Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider><AppSidebar/><SidebarInset>{children}</SidebarInset></SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
