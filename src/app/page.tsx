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
      <div className='grid-cols-2 lg:flex'>
        <div className='relative w-full grid-cols-2'>
          <div className=' lg:pl-14 lg:justify-start  lg:items-start bg-green-500 ml-14'>
            <Image
              className='xl:w-[172px] xl:h-[332px] lg:w-[122px]'
              src={"/red1.png"}
              width={172}
              height={332}
              alt='red1'
            />
          </div>
          <div className='absolute lg:left-[170px] xl:top-[190px] lg:top-[140px] flex-shrink-0 xl:pl-0 bg-yellow-200 top-[200px] md:left-[120px] md:right-[120px] lg:right-0'>
            <h2 className='text-[#1F261F] xl:text-[40px] lg:text-4xl font-extrabold text-[40px]'>
              OUR SERVICES
            </h2>
            <div className='w-auto h-auto mt-3'>
              <p className='text-[#1F261F] text-justify xl:text-[22px] lg:text-[20px] leading-[1.2] tracking-[-1.08px] text-[20px]'>
                Wether you initially only need a company logo, video or the
                full works to launch the campaign of a new brand, we
                can advise and provide you with cost effective
                solutions.
              </p>
            </div>

          </div>
          <div className='absolute xl:top-[205px] lg:top-[180px] xl:pl-80 lg:pl-60 lg:justify-start  lg:items-start  top-[200px] ml-96 lg:ml-0'>
            <Image
              className='rotate-180 xl:w-[172px] lg:w-[122px]'
              src={"/red1.png"}
              width={172}
              height={332}
              alt='red1'
            />
          </div>
          <div className='absolute lg:top-[570px] w-auto h-auto mt-3  lg:left-[170px] bg-emerald-400 top-[460px] md:left-[120px] md:right-[120px] lg:right-0'>
            <p className='text-[#1F261F] lg:text-right xl:text-[22px] lg:text-[20px] leading-[1.2] tracking-[-1.08px] text-[20px] text-justify'>
            Explore what we can do to help you achieve your marketing objectives and gain the reach and online visibility 
            required to stand out among other brands.If you don&apos;t find a specific service listed, please let us know 
            filling out our contact form.
            </p>
          </div>


        </div>
        <div className='justify-center items-center w-full md:relative lg:static'>
          <div className='lg:mr-[124px]  lg:mt-[57px] lg:mb-[57px]  lg:ml-[33px] md:absolute md:top-72 lg:static lg:top-0'>
            <Image
              className='xl:w-[513px] xl:h-[473px]'
              src={"/joven.png"}
              width={513}
              height={473}
              alt='red1'
            />
          </div>
          <div className='w-auto h-auto ml-[33px] mt-[40px] mr-[194px]'>
            <p className='text-[#1F261F] xl:text-[40px] lg:text-4xl font-extrabold'>
              WHAT YOU CAN DO
            </p>
            <p className='text-[#1F261F] xl:text-[40px] lg:text-4xl font-extrabold my-2'>
              WITH SOCIALTY
            </p>
            <p className='text-[#1F261F] xl:text-[40px] lg:text-4xl font-extrabold'>
              MEDIA
            </p>
          </div>


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