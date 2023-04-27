import React from 'react';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <div className="h-6 text-right mt-2 text-sm text-gray-500 dark:text-gray-300">
      {text}
    </div>
  );
};

export default Label;
