import CustomButton from '@/components/CustomButton'
import MobNavbar from '@/components/MobNavbar'
import Navbar from '@/components/Navbar'
import React from 'react'

function About() {
    return (
        <div className=' font-roboto w-full h-full'>
            <div className='w-full h-[1671px] bg-[url("/about-bg.webp")] bg-cover bg-no-repeat'>
                <Navbar />
                <MobNavbar />
                <div className='text-white  text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px]'>
                    <p>Need a website</p>
                    <p>but don&apos;t know</p>
                    <p>where to start?</p>
                </div>
                <div className='px-10 md:pl-[5.438rem] pt-3 '>
                    <CustomButton text='Click Here' href='?' />
                </div>
                <div className=' flex flex-row mt-[291px] items-center'>
                    <div className="  bg-green-600  xl:text-[300px] text-[250px]  font-medium not-italic text-crimson-200 text-left comillas  mb-0 pb-0" >
                        &#8216;&#8216;
                    </div>
                    <div className=' bg-yellow-400 font-extrabold text-left  w-[262px] h-[71px]  text-5xl text-[#1F261F]'>
                        Meet Us
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About