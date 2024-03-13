import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
import Test from "./Test";
import Shimmer from "./Shimmer";
import Header from "./Header";
import SimpleSlider from "./SimpleSlider";
import Type from "./Type";
const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(true);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=p");
    const [emp, setEmp] = useState(true);
   function checker(obj){
    return obj ===null;
   }

   async function fetchData(){
    const resp = await fetch(url);
    const data = await resp.json();
    setItem(data.meals);
    setShow(false);
    const x = checker(data.meals);
    setEmp(x);

   }
    useEffect(()=>{
        setShow(true);
        window.scrollTo(0, 0);
        setTimeout(() => {
            fetchData();
        }, 2000);
        
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }

    console.log(show);
return (
    <>     <Header/>
    
        <div className="bg-black">
        <div className=" bg-black pt-3 h-[150px] mb-2">
        {
            Type()
        }
        </div>
        
            .
            <div className=" flex justify-center my-2 ">
                <input type="search" placeholder="Search" className=" -translate-x-12 w-[300px] p-1 border border-black shadow-md mb-10" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="flex justify-center my-5 text-black">
                <button className=" -translate-x-12 bg-yellow-300 p-1 hover:scale-110 hover:font-semibold rounded-xl" type="button" onClick={()=>{
                    window.scroll({
                    top: document.body.offsetHeight,
                    left: 0, 
                    behavior: 'smooth',
    });
                }}>SEARCH RECIPE BY FIRST ALPHABET</button>
            </div>

            <div>
            {
                show ? <Shimmer/> : <div></div>
            }
                    
            </div>
            
      
    
            <div className=" flex flex-wrap flex-row justify-items-start items-start mx-auto w-[70%] ">
                
                  
                {
                    
                    

                    emp ? <div className=" bg-slate-800 text-yellow-300 my-10 text-5xl border rounded-xl border-yellow-600 p-4">SORRY, THE RECIPE YOU ARE LOOKING FOR IS NOT CURRENTLY IN OUR LIST</div>:<MealItem data={item} />
                    
                   
                }

            </div>
            <div className="border-t-8 border-black mt-5 mx-auto bg-slate-900">
                <h1 className=" text-center text-yellow-300 my-6 font-semibold text-5xl shadow-2xl"> SEARCH FOR YOUR FAVOURITE RECIPE BY IT'S FIRST ALPHABET</h1>
            
            <div className=" flex flex-wrap justify-center">

                <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)} />
            </div>
            </div>
            
        </div>
    </>
)
}
export default Meal;


