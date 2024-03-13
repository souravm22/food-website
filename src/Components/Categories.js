import React, { useEffect, useState } from 'react'
import Header from './Header'
import Shimmer from './Shimmer';
import { ScaleLoader } from 'react-spinners';
function Categories() {

    const [url, setUrl] = useState();
    const [item,setItem]=useState([]);
    const [show, setShow] = useState(true);


    async function fetchData(){
        const resp = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await resp.json();
        setItem(data.categories);
        setShow(false);      
        
    
       }

       useEffect(()=>{
        
       
        setTimeout(() => {
            fetchData();
        }, 2000);
        
     },[url])
  return (
    <>
        <Header/>
        <div className=' bg-black h-full p-8'>
        <div className=' text-yellow-300 text-4xl text-center font-semibold border-b-4 p-4'>
            CATEGORIES WE OFFER
        </div>
        <div className=' flex flex-wrap w-9/12 p-3 mx-auto justify-start gap-3 my-8'>

        
        
        {
           show ? 
           <div className=' mx-auto h-96 w-4/12'>
           <ScaleLoader
  color="#ffdf00"
  height={99}
  width={9}
/>
<div className=' text-yellow-300 text-xl text-center'>“A recipe has no soul. You, as the cook, must bring soul to the recipe.”</div> 
</div>
:  item.map( data=>{
                return(

                    <div key={data.idCategory} className=' p-2 hover:bg-slate-900 hover:shadow-lg rounded-lg hover:scale-105 border border-yellow-100' >
                        <div>
                            <img src={data.strCategoryThumb}/>
                        </div>
                        <div className=' text-left text-2xl font-semibold text-yellow-300'>
                            <h2>{data.strCategory}</h2>
                            {/* <p className=' text-yellow-300 w-12/12 overflow-hidden'>
                                {data.strCategoryDescription}
                            </p> */}
                        </div>
                    </div>
                )
            })
        }
        </div>

        
        

       
            
        </div>

    </>
  )
}

export default Categories