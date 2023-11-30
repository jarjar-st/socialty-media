import CustomButton from '@/components/CustomButton'
import MobNavbar from '@/components/MobNavbar'
import Navbar from '@/components/Navbar'
import React from 'react'

function About() {
    return (
        <div className=' relative font-roboto w-full h-full'>
            <div className='w-full min-[325px]:h-[1471px] h-[1672px]  pt-[84px] bg-[url("/about-bg.webp")] bg-cover bg-no-repeat'>
                {/* <Navbar />
                <MobNavbar /> */}
                <div className='text-white  text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px]'>
                    <p>Need a website</p>
                    <p>but don&apos;t know</p>
                    <p>where to start?</p>
                </div>
                <div className='px-10 md:pl-[5.438rem] pt-3 '>
                    <CustomButton text='Click Here' href='?' />
                </div>
                <div className=' flex sm:flex-row flex-col mt-[191px] lg:mt-[291px] min-[1440px]:ml-[200px] xl:ml-[100px] ml-[30px] items-center'>
                    <div className=" sm:static absolute left-2 xl:text-[300px] text-[250px]  font-medium not-italic text-crimson-200 text-left comillas  mb-0 pb-0" >
                        &#8216;&#8216;
                    </div>
                    <div className=' absolute sm:static top-[733px] font-extrabold text-left min-[1440px]:mr-[81px]   w-[262px] h-[71px] pb-[100px] text-6xl text-[#1F261F]'>
                        Meet Us
                    </div>
                    <div className=' flex-col'>
                        <div className=' absolute lg:top-[933px] top-[833px] md:max-lg:left-[120px] max-sm:left-10  w-[80%]   sm:w-[527px] sm:h-[316px] text-[#1F261F] text-justify text-[24px] tracking-[-1.08px] font-normal leading-[22px]'>
                            Us? Here at Socialty Media it&#180;s all about YOU. Your goals, your customers, and your business. We are your team!
                            A diverse, knowledgeable, and creative group who builds you personalized logos, websites, social media,
                            and advertising campaigns that fit your individual business goals. It&#180;s never easy to take the first step out of
                            the rat race but here at Socialty we take the first step for you. We specialize in beginners and startups wanting a
                            successful entry into their markets! We specialize in beginners and startups wanting a successful entry into their markets!
                        </div>
                        <div className=" absolute lg:top-[1086px] sm:top-[986px] min-[325px]:top-[1200px] top-[1300px] sm:ml-[413px] md:max-lg:left-[120px]  xl:text-[300px] text-[250px] text1 font-medium not-italic text-crimson-200 text-left comillas" id='comillas'>
                            ”
                        </div>
                    </div>

                </div>
                


            </div>

        </div>
    )
}

export default About