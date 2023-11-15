import React from "react";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";



const MobNavbar = () => {
  return (
    <nav className="lg:hidden fixed top-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8">
      <div className="flex justify-between text-[28px] py-2">
      <IoMenuOutline />
      <AiOutlineHome />
      <AiOutlineAppstore />

      </div>
    </nav>
  );
};

export default MobNavbar;