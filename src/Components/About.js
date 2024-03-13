import React from 'react'
import Header from './Header'
function About() {
  return (
    <>
    <Header/>
        <div className=' bg-black h-full p-8'>
        <div className=' text-yellow-300 text-4xl text-center font-semibold border-b-4 p-4'>
            ABOUT US
        </div>
        

        <div className=' text-yellow-300 mx-auto text-2xl w-10/12 p-4 my-8 flex justify-center flex-col gap-y-10'>
        <p className=' bg-slate-900 text-center font-semibold text-2xl from-stone-900 '>
            HI, I'M SOURAV MAHAPATRA, BTECH UNDERGRAD IN COMPUTER SCIENCE AND ENGINEERING, AT NIT ROURKELA. I HAVE USED REACT JS ALONG WITH TAILWIND TO MAKE THIS PROJECT.
            I HAVE USED THE MEALDB API TO FETCH THE ITEMS ALONG WITH FUNCTONALITIES LIKE SEARCHING FOR THE RECIPE, SEARCHING USING THE FIRST LETTER OF THE RECIPE AND THE CATEGORIES SECTION. IT WAS REALLY HELPFUL IN MAKING THIS PROJECT. SO I'D LIKE TO THANK THE TEAM BEHIND THE API FOR THE SMOOTH EXPERIENCE.
            </p>
            
            <p className=' bg-slate-900 text-center font-serif mx-auto'>
            Cooker's Den is more than just a recipe app; it's your culinary companion, a kitchen wizard that transforms your cooking experience into a seamless and delightful journey. In a world where time is precious and the desire for delicious homemade meals is a constant, Cooker's Den emerges as the indispensable solution for both novice and seasoned chefs alike.
            </p>

            <p className=' bg-slate-900 text-center font-serif'>
            At its core, Cooker's Den is designed to simplify the entire cooking process. Imagine having a vast collection of recipes at your fingertips, covering a spectrum of cuisines, dietary preferences, and skill levels. Whether you're a busy professional seeking quick weekday recipes or an adventurous foodie exploring new flavors, Cooker's Den caters to your every need
            </p>


            <p className=' bg-slate-900 text-center font-serif'>
            One of the unique features that sets Cooker's Den apart is its intuitive interface. The app seamlessly guides users through each recipe with step-by-step instructions, accompanied by vivid images that not only showcase the final dish but also act as visual aids for each cooking stage. This visual approach ensures that even those new to the kitchen can embark on a culinary adventure with confidence.
            </p>
           
        </div>
        </div>

        </>
  )
}

export default About