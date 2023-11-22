"use client"
import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';

const images = [
 '/home1.webp',
 '/home2.webp',
];

const text = [
 'Need a website',
 'but don&apos;t know',
 'where to start?',
];

const Carousel = () => {
 const [index, setIndex] = useState(0);

 const fade = useSpring({
    config: config.stiff,
    from: { opacity: 0 },
    to: { opacity: 1 },
 });

 const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
 };

 const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
 };

 return (
    <div className="bg-white w-full h-[100vh]">
      <animated.div style={fade}>
        <img src={images[index]} alt="Carousel" className="w-full h-full object-cover" />
      </animated.div>
      <div className="text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px]">
        <p>{text[index]}</p>
      </div>
      <div className="px-10 md:pl-[5.438rem] pt-3 ">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
 );
};

export default Carousel;