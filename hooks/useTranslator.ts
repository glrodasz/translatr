import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const HALF_SECOND_IN_MS = 500;

const useTranslator = () => {
  const [inputText, setInputText] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const translateText = async (text: string) => {
    const response = await fetch("api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      const data = await response.json();
      setTranslatedText(data.translatedText);
    }
  };

  const debouncedTranslateText = useDebounce(translateText, HALF_SECOND_IN_MS);

  useEffect(() => {
    if (inputText) {
      debouncedTranslateText(inputText);
    }
  }, [inputText, debouncedTranslateText]);

  return { input: inputText, translatedText, handleInputChange };
};

export default useTranslator;
