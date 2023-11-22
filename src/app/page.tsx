import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import CustomButton from '@/components/CustomButton'
import Navbar from '@/components/Navbar'
import MobNavbar from "@/components/MobNavbar";
import Image from 'next/image'
import OurServices from '@/components/OurServices'
import OurServicesMobile from '@/components/OurServicesMobile'
import ServiceCard from '@/components/ServiceCard'
import Hero from '@/components/Hero'
import TestHero from '@/components/TestHero'


function Home() {
  return (
    <div className=' font-roboto w-full h-full '>
      {/* Primera Parte */}
      <div className=' w-full h-[100vh] '>
        <Hero/>      

        {/* <Navbar />
        <MobNavbar />
        <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px]'>
          <p>Need a website</p>
          <p>but don&apos;t know</p>
          <p>where to start?</p>
        </div>
        <div className='px-10 md:pl-[5.438rem] pt-3 '>
          <CustomButton text='Click Here' href='?' />
        </div> */}
      </div>
 

      {/* Nuestro Servicio */}
      <OurServices />
      <OurServicesMobile />

      {/* Banner Rojo */}
      <div className="bg-crimson-100 w-full h-[821px] flex justify-center items-center">
        <Image
          className="w-[252px] h-[244px] object-cover "
          width={504}
          height={488}
          alt="letras_blancas"
          src="/letras-blancas.png"
        />
      </div>

      {/* Tarjetas de Servicios */}
      <div className=' flex flex-wrap flex-col mb-[80px]  lg:mb-0 sm:flex-row gap-10 sm:items-start items-center sm:justify-center lg:h-[500px]'>
        <ServiceCard
          serviceName='Web Development'
          description='We develop and create custom website from scratch, fully optimized to help your business capture leads and increase sales. From simple informative websites to fully customized e-commerce websites there are no limits to your goals!'
          cardImage='/Iconos-Socialty-04.png'
          overlayImage='/webDevelopmentOverlay.webp'
        />
        <ServiceCard
          serviceName='Graphic Design'
          description='Your creative team designs eye catching and innovative designs that fit your target audience while developing brand recognition. From logos, social media posts to brochures and printed advisements, we strive to present effective and creative work with new and proven practices.'
          cardImage='/Iconos-Socialty-05.png'
          overlayImage='/graphicDesignOverlay.webp'
        />
        <ServiceCard
          serviceName='Social Media'
          description='Social media is our specialty! Get your business noticed on social media by targeting your specific target market, generating traffic to your profile and website while increasing your brand exposure, growth, and sales. We effectively analyze, manage, maintain, and grow your brand on all social media platforms.'
          cardImage='/Iconos-Socialty-03.png'
          overlayImage='/socialMediaOverlay.webp'
        />
        <ServiceCard
          serviceName='Add Ons'
          description='Paid advertising in Facebook, Instagram, Twitter, Linkedin, Google, Youtube.'
          cardImage='/Iconos-Socialty-06.png'
          overlayImage='/addOnsOverlay.webp'
        />
        <ServiceCard
          serviceName='Email Campaings'
          description='Strategic design and copywriting for your email campaigns. We help you define your audience, establish goals, build your client mailing lists, and a full report of results and recommendations.'
          cardImage='/Iconos-Socialty-07.png'
          overlayImage='/emailCampaingsOverlay.webp'
        />
      </div>

      {/* Seccion de Paquetes */}
      <div className='xl:h-[800px] mb-6'>
        <h3 className=' text-center font-extrabold text-[48px] text-[#1F261F] mb-[31px]'>
          START YOUR BUSINESS PACKAGES
        </h3>
        <div className=' flex flex-row justify-center align-top lg:gap-12 flex-wrap gap-8'>

          {/* Standard */}

          <div className=' rounded-[10px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border sm:w-[360px] w-[300px] h-[546px] border-[1px] border-solid border-dimgray'>
            <div className='flex flex-col justify-center items-center'>
              <div className=' w-[98px] h-[28px] text-center mt-[40px] text-[24px] font-extrabold text-[#5D388D]'>
                Standard
              </div>
              <div className=' mx-[33px] mt-[30px] leading-[25px] sm:w-[294px] w-[290px] h-[82px] text-center text-[20px] font-semibold tracking-[-0.9px] inline-block'>
                Best for new entrepreneurs needing a basic informative website.
              </div>
              <div className=' sm:w-[307px] w-[290px] h-[301px] text-left tracking-[-0.04em]'>
                <ul className="m-0 pl-6 list-disc">
                  <li className="mb-0">1 Social media account</li>
                  <li className="mb-0">Logo design (3 concepts / 1 revision)</li>
                  <li className="mb-0">
                    Basic informative Website Design up to 5 pages
                  </li>
                  <li className="mb-0">Account Set up</li>
                  <li className="mb-0">Basic content strategy</li>
                  <li className="mb-0">{`Monthly analytics & reporting`}</li>
                  <li className="mb-0">{`$25 Social media ad spend (reach & interaction)`}</li>
                  <li className="mb-0">Comments and customer interaction not included</li>
                </ul>
              </div>
              <div className=" sm:w-[287px] w-[190px] h-[43px] text-white">
                <button className=' bg-[#F52432] w-full h-full rounded-[10px]'>
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Premiun */}

          <div className=' rounded-[10px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border sm:w-[360px] w-[300px] h-[546px] border-[1px] border-solid border-dimgray'>
            <div className='flex flex-col justify-center items-center'>
              <div className=' w-[98px] h-[28px] text-center mt-[40px] text-[24px] font-extrabold text-[#5D388D]'>
                Premium
              </div>
              <div className=' mx-[33px] mt-[30px] leading-[25px] sm:w-[294px] w-[290px] h-[82px] text-center text-[20px] font-semibold tracking-[-0.9px] inline-block'>
                Best for entrepreneurs needing dynamic or ecommerce websites
              </div>
              <div className=' sm:w-[307px] w-[290px] h-[301px] text-left tracking-[-0.04em]'>
                <ul className="m-0 pl-6 list-disc">
                  <li className="mb-0">Logo Design (3 concepts- 3 revisions)</li>
                  <li className="mb-0">
                    5 posts per week per accountAdvance website design
                  </li>
                  <li className="mb-0">2 Social Media accounts per month</li>
                  <li className="mb-0">Account Set up</li>
                  <li className="mb-0">Basic content strategy</li>
                  <li className="mb-0">{`Analytics & reporting`}</li>
                  <li className="mb-0">{`$100 Social media ad spend (reach & interaction)`}</li>
                  <li>Comments and customer interaction included</li>
                </ul>
              </div>
              <div className=" sm:w-[287px] w-[190px] h-[43px] text-white">
                <button className=' bg-[#F52432] w-full h-full rounded-[10px]'>
                  Get Started
                </button>
              </div>
            </div>
          </div>


          {/* Custom Made */}

          <div className=' rounded-[10px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border sm:w-[360px] w-[300px] h-[546px] border-[1px] border-solid border-dimgray'>
            <div className='flex flex-col justify-center items-center'>
              <div className='  w-[151px] h-[28px] text-center mt-[40px] text-[24px] font-extrabold text-[#5D388D] whitespace-nowrap'>
                Custom Made
              </div>
              <div className=' mx-[33px] mt-[30px] leading-[25px] sm:w-[294px] w-[290px] h-[82px] text-center text-[20px] font-semibold tracking-[-0.9px] inline-block'>
                Best for new entrepreneurs needing a basic informative website.
              </div>
              <div className=' sm:w-[307px] w-[290px] h-[301px] text-left tracking-[-0.04em]'>
                <ul className="m-0 pl-6 list-disc">
                  <li className="mb-0">Only need a website, just social media management or specific services?Request a personalized quote for your individual needs.</li>
                </ul>
              </div>
              <div className=" sm:w-[287px] w-[190px] h-[43px] text-white">
                <button className=' bg-[#F52432] w-full h-full rounded-[10px]'>
                  Get Started
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Home