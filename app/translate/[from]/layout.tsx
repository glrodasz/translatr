import { ReactNode } from "react";
import Link from "next/link";

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
          <Link href="/translate/detect/es">
            <Tab label="Detect Language" isSelected={from === "detect"} />
          </Link>
          <Link href="/translate/es/es">
            <Tab label="Spanish" isSelected={from === "es"} />
          </Link>
          <Link href="/translate/en/es">
            <Tab label="English" isSelected={from === "en"} />
          </Link>
          <Link href="/translate/sv/es">
            <Tab label="Swedish" isSelected={from === "sv"} />
          </Link>
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
