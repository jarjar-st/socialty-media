import CustomButton from '@/components/CustomButton'
import Link from 'next/link'
import React from 'react'

function Work() {
    return (
        <div className=' font-roboto w-full h-full '>
            <div className=' w-full pt-[164px] h-[100vh] bg-[url("/workBanner.webp")] lg:bg-top bg-[top_-2rem_left_-28rem] sm:bg-[top_-2rem_left_-16rem]   bg-cover bg-no-repeat'>
                <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                    <p>Making it work for</p>
                    <p>your businness</p>
                </div>
                <div className='px-10 md:pl-[5.438rem] pt-3 '>
                    <CustomButton text='Contact us' href='?' />
                </div>

            </div>
            <div className='xl: h-full flex mb-6 mt-20 justify-center items-center align-middle bg-red-700 w-full '>
                <div className=' w-[1200px] bg-slate-400 h-[50%] px-2'>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="grid grid-cols-subgrid gap-4 col-span-4 bg-yellow-300">
                            <div className="col-start-1 bg-blue-500">
                                <h2 className=' text-5xl'>MULTIMEDIA</h2>
                                <p className=' lg:xl:w-[500px] xl:text-2xl  text-justify bg-green-400'>
                                    Video and animation design providing impactful
                                    and creative visual solutions for advertising screens 
                                    and social networks. With a focus on visual
                                    storytelling and aesthetics, our team of experts
                                    produces content that captures audiences
                                    attention and effectively communicates brand
                                    messages.
                                </p>
                            </div>
                        </div>
                        <div>01</div>
                        <div>05</div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work