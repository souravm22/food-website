import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className=" bg-black h-[350px] w-full py-5 px-10">
    <Slider {...settings}>
      <div >
        <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/beef.png"/>
      </div>
      <div >
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/chicken.png"/>
        
      </div>
      <div>
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/dessert.png"/>
      </div>
      <div>
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/lamb.png"/>

      </div>
      <div>
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/miscellaneous.png"/>

      </div>
      <div>
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/pasta.png"/>

        
      </div>
      <div>
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/pork.png"/>

        
      </div>
      <div>
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/seafood.png"/>

        
      </div>
      <div>
      <img className=" w-[400px] h-[300px]" src="https://www.themealdb.com/images/category/side.png"/>

        
      </div>
    </Slider>
    </div>
  );
}