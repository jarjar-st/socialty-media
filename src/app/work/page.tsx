import CustomButton from '@/components/CustomButton'
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='font-roboto w-full h-full'>
      <div className='w-full pt-[164px] h-[100vh] bg-[url("/workBanner.webp")] lg:bg-top bg-[top_-2rem_left_-28rem] sm:bg-[top_-2rem_left_-16rem] bg-cover bg-no-repeat'>
        <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
          <p>Making it work for</p>
          <p>your business</p>
        </div>
        <div className='px-10 md:pl-[5.438rem] pt-3 mt-5'>
          <CustomButton text='Contact us' href='/contact#contact-form' />
        </div>
        <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.10rem] md:leading-[2.063rem] md:text-[30px] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
          <p>Contact us and start boosting your</p>
          <p>presence on mobile devices today.</p>
        </div>
      </div>
      <div className='h-full flex flex-col mb-6 mt-20 justify-center items-center align-middle w-full'>
        <div className='w-full max-w-[1200px] bg-[#DDDDDD] h-auto p-6'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>MULTIMEDIA</h2>
              <p className='w-full lg:w-[450px] xl:w-[500px] text-base sm:text-lg xl:text-xl text-justify tracking-[-4.5%]'>
                Video and animation design providing impactful and creative visual solutions for advertising screens and social networks. With a focus on visual storytelling and aesthetics, our team of experts produces content that captures audiences attention and effectively communicates brand messages.
              </p>
            </div>
            {["/Gif Battery 250X250-1.gif", "/Gif Battery 250X250-2.gif"].map((src, index) => (
              <div key={index} className='w-full h-full lg:h-[295px]'>
                <Image
                  src={src}
                  alt={`Descripción del GIF ${index + 1}`}
                  layout="responsive"
                  width={291}
                  height={243}
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full max-w-[1200px] bg-red-200 h-auto p-6 mt-10 px-10 xl:px-14'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 w-full lg:w-[500px] lg:col-span-2 flex flex-col justify-end items-start text-left">
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-left'>MOBILE</h2>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-left'>ADVERTISING: </h2>
              <h3 className='text-3xl sm:text-4xl lg:text-2xl font-extrabold text-left'>Connect with Your Customers</h3>
              <h3 className='text-3xl sm:text-4xl lg:text-2xl font-extrabold text-left'>On Their Devices</h3>
              <p className='w-full mt-10 lg:w-[450px] xl:w-[500px] text-base sm:text-lg lg:text-xl text-justify tracking-[-4.5%] pt-5'>
              In a world where mobile devices dominate, it&apos;s crucial
              for your brand to be present where it matters most. Our mobile ads allow you to reach your audience effectively and precisely.
              </p>
              <div className='w-full mt-5 lg:w-[450px] xl:w-[500px] text-base sm:text-lg lg:text-xl text-justify tracking-[-4.5%] pt-5'>
                Key Benefits:
                <ul className='list-disc ml-10'>
                  <li>Reach your audience on their mobile devices</li>
                  <li>Target your audience with precision</li>
                  <li>Boost brand awareness and engagement</li>
                  <li>Drive traffic to your website or app</li>
                  <li>Measure and optimize your campaigns</li>
                </ul>
              </div>
              <p className='w-full mt-5 lg:w-[450px] xl:w-[500px] text-base sm:text-lg lg:text-xl font-bold tracking-[-4.5%] pt-5 text-center'>
              Available Formats: Banners, videos, native ads,
              and interstitials.
              </p>
            </div>
            <div className='col-span-2 lg:col-span-2'>
              <Image
                src="/mobileSocialty.webp"
                alt='banner en valla'
                layout='responsive'
                width={568}
                height={732}
                className='object-cover'
              />
            </div>
          </div>
        </div>
        <div className='w-full max-w-[1200px] bg-[#DDDDDD] pb-5 h-auto mt-10'>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <div className="w-full lg:w-1/2">
              <div className='w-full h-[400px] mt-10 relative'>
                <Image
                  src={"/Presentacion 1.webp"}
                  alt={`banner en valla`}
                  layout='fill'
                  objectFit='cover'
                  className='object-cover'
                />
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className='w-full h-[400px] mt-10 relative'>
                <Image
                  src="/3d.webp"
                  alt='banner en valla'
                  layout='fill'
                  objectFit='contain'
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;