import React from 'react';
import './Components/style.css';
import { lazy } from 'react';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import {Route,Routes} from 'react-router-dom';
import Categories from './Components/Categories';

const LazyAbout = React.lazy(()=> import('./Components/About'))
const LazyCategories = React.lazy(()=> import('./Components/Categories'))
const LazyWhy = React.lazy(()=> import('./Components/Why'))

function App() {
  return (
    <>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route path="/Categories" element ={<React.Suspense fallback='...Loading'>
          <LazyCategories/>
        </React.Suspense>} />
      <Route path="/About" element ={
        <React.Suspense fallback='...Loading'>
          <LazyAbout/>
        </React.Suspense>
      } />
      <Route path="/Why" element ={<React.Suspense fallback='...Loading'>
          <LazyWhy/>
        </React.Suspense>} />


      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
    </>
  )
}

export default App;