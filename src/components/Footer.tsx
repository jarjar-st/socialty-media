import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className=' w-full h-[315px] [background:linear-gradient(90deg,_#f52432,_#853375_73.98%,_#5d388d)]'>
            <div className=' flex flex-row justify-between'>
                <div className=' w-[566px] h-[266px] bg-[url("/footer1.webp")] bg-cover ml-[-133px] mt-[49px] overflow-hidden'>
                </div>
                <div className=' w-[431px] h-[196px] flex flex-col justify-start items-center pt-[117px]'>
                    <div className=' w-[24px] h-[24px]'>
                        <Image
                            src={"/email-1-1@2x.webp"}
                            alt='Icono de Correo'
                            width={48}
                            height={48}
                        />
                    </div>
                    <div className=' w-[431px] h-[30px] text-[20px] text-center text-white font-normal tracking-[-0.9px]'>
                        hello@socialtymedia.com
                    </div>
                    <div className=' w-[431px] h-[30px] text-center text-white pt-[112px]'>
                        <Link
                            href={"#"}
                            className=' text-center text-[16px] tracking-[-0.72px]'
                        >
                            2023 All Rights Reserved. SocialtyMedia
                        </Link>

                    </div>
                </div>
                <div className='flow flex-col overflow-hidden'>
                    <div className='  mt-[-62px] mr-[-99px] w-[566px] h-[223px] bg-[url("/footer2.webp")] bg-cover '>
                    </div>
                    <div className='  ml-[195px] w-[130px] h-[50px] flex flex-row mt-[55px] gap-[30px]'>
                        <div>
                            <Image
                                src={"/facebookIcono.webp"}
                                alt='Icono de Correo'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div>
                            <Image
                                src={"/instagramIcono.webp"}
                                alt='Icono de Correo'
                                width={64}
                                height={64}
                            />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer