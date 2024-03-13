import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Type() {
    return (
        <div className=' border-b-4 my-4 border-yellow-300 bg-black text-5xl font-bold text-center h-[250px] pt-10 text-pretty text-yellow-300'>

       
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "WE PROVIDE DETAILED PROCEDURE ALONG WITH VIDEOS",
        1000, 
        "WE PROVIDE RECIPES FROM ALL AROUND THE GLOBE",
        1000,

        "WE PROVIDE SEARCH FILTERS TO FIND YOUR FAVOURITE RECIPE",
        1000,

        "WE PROVIDE SEARCH BY FIRST ALPHABET FUNCTIONALITY",
        1000,

        "WE PROVIDE AN EXHAUSTIVE MENU OF ITEMS",
        1000,

        "WE PROVIDE EVERYTHING FOR FREE!!",
        1000,
        
      ]}
      
      speed={50}
      
      repeat={Infinity}
    />
     </div>
    );
}
 
export default Type;