"use client"
import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton';

function Hero() {
    const slides = [
        {
            img: "/home1.webp",
            text: "Need a website",
            text1: "but don´t know?",
            text2: "where to start?",
        },
        {
            img: "/home2.webp",
            text: "Tired of the",
            text1: "rat race?",
            text2: " Get out now with our convenient <br> start up packages.",
        },
        {
            img: "/about-bg.webp",
            text: "Start your own",
            text1: "business now",
            text2: "We take care of your LOGO, SOCIAL MEDIA & WEBSITE <br> or you can choose from different plans that suit your <br> individual businness needs",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                // Move to the next slide
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setOpacity(1);
            }, 200); // same duration as your transition
        }, 8000);

        return () => {
            // Clear the interval when the component is unmounted
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div rel='preload'
        style={{
            backgroundImage: `url(${slides[currentIndex].img})`,
            transition: 'opacity 0.2s ease-in-out',
            opacity: opacity,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }} className={currentIndex == 1 ? 'w-full pt-[164px] h-[100vh] bg-no-repeat bg-cover bg-top overflow-hidden' : currentIndex == 2?'w-full pt-[164px] h-[100vh] bg-no-repeat bg-cover lg:bg-top sm:bg-[top_4rem_left_-8rem]  bg-[top_right_-17rem] overflow-hidden' :'w-full pt-[164px] h-[100vh] bg-no-repeat bg-cover overflow-hidden'}>
            {/* <Navbar />
            <MobNavbar /> */}
            <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                <p>{slides[currentIndex].text}</p>
                <p>{slides[currentIndex].text1}</p>
                <p className={currentIndex > 0 ? ' text-[24px] tracking-[-1.08px] leading-[25px]' : ''}>
                    {slides[currentIndex].text2.split('<br>').map((item, key) => {
                        return <React.Fragment key={key}>{item}{key !== slides[currentIndex].text2.split('<br>').length - 1 && <br />}</React.Fragment>
                    })}
                </p>
            </div>
            <div className='px-10 md:pl-[5.438rem] pt-3 '>
                <CustomButton text='Contact us' href=''/>
            </div>
        </div>
    )
}

export default Hero