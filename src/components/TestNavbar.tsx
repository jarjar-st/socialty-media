"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import Image from 'next/image'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About us",
    "Plans",
    "Contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" lg:hidden ">
      <Link href={"/"} className='flex z-40 font-semibold '>
        <Image
          src={"/LogoSocialtyMedia.webp"}
          width={101}
          height={111}
          alt="Logo"
        />
      </Link>
      <NavbarContent className=" ml-[50%] sm:ml-[70%]">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />

      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                 "foreground"
              }
              className="w-full"
              href={
                item === "Home"
                  ? "/"
                  : item === "About us"
                  ? "/about"
                  : item === "Plans"
                  ? "/plans"
                  : item === "Contact"
                  ? "/contact"
                  : ""
              
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}