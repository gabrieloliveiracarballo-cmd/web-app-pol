import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let baseStyles = "px-6 py-3 rounded-full font-bold text-lg shadow-md transition-all font-comic border-2 tracking-wide transform active:scale-95";
  
  const variants = {
    primary: "bg-green-100 border-green-800 text-green-900 hover:bg-green-200",
    danger: "bg-red-100 border-red-800 text-red-900 hover:bg-red-200",
    ghost: "bg-transparent border-sketch-black text-sketch-black hover:bg-gray-100"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};