import React from "react";
import { useNavigate } from "react-router-dom";
const MealItem=({data})=>{
    console.log(data);
    let navigate = useNavigate();
    return(
        <>  
            {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className=" hover:cursor-pointer w-[300px] p-2 text-xl text-yellow-300 font-medium font-sans text-left border-2 border-slate-700 rounded-xl mx-3 my-3 hover:bg-slate-700 hover:text-white hover:scale-105 hover:shadow-xl" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                        <img className="object-contain w-12/12" src={item.strMealThumb} alt="" />
                        <h3 >{item.strMeal}</h3>
                        
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;