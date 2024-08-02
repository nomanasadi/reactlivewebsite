import React from "react";
import webs from "../src/images/hero-img.jpeg" 
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
    return (
        <>
   <Common 
   name="Welcome to About page "
   imgsrc={webs} 
   visit="/contact" 
   btname="Contact Now"/>
        </>
    )
}

export default About;