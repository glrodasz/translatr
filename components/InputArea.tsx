import Textarea from "@/components/Textarea";
import Label from "@/components/Label";

import { MAX_COUNT } from "@/utils/constants";

const InputArea = ({
  inputText,
  handleInputChange,
}: {
  inputText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
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
