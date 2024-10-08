import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

function OurServices() {
  return (
    <div className='relative xl:h-[850px] lg:h-[750px] sm:h-[750px] hidden sm:block'>
      <div className=" absolute -top-16 2xl:ml-[211px] min-[1440px]:ml-[111px] xl:ml-[81px] ml-3  xl:text-[300px] text-[250px] text1 font-medium not-italic text-crimson-200 text-left comillas  mb-0 pb-0" id='comillas'>
        &#8216;&#8216;
      </div>
      <div className=' absolute xl:top-[178px] top-[150px] font-extrabold text-left inline-block w-[365px] h-[71px]  text-5xl 2xl:ml-[340px] min-[1440px]:ml-60 xl:ml-[210px] lg:ml-24 ml-5 text-[#1F261F]'>
        OUR SERVICES
      </div>
      <div className='absolute xl:top-[249px] top-[210px] xl:text-2xl text-xl tracking-[-0.04em] text-justify inline-block xl:w-[522px] lg:w-[447px] w-[347px] h-[89px] 2xl:ml-[340px] min-[1440px]:ml-60 xl:ml-[210px] lg:ml-24 ml-5'>
        Wether you initially need a company logo, video or the full works to
        launch the campaign of a new brand, we can advise and provide you with
        cost effective solutions.
      </div>
      <div className="absolute xl:top-[254px] top-[220px] min-[1440px]:ml-[350px] xl:ml-[320px] lg:ml-[250px] ml-[150px] xl:text-[300px] text-[250px] text1 font-medium not-italic text-crimson-200 text-left comillas" id='comillas'>
        ”
      </div>
      <div className="absolute xl:top-[574px]  top-[460px] 2xl:left-[318px] min-[1440px]:left-[218px] xl:left-[188px] lg:left-[96px] left-[20px]  xl:text-2xl text-xl tracking-[-0.04em] text-right inline-block xl:w-[547px] lg:w-[447px] w-[347px] h-[82px]">
        Explore what we can do to help you achieve your marketing objectives and
        gain the reach and online visibility required to stand out among other
        brands.If you don&#180;t find a specific service listed, please let us know
        filling out our contact form.
        <div className=" mt-[40px] xl:ml-[260px] lg:ml-[160px] ml-[50px] sm:w-[287px] w-[190px] h-[43px] text-white">
          <div className=' bg-[#5D388D] text-center w-full h-full rounded-[10px] pt-[6px] hover:bg-[#FF4F5A]'
          >
            <Link
              className=' rounded-[10px] text-white text-center    px-[29.2%]  py-[9px]  '
              aria-label='Get Started'
              href='/contact#contact-form'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className=' absolute top-[57px] 2xl:left-[1100px] min-[1440px]:left-[793px] bg-slate-900 xl:left-[763px] lg:left-[583px] left-[393px] xl:w-[463px] xl:h-[473px] lg:w-[413px] w-[350px]'>
        <Image
          className='xl:w-[513px] xl:h-[473px] object-cover'
          src={"/joven.png"}
          width={513}
          height={473}
          alt='red1'
        />
      </div>
      <div className="absolute xl:top-[579px] top-[460px]  2xl:left-[1100px] min-[1440px]:left-[793px] xl:left-[763px] lg:left-[583px] left-[393px]  text-5xl font-extrabold text-left inline-block lg:w-[440px] xl:w-[450px] h-[111px]">
        <p className="m-0 hidden lg:block">WHAT YOU CAN DO</p>
        <p className="m-0 lg:hidden">WHAT YOU</p>
        <p className="m-0 lg:hidden">CAN DO WITH</p>
        <p className="m-0 lg:hidden">SOCIALTY MEDIA</p>
        <p className="m-0 hidden lg:block">WITH SOCIALTY MEDIA</p>
      </div>
    </div>
  )
}

export default OurServices