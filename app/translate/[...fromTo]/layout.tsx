"use client"

import { ReactNode } from "react";
import Link from "next/link";

import Tab from "@/components/Tab";
import Box from "@/components/Box";

import useTranslator from "@/hooks/useTranslator";
import InputArea from "@/components/InputArea";
import OutputArea from "@/components/OutputArea";

export default function Page({
  input,
  output,
  params,
}: {
  input: ReactNode;
  output: ReactNode;
  params: { fromTo: string[] };
}) {
  const { fromTo } = params;
  const [from, to] = fromTo

  const { inputText, translatedText, handleInputChange } = useTranslator();

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
        <InputArea inputText={inputText} handleInputChange={handleInputChange} />
      </Box>
      <Box>
        <div className="flex items-center space-x-4">
          <Link href="/translate/detect/es">
            <Tab label="Spanish" isSelected={to === "es"} />
          </Link>
          <Link href="/translate/detect/en">
            <Tab label="English" isSelected={to === "en"} />
          </Link>
          <Link href="/translate/detect/sv">
            <Tab label="Swedish" isSelected={to === "sv"} />
          </Link>
        </div>
        <OutputArea translatedText={translatedText} />
      </Box>
    </>
  );
}
