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
      <div className='grid-cols-2 flex'>
        <div className='relative bg-yellow-400 w-full grid-cols-2'>
          <div className='pl-28 justify-start  items-start'>
            <Image
              src={"/red1.png"}
              width={172}
              height={332}
              alt='red1'
            />
          </div>
          <div className='absolute top-[197px] bg-lime-900 pl-56'>
            <p className='text-[#1F261F] text-5xl'>
              OUR SERVICES
            </p>
            <p className='text-[#1F261F] text-justify text-2xl leading-normal tracking-[-1.08px]'>
            Wether you initially only need a company logo, video <br />
            or the full works to launch the campaign of a new <br /> 
            brand, we can advise and provide you with cost <br />
            effective solutions.
            </p>
          </div>
        </div>
        <div className='justify-center items-center bg-orange-500 w-full'>

        </div>
        {/* <div className='justify-start items-start pl-28 bg-slate-900 flex-shrink-0 p-0'>
          <Image
            src={"/red1.png"}
            width={172}
            height={332}
            alt='red1'
          />
          <div className='flex-shrink-0 pl-32 bg-zinc-700 p-0'>
            <p className='text-[#1F261F] text-5xl'>
              OUR SERVICES
            </p>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default Home