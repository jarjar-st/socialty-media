import Image from 'next/image'

import React from 'react'

function OurServices() {
  return (
    <div className='relative xl:h-[800px] lg:h-[700px] sm:h-[700px] hidden sm:block'>
      <div className=" absolute -top-16 2xl:ml-[211px] xl:ml-[111px] ml-3  xl:text-[300px] text-[250px] text1 font-medium not-italic text-crimson-200 text-left comillas  mb-0 pb-0" id='comillas'>
        &#8216;&#8216;
      </div>
      <div className=' absolute xl:top-[178px] top-[150px] font-extrabold text-left inline-block w-[365px] h-[71px]  text-5xl 2xl:ml-[340px] xl:ml-60 lg:ml-24 ml-5 text-[#1F261F]'>
        OUR SERVICES
      </div>
      <div className='absolute xl:top-[249px] top-[210px] xl:text-2xl text-xl tracking-[-0.04em] text-justify inline-block xl:w-[522px] lg:w-[447px] w-[347px] h-[89px] 2xl:ml-[340px] xl:ml-60 lg:ml-24 ml-5'>
        Wether you initially need a company logo, video or the full works to
        launch the campaign of a new brand, we can advise and provide you with
        cost effective solutions.
      </div>
      <div className="absolute xl:top-[254px] top-[220px] xl:ml-[350px] lg:ml-[250px] ml-[150px] xl:text-[300px] text-[250px] text1 font-medium not-italic text-crimson-200 text-left comillas" id='comillas'>
        ”
      </div>
      <div className="absolute xl:top-[574px] top-[460px] 2xl:left-[318px] xl:left-[218px] lg:left-[96px] left-[20px]  xl:text-2xl text-xl tracking-[-0.04em] text-right inline-block xl:w-[547px] lg:w-[447px] w-[347px] h-[82px]">
        Explore what we can do to help you achieve your marketing objectives and
        gain the reach and online visibility required to stand out among other
        brands.If you don&#180;t find a specific service listed, please let us know
        filling out our contact form.
      </div>
      <div className=' bg-slate-900 absolute top-[57px] 2xl:left-[1100px] xl:left-[803px] lg:left-[583px] left-[393px] xl:w-[463px] xl:h-[473px] lg:w-[413px] w-[350px]'>
        <Image
          className='xl:w-[513px] xl:h-[473px] object-cover'
          src={"/chica-11.png"}
          width={513}
          height={473}
          alt='red1'
        />
      </div>
      <div className="absolute xl:top-[579px] top-[460px] 2xl:left-[1100px] xl:left-[803px] lg:left-[583px] left-[393px]  text-5xl font-extrabold text-left inline-block lg:w-[450px] h-[111px]">
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