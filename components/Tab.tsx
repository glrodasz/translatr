import React from 'react';

interface TabProps {
  label: string;
  isSelected: boolean;
}

const Tab: React.FC<TabProps> = ({ label, isSelected }) => {
  return (
    <button
      className={`text-sm font-semibold text-gray-500 dark:text-gray-300 py-2 px-4 ${
        isSelected ? 'border-b-2 border-blue-500' : ''
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
