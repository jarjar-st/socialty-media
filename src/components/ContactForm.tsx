"use client"
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { FormEvent } from 'react'




function ContactForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [plan, setPlan] = useState('');



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>  {
        event.preventDefault();

        const formData = {
            fullName,
            email,
            phoneNumber,
            message,
            plan
        };
        console.log(`Aqui esta ALV ${formData}`);

        // try {
        //     await axios.post('/api/sendEmail', formData);
        //     alert('Email sent successfully');
        // } catch (error) {
        //     alert('Failed to send email');
        // }
    };
        

    return (
        <div className='xl:h-[800px] mb-6 mt-20'>

            <div className=' flex flex-row justify-center align-top lg:gap-12 gap-8'>


                <div className=' rounded-[10px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border sm:w-[549px] w-[350px] sm:h-[732px] h-[840px] border-[1px] border-solid border-dimgray'>
                    <div className='flex flex-col items-center justify-center'>

                        <div className="  text-[38px] tracking-[-0.04em] font-extrabold text-center  sm:w-[525px] h-[152px] mt-[24px] mb-[40px] sm:mb-0">
                            <p className="m-0">You are Awesome!</p>
                            <p className="m-0">Complete your quote here</p>
                        </div>
                        <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-left gap-[36px] sm:mb-[40px] mb-[110px] sm:ml-[50px]'>
                            <div className=' w-[256px] h-[52px] relative '>
                                <div className=' absolute top-[25px]  w-full'>
                                    <input value={fullName} onChange={(e) => setFullName(e.target.value)} className=' w-full  px-[10px] placeholder:text-[#585F58] placeholder:italic' placeholder='Write your full name' type="text" style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }} />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Full name
                                </label>
                            </div>
                            <div className=' w-[256px] h-[52px] relative '>
                                <div className=' absolute top-[25px] w-full'>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)}  className=' w-full px-[10px] placeholder:text-[#585F58] placeholder:italic' placeholder='We will send you information' type="email" style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }} />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Email
                                </label>
                            </div>
                            <div className=' w-[256px] h-[52px] relative '>
                                <div className=' absolute top-[25px] w-full'>
                                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  className=' w-full px-[10px] placeholder:text-[#585F58] placeholder:italic' placeholder='We will send you information' type="tel" style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }} />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Phone number
                                </label>
                            </div>
                            <div className=' sm:w-[298px] h-[102px] relative '>
                                <div className=' absolute top-[25px] w-full'>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}  className=' py-4 w-full px-[10px] placeholder:text-[#585F58] placeholder:italic' style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }} />
                                </div>
                                <label className='flex flex-col bg-white py-1 absolute top-0 left-3'>
                                    Leave us a message
                                </label>
                            </div>


                            <div className='  sm:w-[355px] h-[51px] w-[255px]'>
                                <label className='   bg-white py-[8px] ml-[16.5px] text-[17px]'>
                                    Plan
                                    <div className='flex pl-[10px] sm:pl-0 sm:flex-row flex-col  py-[10px] text-[17px] font-medium' style={{ borderRadius: '5px', borderWidth: '2px', borderColor: '#5D388D' }}>
                                        <div>
                                            <input  onChange={(e) => setPlan(e.target.value)}  className=' sm:ml-[5.7px] mr-[4px]' type="checkbox" name="Standard" value="Standard" />
                                            <label className=' mr-[25px]' >Standard</label>
                                        </div>
                                        <div>
                                            <input  onChange={(e) => setPlan(e.target.value)}  className='mr-[4px]' type="checkbox" name="Premiun" value="Premiun" />
                                            <label className=' mr-[25px]'>Premiun</label>

                                        </div>
                                        <div>
                                            <input  onChange={(e) => setPlan(e.target.value)}  className='mr-[4px]' type="checkbox" name="CustomMade" value="checkbox" />
                                            <label className=' mr-[5.7px]'>Custom Made</label>

                                        </div>
                                    </div>
                                </label>

                            </div>
                            <div className=" sm:w-[287px] w-[190px] h-[43px] text-white">
                            <button type="submit" className=' bg-[#F52432] w-full h-full rounded-[10px] hover:bg-[#FF4F5A]'>
                                Get information
                            </button>
                        </div>

                        </form>




                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactForm