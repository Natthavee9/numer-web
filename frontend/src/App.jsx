import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/navbar";
//root of equation
import Bisection from "./page/Bisection";
import Graphical  from "./page/Graphical";
import Falseposition from "./page/Falseposition";
import OnePoint from "./page/OnePoint";
import Secant from "./page/Secant";
import NewtonRaphson from "./page/NewtonRaphson";

//Linear Algebra
import Cramer from "./page/Cramer"


//interpolation
import NewtonDivided from "./page/์NewtonDivided";


//Regression
import Regression from "./page/LinearRegression";



//Integration
import CompositeTrapezoidal from "./page/CompositTrapezoidal";
import SimsonRule from "./page/SimsonRule";
import CompositeSimson from "./page/CompositeSimson";
import Test from "./page/Test"
import Test2 from "./page/Test2"



//Diff



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Bisection />} />
        {/* root of equation */}
        <Route path="/graphical" element={<Graphical/>} />
        <Route path="/bisection" element={<Bisection/>} />
        <Route path="/falseposition" element={<Falseposition/>}/>
        <Route path="/onepoint" element={<OnePoint/>}/>
        <Route path="/secant" element={<Secant/>}/>
        <Route path="/newtonraphson" element={<NewtonRaphson/>}/>

        {/* Linear Algebra */}
        <Route path="/cramer" element={<Cramer/>}/>
       
        
        {/* interpolation */}
        <Route path="/newtondivided" element={<NewtonDivided/>}/>
        
        {/* Regression*/}
        <Route path="/regress" element={<Regression/>}/>
        
        
        
        {/*Integration*/}
        <Route path="/compositetrapezoidal" element={<CompositeTrapezoidal/>} />
        <Route path="/simson" element={<SimsonRule/>} />
        <Route path="/compositesimson" element={<CompositeSimson/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/test2" element={<Test2/>} />
      
  
        {/*Diff*/}


      </Routes>
    </BrowserRouter>
  );
}