"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import CustomButton from './CustomButton'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade(), Autoplay({ playOnInit: true, delay: 8000 })],
  )

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) 
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
        <div rel='preload'
        style={{
            backgroundImage: `url(/home1.webp)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }} className='w-full pt-[164px] h-[100vh] bg-no-repeat bg-cover overflow-hidden'>

            <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                <p>Need a website</p>
                <p>but don´t know?</p>
                <p className= ''>
                where to start? <br/>
                </p>
            </div>
            <div className='px-10 md:pl-[5.438rem] pt-3 '>
                <CustomButton text='Contact us' href=''/>
            </div>
        </div>
        </div>
        <div className="embla__slide">
        <div rel='preload'
        style={{
            backgroundImage: `url(/home2.webp)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }} className='w-full pt-[164px] h-[100vh] bg-no-repeat bg-cover bg-top overflow-hidden'>
            <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                <p>Tired of the</p>
                <p>rat race?</p>
                <p className='text-[24px] tracking-[-1.08px] leading-[25px]'>
                Get out now with our convenient <br/> start up packages. <br/>
                </p>
            </div>
            <div className='px-10 md:pl-[5.438rem] pt-3 '>
                <CustomButton text='Contact us' href=''/>
            </div>
        </div>
        </div>
        <div className="embla__slide">
        <div rel='preload'
        style={{
            backgroundImage: `url(/about-bg.webp)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }} className='w-full pt-[164px] h-[100vh] bg-no-repeat bg-cover lg:bg-top sm:bg-[top_4rem_left_-8rem]  bg-[top_right_-17rem] overflow-hidden'>

            <div className='text-white text-5xl px-10 md:pl-[5.438rem] pt-12 font-semibold tracking-[-0.18rem] md:leading-[4.063rem] md:text-[4rem] max-[320px]:text-[40px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
                <p>Start your own</p>
                <p>business now</p>
                <p className='text-[24px] tracking-[-1.08px] leading-[25px]'>
                We take care of your LOGO, SOCIAL MEDIA & WEBSITE <br/> or you can choose from different plans that suit your <br/> individual businness needs <br/>
                </p>
            </div>
            <div className='px-10 md:pl-[5.438rem] pt-3 '>
                <CustomButton text='Contact us' href=''/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
