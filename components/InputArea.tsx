"use client";

import Textarea from "@/components/Textarea";
import Label from "@/components/Label";
import useTranslator from "@/hooks/useTranslator";

import { MAX_COUNT } from "@/utils/constants";

const InputArea = () => {
  const { inputText, translatedText, handleInputChange } = useTranslator();
  const characterCount = inputText.length;

  return (
    <>
      <Textarea
        placeholder="Enter your text here..."
        value={inputText}
        onChange={handleInputChange}
      />
      <Label count={characterCount} maxCount={MAX_COUNT} />
    </>
  );
};

export default InputArea;
