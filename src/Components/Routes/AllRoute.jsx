import React from 'react';
import MainMenu from '../MenuPage/MainMenu';
import HomePage from '../HomePage/HomePage';
import {Signup} from "../Signin_Signup/Signup"
import About from "../About"
import Contact from "../Contact"
import YourOrder from "../Checkout/YourOrder"
import CategoryDetails from "../MenuPage/CategoryDetails"
import Checkout from "../Checkout/checkout"
import Signin from "../Signin_Signup/Signin"
import { Route, Routes } from 'react-router-dom';
function AllRoute() {
    return (
        <Routes>
           <Route path="/" element={<HomePage/>}/>

           <Route path="/items" element={<HomePage/>}/>

           <Route path="/signup" element={<Signup/>}/>

           <Route path="/login" element={<Signin/>}/>

           <Route path="/items/menu" element={<MainMenu/>}/>

           <Route path="/items/about" element={<About/>}/>

           <Route path="/items/contact" element={<Contact/>}/>

           <Route path="/items/cart" element={<YourOrder/>}/>

           <Route path="/items/CategoryDetails/:category" element={<CategoryDetails/>}/>

           <Route path="/items/checkout" element={<Checkout/>}/>
        </Routes>
    );
}

export default AllRoute;