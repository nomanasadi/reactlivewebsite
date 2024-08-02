import React from "react";
import webs from "../src/images/img2.jpeg" 
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
   <Common   
   name="Grow your business with"
   imgsrc={webs} 
   visit="/services" 
   btname="Get Started"/>
        </>
    )
}

export default Home;