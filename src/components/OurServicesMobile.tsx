import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

function OurServices() {
  return (
    <div className='relative sm:hidden min-[330px]:h-[1570px] h-[1770px]'>
      <div className="    ml-3  text-[300px] text1 font-medium not-italic text-crimson-200 text-left comillas  mb-0 pb-0" id='comillas'>
        &#8216;&#8216;
      </div>
      <div className=' absolute top-[270px] font-extrabold w-full h-[71px]  text-5xl text-center  text-[#1F261F]'>
        OUR SERVICES
      </div>
      <div className=' absolute min-[330px]:top-[330px] top-[430px]  text-xl tracking-[-0.04em] text-justify left-5 right-5  h-[89px] '>
        Wether you initially need a company logo, video or the full works to
        launch the campaign of a new brand, we can advise and provide you with
        cost effective solutions.
      </div>
      <div className="absolute min-[330px]:top-[350px] top-[500px] xl:ml-[350px] ml-[150px]  text-[300px] text1 font-medium not-italic text-crimson-200 text-left comillas" id='comillas'>
        ”
      </div>
      <div className="absolute  min-[330px]:top-[660px] top-[830px]  text-xl tracking-[-0.04em] text-center h-[82px] left-5 right-5">
        Explore what we can do to help you achieve your marketing objectives and
        gain the reach and online visibility required to stand out among other
        brands.If you don&#180;t find a specific service listed, please let us know
        filling out our contact form.
      </div>
      <div className='absolute  top-[870px] max-[375px]:top-[920px] max-[330px]:top-[1100px] w-auto'>
        <Image
          className='object-cover'
          src={"/joven.png"}
          width={513}
          height={473}
          alt='red1'
        />
      </div>
      <div className=" absolute min-[330px]:top-[1280px] top-[1400px]  text-5xl font-extrabold text-center ">
        <p className="m-0">WHAT YOU</p>
        <p className="m-0">CAN DO</p>
        <p className="m-0">WITH SOCIALTY MEDIA</p>
      </div>
      <div className=" absolute min-[330px]:top-[1460px] top-[1630px]  mt-[40px] min-[330px]:ml-[100px] ml-[70px]  sm:w-[287px] w-[190px] h-[43px] text-white">
          <div className=' bg-[#5D388D] text-center w-full h-full rounded-[10px] p-[10px] hover:bg-[#FF4F5A]'
          >
            <Link
              className=' rounded-[10px] text-white'
              aria-label='Get Started'
              href='/contact'
            >
              Get Started
            </Link>
          </div>
        </div>
    </div>
  )
}

export default OurServices