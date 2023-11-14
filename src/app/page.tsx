import Navbar from '@/components/Navbar'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

function Home() {
  return (
    <div className='bg-[url(/banner-1.jpg)] h-[100vh] bg-right bg-no-repeat'>
      <Navbar/>
      <div className='text-black text-6xl px-10 pt-12 font-bold'>
        <p>Need a website</p>
        <p>but dont&apos;t know</p>
        <p>where to start?</p>
        Link
      </div>
      <Link href={"/"} className={buttonVariants({ variant: "outline" })}>Click here</Link>
    </div>
  )
}

export default Home