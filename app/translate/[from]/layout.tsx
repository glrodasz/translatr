import { ReactNode } from "react";

import Box from "@/components/Box";
import Tab from "@/components/Tab";
import InputArea from "@/components/InputArea";

export default function Page({
  children,
  params,
}: {
  children: ReactNode;
  params: { from: string };
}) {
  const { from } = params;

  return (
    <>
      <Box>
        <div className="flex items-center space-x-4">
          <Tab label="Detect Language" isSelected={from === "detect"} />
          <Tab label="Spanish" isSelected={from === "es"} />
          <Tab label="English" isSelected={from === "en"} />
          <Tab label="Swedish" isSelected={from === "sv"} />
          <span className="ml-auto">
            <i className="fas fa-exchange-alt text-gray-500 dark:text-gray-300"></i>
          </span>
        </div>
        <InputArea inputText="" />
      </Box>
      {children}
    </>
  );
}
