import ContactForm from '@/components/ContactForm'
import CustomButton from '@/components/CustomButton'
import MobNavbar from '@/components/MobNavbar'
import Navbar from '@/components/Navbar'
import React from 'react'

function Contact() {
    return (
        <div className=' relative font-roboto w-full h-full '>
            <div className=' w-full h-[100vh] bg-[url("/contactImage.webp")] bg-cover bg-no-repeat bg-bottom'>
                <Navbar />
                <MobNavbar />
                <div className='text-white z-30 absolute text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px]'>
                    <p>Need a website</p>
                    <p>but don&apos;t know</p>
                    <p>where to start?</p>
                </div>
                <div className='px-10 md:pl-[5.438rem] pt-3 absolute top-[340px] z-30'>
                    <CustomButton text='Click Here' href='?' />
                </div>
                <div className=" w-[30.21%] absolute top-[0px] right-[59.72%] left-[0.07%] [background:linear-gradient(90deg,_rgba(93,_56,_141,_0.61)_68.17%,_rgba(217,_217,_217,_0))] h-[100vh]" />


            </div>
            <ContactForm/>

        </div>
    )
}

export default Contact