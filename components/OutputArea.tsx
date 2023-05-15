"use client";

import Textarea from "@/components/Textarea";

const OutputArea = ({ translatedText = "" }: { translatedText?: string }) => {
  return (
    <>
      <Textarea
        placeholder="Translation will appear here..."
        value={translatedText}
        readOnly
      />
      <div className="h-6"></div>
    </>
  );
};

export default OutputArea;
