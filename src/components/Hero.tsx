"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import MobNavbar from './MobNavbar';
import CustomButton from './CustomButton';

function Hero() {
    const slides = [
        {
            img: "/home1.webp",
            text: "Need a website but don&apos;t know where to start?"
        },
        {
            img: "/home2.webp",
            text: "Need a website but don&apos;t know where to start?"
        }
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
        }, 4000);

        return () => {
            // Clear the interval when the component is unmounted
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${slides[currentIndex].img})`,
            transition:'opacity 0.2s ease-in-out',
            opacity: opacity,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }} className=' w-full h-[100vh] bg-no-repeat bg-cover overflow-hidden'>
            <Navbar />
            <MobNavbar />
            <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px]'>
                <p>Need a website</p>
                <p>but don&apos;t know</p>
                <p>where to start?</p>
            </div>
            <div className='px-10 md:pl-[5.438rem] pt-3 '>
                <CustomButton text='Click Here' href='?' />
            </div>
        </div>
    )
}

export default Hero