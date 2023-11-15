import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import CustomButton from '@/components/CustomButton'
import Navbar from '@/components/Navbar'
import MobNavbar from "@/components/MobNavbar";
import Image from 'next/image'


function Home() {
  return (
    <div>
      {/* Primera Parte */}
      <div className='bg-[url(/LíneaGráfica_Actual-101.webp)] w-[100vw] h-[100vh] bg-no-repeat bg-cover'>
        <Navbar />
        <MobNavbar />
        <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-medium tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px]'>
          <p>Need a website</p>
          <p>but don&apos;t know</p>
          <p>where to start?</p>
        </div>
        <div className='px-10 md:pl-[5.438rem] pt-3'>
          <CustomButton text='Click Here' href='?' />
        </div>
      </div>
        {/* Nuestro Servicio */}
      <div>
        <div className='flex justify-start items-start pl-28'>
          <Image
          src={"/red1.png"}
          width={172}
          height={332}
          alt='red1'
          />
        </div>
      </div>
    </div>

  )
}

export default Home