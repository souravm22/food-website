import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
var id="";
const Recipe = () => {
    const [item, setItem] = useState(); 
    const { recipeId } = useParams();
    if (recipeId !==" ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(res => res.json()).then(data => {
            setItem(data.meals[0]);  
        })
    }
    if(item){
      const strYoutube= item.strYoutube;
      const str=strYoutube.split("=");
      id=str[str.length-1];
    }
  

    return (
        <>
            {
                (!item) ? "" : <div className=" p-3 bg-black text-yellow-400 flex flex-col justify-center">
                    <div className=" w-6/12 mx-auto my-3">
                    <img className=" object-fill mx-auto" src={item.strMealThumb} alt="" />
                    </div>
                    <div className=" my-5 text-yellow-400 font-bold text-center flex flex-col justify-between items-center gap-2">
                        <h1 className=" uppercase text-5xl">{item.strMeal}</h1>
                        <h2 className=" uppercase text-2xl">{item.strArea} Food</h2>
                        <h3 className=" uppercase text-xl">Category: {item.strCategory}</h3>

                    </div>
                
                    <div className=" uppercase">
                        <div className=" bg-slate-900 text-pretty my-5 flex flex-col gap-4">
                            <h2 className=" font-medium text-2xl font-">INGREDIENTS</h2><br />
                            <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                            <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                            <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                            <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                            <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                            <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                            <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                            <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
                        </div>
                        <div className="my-20 bg-slate-900">
                            <h2 className=" font-semibold">Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">
                       
                            {/* setVurl(item.strYoutube)
                                //const str=item.strYoutube.split("=");
                                //state=str[str.length-1];
                                //state="hj"    */}
                       
                       
                        <iframe width="
                        100%" height="515" title="recipeVideo"
                            src={`https://www.youtube.com/embed/${id}`}>
                        </iframe>
                    </div>

                </div>
            }

        </>
    )
}
export default Recipe