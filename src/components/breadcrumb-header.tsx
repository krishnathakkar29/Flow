"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";
import { MobileSidebar } from "./sidebar";

type Props = {};

const BreadcrumbHeader = (props: Props) => {
  const pathname = usePathname();
  const paths = pathname === "/" ? [""] : pathname.split("/");
  return (
    <div className="flex items-center justify-start">
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink className="capitalize" href={`/${item}`}>
                  {item == "" ? "Home" : item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;
