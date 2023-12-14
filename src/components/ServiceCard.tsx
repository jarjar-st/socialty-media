"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface CardProps {
    serviceName: string;
    description: string;
    cardImage: string;
    overlayImage: string;

}

const ServiceCard: React.FC<CardProps> = ({ serviceName, description, cardImage, overlayImage }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const overlayRef = useRef(null);

    const handleOverlayClick = () => {
        setShowOverlay(true);
    };

    const handleOverlayClose = () => {
        setShowOverlay(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !(overlayRef.current as any).contains(event.target)) {
                setShowOverlay(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <div className='w-[172.76px] h-[274.89px]'>
            <div className=" rounded-lg overflow-hidden m-[10px] shadow-[-6.472326755523682px_17.863622665405273px_22px_rgba(151,_71,_255,_0.17),_-4.195026397705078px_11.57827377319336px_12.88px_rgba(151,_71,_255,_0.13),_-2.493044376373291px_6.880802631378174px_7.01px_rgba(151,_71,_255,_0.1),_-1.2944653034210205px_3.5727243423461914px_3.58px_rgba(151,_71,_255,_0.09),_-0.5273747444152832px_1.4555543661117554px_1.79px_rgba(151,_71,_255,_0.07),_-0.11985789984464645px_0.33080780506134033px_0.87px_rgba(151,_71,_255,_0.04)] w-[172.76px] h-[274.89px]">
                <div className="p-5 flex flex-col items-center">
                    <div className="top-[23.83px] left-[27.23px] w-[119.15px] h-[120px]">
                        <div className=" flex flex-col justify-center items-center h-full w-full rounded-[50%] box-border border-[1px] border-solid border-darkslateblue">

                            <Image
                                className="h-[85.62%] w-[87.5%] max-w-full overflow-hidden max-h-full object-cover"
                                width={918}
                                height={905}
                                alt="Web Development"
                                src={cardImage}
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center mt-[21.28px]'>
                            <div className="text-center text-[20px] text-darkslateblue w-[118px] h-[46px]">
                                <p className="m-0 leading-6 font-semibold">{serviceName}</p>
                            </div>
                            <button
                                className='text-white mt-[14.42px]  bg-crimson-100 rounded-[10px] w-[142.125px] h-[36.595px] text-[20px] font-normal hover:bg-[#FF4F5A]'
                                onClick={handleOverlayClick}
                            >
                                Check this
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showOverlay && (
                <div className=" fixed top-0 left-0 w-[100%] h-[100%] bg-crimson-200 flex justify-center items-center">
                    <div className="bg-white flex flex-col items-center text-center rounded-3xl w-[426px] h-[529px] p-0" ref={overlayRef}>
                        {/* Contenido del overlay */}
                        <div
                            className="w-[100%] h-[244px]   bg-no-repeat bg-[length:426px_244px] m-0 rounded-3xl"
                            style={{ background: `url(${overlayImage})`, backgroundSize: 'cover' }}>

                        </div>

                        <div className='w-[195px] h-[28px] mt-5'>
                            <p className='text-darkslateblue whitespace-nowrap text-[24px] font-semibold'>
                                {serviceName}
                            </p>
                        </div>
                        <div className=' w-[366px] h-[109px] mx-[30px] mt-[10px]'>
                            <p className=' text-justify text-[18px] text-[#1F261F] tracking-[-0.81px] leading-[22px]'>
                                {description}
                            </p>

                        </div>

                        <Link
                            href='/contact'
                            aria-label='Contact Us'
                            className='text-white  bg-crimson-100 rounded-[10px] w-[142.125px] h-[36.595px] text-[20px] pt-[2px] font-normal text-center mt-10 hover:bg-[#FF4F5A]'
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            )}



        </div>
    )
}

export default ServiceCard