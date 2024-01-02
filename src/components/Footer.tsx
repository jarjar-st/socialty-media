
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    
    return (
        
        <div className=' w-full lg:h-[315px] h-[400px]  [background:linear-gradient(90deg,_#f52432,_#853375_73.98%,_#5d388d)]'>
            <div className=' flex flex-row justify-between'>
                <div className=' w-[566px] h-[266px] sm:bg-[url("/footer1.webp")] sm:bg-cover  xl:bg-[center_right_5rem] lg:bg-[center_left_-15rem] sm:bg-[center_left_-24rem] bg-no-repeat  mt-[49px]'>
                </div>
                <div className='  w-full  sm:w-[431px] h-[196px] flex flex-col justify-start items-center pt-[117px]'>
                    <div className=' w-[24px] h-[24px]'>
                        <Image
                            src={"/email-1-1@2x.webp"}
                            alt='Icono de Correo'
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className='  w-full sm:w-[431px] h-[30px] text-[20px] text-center text-white font-normal tracking-[-0.9px]'>
                        hello@socialtymedia.com
                    </div>
                    <div className=' flex flex-row mt-[40px] gap-8 lg:hidden'>
                        <div>
                            <Image
                                className='lg:hidden'
                                src={"/facebookIcono.webp"}
                                alt='Icono de Correo'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div>
                            <Image
                                className='lg:hidden'
                                src={"/instagramIcono.webp"}
                                alt='Icono de Correo'
                                width={64}
                                height={64}
                            />
                        </div>
                    </div>

                    <div className=' w-full sm:w-[431px] h-[30px] text-center text-white lg:pt-[112px] pt-[50px]'>
                        <Link
                            href={"/policy"}
                            className=' text-center text-[16px] tracking-[-0.72px]'
                        >
                            2023 All Rights Reserved. SocialtyMedia
                        </Link>

                    </div>
                </div>
                <div className='flow flex-col overflow-hidden'>
                    <div className='  mt-[-62px] mr-[-99px] w-[566px] h-[223px] sm:bg-[url("/footer2.webp")] sm:bg-cover '>
                    </div>
                    <div className='  ml-[195px] w-[130px] h-[50px] md:flex flex-row mt-[55px] gap-[30px] lg:relative xl:static hidden '>
                        <div>
                            <Link href={"https://www.facebook.com/profile.php?id=61555361484753"}>
                                <Image
                                    className=' lg:absolute lg:right-[180px] xl:static xl:right-0 hover:opacity-50 '
                                    src={"/facebookIcono.webp"}
                                    alt='Icono de facebook'
                                    width={64}
                                    height={64}
                                />
                            </Link>

                        </div>
                        <div>
                            <Link 
                            href={"https://www.instagram.com/socialtymedia/"}
                            target='_blank'
                            >
                                <Image
                                    className=' lg:absolute lg:right-[90px] xl:static xl:right-0 hover:opacity-50'
                                    src={"/instagramIcono.webp"}
                                    alt='Icono de instagram'
                                    width={64}
                                    height={64}
                                />
                            </Link>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer