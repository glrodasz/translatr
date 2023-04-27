import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded md:min-w-[300px]">
      {children}
    </div>
  );
};

export default Box;
