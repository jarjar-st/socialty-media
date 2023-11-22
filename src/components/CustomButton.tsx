import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
  text: string;
  href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, href }) => {
  return (
    <Link 
    href={href}  
    className="rounded-[0.625rem] bg-[#F5F5F5] bg-opacity-80 py-2 px-5 text-[#F52432] font-normal text-xl uppercase"
    >
        {text}
    </Link>
  );
};

export default CustomButton;