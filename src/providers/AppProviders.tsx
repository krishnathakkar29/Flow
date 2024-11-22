import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      
    >
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
