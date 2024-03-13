import React from "react";

const ReacipeIndex = ({alphaIndex}) => {
   const alpha = ['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   let num=0;
   return (
        <>
            {   
                alpha.map(item => {
                    return(
                    <div className=" bg-yellow-300 text-black text-2xl mx-3 my-3 w-[50px] text-center hover:scale-125 hover:shadow-2xl hover:font-extrabold hover:cursor-pointer " key={num++} onClick={()=>alphaIndex(item)}>
                        <h3>{item}</h3>
                    </div>)
                })
            }
        </>
    )
}
export default ReacipeIndex;