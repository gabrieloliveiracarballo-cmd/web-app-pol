import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-sketch-gray flex justify-center items-center p-0 sm:p-4">
      <div className="w-full h-screen sm:h-[850px] max-w-md bg-white sm:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col font-comic border-4 border-sketch-black">
        {children}
      </div>
    </div>
  );
};