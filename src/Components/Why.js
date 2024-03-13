import React from 'react'
import Header from './Header'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import SimpleSlider from './SimpleSlider';
import Type from './Type';
function Why() {
    

     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>
    
    <Header/>
    <div className=' bg-black text-4xl font-semibold text-yellow-300 h-[200px] flex justify-center items-center'>

        <div>WHERE VARIETY COMES WITH NO COMPROMISE IN QUALITY </div>
    </div>
         
        
        
{

       
            
    SimpleSlider()

}

<div>
    {
        Type()
    }
</div>

    </>
  )
}

export default Why