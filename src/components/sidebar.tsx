"use client";

import {
  Home,
  Layers2Icon,
  MenuIcon,
  Router,
  ShieldCheckIcon,
} from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

type Props = {};

const routes = [
  {
    href: "",
    label: "Home",
    icon: Home,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
];

const Sidebar = (props: Props) => {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];
  return (
    <div className="hidden md:block relative max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="flex flex-col p-2">
        {routes.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={buttonVariants({
              variant:
                activeRoute.href == item.href ? "sidebarActiveItem" : "sidebar",
            })}
          >
            <item.icon size={20} />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

export function MobileSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden border-separate bg-background">
      <div className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side={"left"}
          >
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={buttonVariants({
                    variant:
                      activeRoute.href == item.href
                        ? "sidebarActiveItem"
                        : "sidebar",
                  })}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
