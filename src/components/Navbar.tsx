import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <nav className='hidden lg:block w-full bg-transparent'>
            <div className='mx-auto pl-[30px] flex'>
                <Link href={"/"} className='flex z-40 font-semibold pl-[2.5rem]'>
                    <Image 
                    src={"/logo-11.png"}
                    width={101}
                    height={111}
                    alt="Logo"
                    />
                </Link>
                <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-white items-center justify-center'>

                    <Link className='navbar__link relative' href={"#"}>
                        Home
                    </Link>
                    <Link className='navbar__link relative' href={"/about"}>
                        About us
                    </Link>
                    <Link className='navbar__link relative' href={"#"}>
                        Plans
                    </Link>
                    <Link className='navbar__link relative' href={"#"}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar