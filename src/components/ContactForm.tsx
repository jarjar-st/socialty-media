"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormEvent } from 'react'
import { Button } from "@nextui-org/react";
import ReCAPTCHA from "react-google-recaptcha";




function ContactForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [plan, setPlan] = useState('');
    const [statusMessage, setStatusMessage] = useState('Get information');
    const [isLoading, setIsLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<String | null>(null);
    const [captchaSize, setCaptchaSize] = useState<'compact' | 'normal'>('normal');
    const [key, setKey] = useState(0);

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth <= 640) {
                setCaptchaSize('compact');
            } else {
                setCaptchaSize('normal');
            }
            setKey(prevKey => prevKey + 1);
        };

        // Check on mount and resize
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!captchaValue) {
            return;
        }

        const formData = {
            fullName,
            email,
            phoneNumber,
            message,
            plan,
            captcha: captchaValue
        };
        setIsLoading(true);
        try {
            const res = await axios.post('/api/sendEmail', formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(`Esta es la respuesta: ${res.data}!!!!!`);
            setStatusMessage('Email sent successfully');

        } catch (error) {
            setStatusMessage(`Failed to send email: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div className='xl:h-[860px] mb-6 mt-20'>

            <div className=' flex flex-row justify-center align-top lg:gap-12 gap-8'>


                <div className=' rounded-[10px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border sm:w-[549px] w-[350px] sm:h-[822px] h-[1030px] border-[1px] border-solid border-dimgray'>
                    <div className='flex flex-col items-center justify-center'>

                        <div className="  text-[38px] tracking-[-0.04em] font-extrabold text-center  sm:w-[525px] h-[152px] mt-[24px] mb-[40px] sm:mb-0">
                            <p className="m-0">You are Awesome!</p>
                            <p className="m-0">Complete your quote here</p>
                        </div>
                        <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-left gap-[36px] sm:mb-[40px] mb-[110px] sm:ml-[50px]'>
                            <div className=' w-[256px] h-[52px] relative '>
                                <div className=' absolute top-[25px]  w-full'>
                                    <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className=' w-full  px-[10px] placeholder:text-[#585F58] placeholder:italic' placeholder='Write your full name' type="text" style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }} />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Full name
                                </label>
                            </div>
                            <div className=' w-[256px] h-[52px] relative '>
                                <div className=' absolute top-[25px] w-full'>
                                    <input required value={email} onChange={(e) => setEmail(e.target.value)} className=' w-full px-[10px] placeholder:text-[#585F58] placeholder:italic' placeholder='We will send you information' type="email" style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }} />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Email
                                </label>
                            </div>
                            <div className=' w-[256px] h-[52px] relative '>
                                <div className=' absolute top-[25px] w-full'>
                                    <input
                                        value={phoneNumber}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            if (val.match(/^[0-9+]*$/)) {
                                                setPhoneNumber(val);
                                            }
                                        }}
                                        className=' w-full px-[10px] placeholder:text-[#585F58] placeholder:italic'
                                        placeholder='with your country code'
                                        type="tel"
                                        style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }}
                                    />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Phone number
                                </label>
                            </div>
                            <div className=' sm:w-[298px] h-[102px] relative '>
                                <div className=' absolute top-[25px] w-full'>
                                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className=' py-4 w-full px-[10px] placeholder:text-[#585F58] placeholder:italic' style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }} />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Leave us a message
                                </label>
                            </div>


                            <div aria-label="Plan" className='sm:w-[355px] h-[51px] w-[255px]'>
                                Plan
                                <div className='flex pl-[10px] sm:pl-0 sm:flex-row flex-col  py-[10px] text-[17px] font-medium' style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }}>
                                    <div>
                                        <input required onChange={(e) => setPlan(e.target.value)} className=' sm:ml-[5.7px] mr-[4px]' type="radio" name="plan" value="Standard" />
                                        <label className=' mr-[25px]' >Standard</label>
                                    </div>
                                    <div>
                                        <input required onChange={(e) => setPlan(e.target.value)} className='mr-[4px]' type="radio" name="plan" value="Premium" />
                                        <label className=' mr-[25px]'>Premiun</label>
                                    </div>
                                    <div>
                                        <input required onChange={(e) => setPlan(e.target.value)} className='mr-[4px]' type="radio" name="plan" value="CustomMade" />
                                        <label className=' mr-[5.7px]'>Custom Made</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" sm:w-[287px] w-[190px] h-[43px] max-[640px]:mt-[70px] max-[640px]:mx-auto text-white">
                                {/* <button type="submit" className=' bg-[#F52432] w-full h-full rounded-[10px] hover:bg-[#FF4F5A]'>
                                    Get information
                                </button> */}
                                <ReCAPTCHA
                                    key={key}
                                    size={captchaSize}
                                    sitekey="6LcqPnApAAAAAG3wraQPVuLz_FkIghjspa7XKeAi"
                                    onChange={(value) => setCaptchaValue(value)}
                                />
                                <Button type='submit' isLoading={isLoading} className=' bg-[#5D388D] w-full h-full rounded-[10px] text-white hover:bg-[#FF4F5A] mt-4' >
                                    {statusMessage}
                                </Button>
                            </div>
                            {/* <div className=' text-black font-extrabold text-lg'>
                                <p>
                                    {statusMessage}
                                </p>

                            </div> */}
                        </form>




                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactForm