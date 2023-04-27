import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
