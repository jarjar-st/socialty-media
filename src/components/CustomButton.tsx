import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
  text: string;
  href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, href }) => {
  return (
    <Link
      href='/contact#contact-form'
      aria-label='Contact Us'
      className="rounded-[0.625rem] bg-[#5D388D]  py-2 px-5 text-[#FFF] font-normal text-xl uppercase hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:bg-opacity-100"
    >
      {text}
    </Link>
  );
};

export default CustomButton;