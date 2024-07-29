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
        <div className='px-10 md:pl-[5.438rem] pt-3'>
          <CustomButton text='Contact us' href='?' />
        </div>
      </div>
      <div className='h-full flex flex-col mb-6 mt-20 justify-center items-center align-middle w-full'>
        <div className='w-full max-w-[1200px] bg-[#DDDDDD] h-auto p-6'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 lg:col-span-4">
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>MULTIMEDIA</h2>
              <p className='w-full lg:w-[500px] text-base sm:text-lg lg:text-xl text-justify tracking-[-4.5%]'>
                Video and animation design providing impactful and creative visual solutions for advertising screens and social networks. With a focus on visual storytelling and aesthetics, our team of experts produces content that captures audiences attention and effectively communicates brand messages.
              </p>
            </div>
            {["/Gif Battery 250X250-1.gif", "/Gif Battery 250X250-2.gif", "/Gif Battery 250X250-1.gif", "/Gif Battery 250X250-2.gif"].map((src, index) => (
              <div key={index} className='w-full h-[295px]'>
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
        <div className='w-full max-w-[1200px] bg-red-200 h-auto p-6 mt-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 w-full lg:w-[500px] lg:col-span-2 flex flex-col justify-end items-start text-left">
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-left'>BILLBOARDS</h2>
              <p className='w-full lg:w-[500px] text-base sm:text-lg lg:text-xl text-justify tracking-[-4.5%] pt-5'>
                We create visually striking designs that capture your attention and leave a lasting impression on audiences, ensuring your message stands out and resonates with your audience.
              </p>
            </div>
            <div className='col-span-2 lg:col-span-2'>
              <Image
                src="/Mockup 1.png"
                alt="Descripción del GIF"
                layout="responsive"
                width={291}
                height={243}
                className='object-cover'
              />
            </div>
          </div>
          <div className='w-full h-auto mt-10'>
            <Image
              src="/Vaya banner copia 1.png"
              alt='banner en valla'
              layout='responsive'
              width={1157}
              height={468}
              className='object-cover'
            />
          </div>
        </div>
        <div className='w-full max-w-[1200px] bg-[#DDDDDD] h-auto p-6 mt-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>BANNERS</h2>
              {["/Cover 1.jpg", "/Cover 2.jpg"].map((src, index) => (
                <div key={index} className='w-full h-auto mt-10'>
                  <Image
                    src={src}
                    alt={`banner en valla ${index + 1}`}
                    layout='responsive'
                    width={569}
                    height={321}
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
            <div className="col-span-1 lg:col-span-2">
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>3D MODELING</h2>
              <div className='w-full h-auto mt-10'>
                <Image
                  src="/PRODUCTO SUNLIGHT.png"
                  alt='banner en valla'
                  layout='responsive'
                  width={569}
                  height={321}
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