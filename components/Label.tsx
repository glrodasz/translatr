import React from "react";

interface LabelProps {
  count: number;
  maxCount: number;
}

const Label: React.FC<LabelProps> = ({ count, maxCount }) => {
  return (
    <div className="h-6 text-right mt-2 text-sm text-gray-500 dark:text-gray-300">
      {count} / {maxCount}
    </div>
  );
};

export default Label;
