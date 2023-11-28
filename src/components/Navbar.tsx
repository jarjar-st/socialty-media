"use client"
import { useState } from 'react';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Navbar() {
    const [activeLink, setActiveLink] = useState('Home');
    return (
        <nav className=' hidden sm:absolute w-full bg-transparent'>
            <div className=' mx-auto pl-[30px] flex'>
                <Link href={"/"} className='flex z-40 font-semibold pl-[2.5rem]'>
                    <Image 
                    src={"/LogoSocialtyMedia.webp"}
                    width={101}
                    height={111}
                    alt="Logo"
                    />
                </Link>
                
                <div className=' z-10  flex w-[430px] h-[23px] gap-10 mx-auto font-medium py-4 text-white items-center justify-center mt-[43px] text-[20px] ml-[324px] '>

                    <Link className={`navbar__link relative hover:underline decoration-[0.5px] ${activeLink === 'Home' ? 'font-bold' : ''}`} onClick={() => setActiveLink('Home')}  href={"/"}>
                        Home
                    </Link>
                    <Link className={`navbar__link relative hover:underline decoration-[0.5px] ${activeLink === 'About us' ? 'font-bold' : ''}`} onClick={() => setActiveLink('About us')}  href={"/about"}>
                        About us
                    </Link>
                    <Link className={`navbar__link relative hover:underline decoration-[0.5px] ${activeLink === 'Plans' ? 'font-bold' : ''}`} onClick={() => setActiveLink('Plans')}  href={"/plans"}>
                        Plans
                    </Link>
                    <Link className={`navbar__link relative hover:underline decoration-[0.5px] ${activeLink === 'Contact' ? 'font-bold' : ''}`} onClick={() => setActiveLink('Contact')}  href={"/contact"}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar