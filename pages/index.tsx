import React from "react";
import Textarea from "@/components/Textarea";
import Tab from "@/components/Tab";
import Label from "@/components/Label";
import Box from "@/components/Box";
import Container from "@/components/Container";
import useTranslator from "@/hooks/useTranslator";

import { MAX_COUNT } from "@/utils/constants";

const Translator: React.FC = () => {
  const { inputText, translatedText, handleInputChange } = useTranslator();
  const characterCount = inputText.length;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Box>
            <div className="flex items-center space-x-4">
              <Tab label="Detect Language" isSelected />
              <Tab label="Spanish" isSelected={false} />
              <Tab label="English" isSelected={false} />
              <Tab label="Swedish" isSelected={false} />
              <span className="ml-auto">
                <i className="fas fa-exchange-alt text-gray-500 dark:text-gray-300"></i>
              </span>
            </div>
            <Textarea
              placeholder="Enter your text here..."
              value={inputText}
              onChange={handleInputChange}
            />
            <Label count={characterCount} maxCount={MAX_COUNT} />
          </Box>
          <Box>
            <div className="flex items-center space-x-4">
              <Tab label="Spanish" isSelected />
              <Tab label="English" isSelected={false} />
              <Tab label="Swedish" isSelected={false} />
            </div>
            <Textarea
              placeholder="Translation will appear here..."
              value={translatedText}
              readOnly
            />
            <div className="h-6"></div>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Translator;
