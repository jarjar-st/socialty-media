import CustomButton from '@/components/CustomButton'
import Link from 'next/link'
import React from 'react'

function Plans() {
  return (
    <div className=' font-roboto w-full h-full '>
      <div className=' w-full pt-[164px] h-[100vh] bg-[url("/planes-plans.webp")] lg:bg-top bg-[top_-2rem_left_-28rem] sm:bg-[top_-2rem_left_-16rem]   bg-cover bg-no-repeat'>
        <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
          <p>Need a website</p>
          <p>but don´t know</p>
          <p>where to start?</p>
        </div>
        <div className='px-10 md:pl-[5.438rem] pt-3 '>
          <CustomButton text='Click Here' href='?' />
        </div>

      </div>
      <div className='xl:h-[800px] mb-6 mt-20'>
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
                <div className=' bg-[#F52432] text-center w-full h-full rounded-[10px] p-[10px] hover:bg-[#FF4F5A]'
                >
                  <Link
                    className='  px-[26.2%] sm:px-[90px] py-[10px] rounded-[10px] text-white'
                    href='/contact'
                  >
                    Get Started
                  </Link>
                </div>
                {/* <button className=' bg-[#F52432] w-full h-full rounded-[10px]'>
                  Get Started
                </button> */}
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
                    5 posts per week per account
                  </li>
                  <li className="mb-0">Advance website design</li>
                  <li className="mb-0">2 Social Media accounts per month</li>
                  <li className="mb-0">Account Set up</li>
                  <li className="mb-0">Basic content strategy</li>
                  <li className="mb-0">{`Analytics & reporting`}</li>
                  <li className="mb-0">{`$100 Social media ad spend (reach & interaction)`}</li>
                  <li>Comments and customer interaction included</li>
                </ul>
              </div>
              <div className=" sm:w-[287px] w-[190px] h-[43px] text-white">
                <div className=' bg-[#F52432] text-center w-full h-full rounded-[10px] p-[10px] hover:bg-[#FF4F5A]'
                >
                  <Link
                    className='  px-[26.2%] sm:px-[90px] py-[10px] rounded-[10px] text-white'
                    href='/contact'
                  >
                    Get Started
                  </Link>
                </div>
                {/* <button className=' bg-[#F52432] w-full h-full rounded-[10px]'>
                  Get Started
                </button> */}
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
                <li className="mb-0 text-[#1F261F] font-normal">
                    <p>Only need a website, just social media management or specific services?</p>
                    <p>Request a personalized quote for your individual needs.</p>
                    </li>
                </ul>
              </div>
              <div className=" sm:w-[287px] w-[190px] h-[43px] text-white">
                <div className=' bg-[#F52432] text-center w-full h-full rounded-[10px] p-[10px] hover:bg-[#FF4F5A]'
                >
                  <Link
                    className='  px-[26.2%] sm:px-[90px] py-[10px] rounded-[10px] text-white'
                    href='/contact'
                  >
                    Get Started
                  </Link>
                </div>
                {/* <button className=' bg-[#F52432] w-full h-full rounded-[10px]'>
                  Get Started
                </button> */}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Plans