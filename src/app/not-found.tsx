import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-lg ">
          Even best data on the internet gets lost , Don't Worry
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href={"/"} className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
