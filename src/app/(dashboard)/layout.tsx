import BreadcrumbHeader from "@/components/breadcrumb-header";
import Sidebar from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex justify-between items-center px-6 py-4 container h-[50px]">
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ThemeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
