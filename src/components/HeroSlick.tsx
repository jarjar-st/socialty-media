"use client"
import React from 'react'
import Slider from "react-slick";

const HeroSlick= () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/home1.webp",
            title: "Trending Item",
            mainTitle: "Women's LATES FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/home2.webp",
            title: "Trending Accesories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        // {
        //     id: 2,
        //     img: "/banner-3.jpg",
        //     title: "Sale Offer",
        //     mainTitle: "NEW FASHION SUMMER SALE",
        //     price: "$30",
        // },
    ];

    return (
        <div>
            <div className=' w-3/4 m-auto bg-slate-900'>
                <Slider {...settings}>
                    
                    
                </Slider>
            </div>
        </div>
    )
}

export default HeroSlick