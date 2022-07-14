import React from "react";
import "./Main.css"
import { Navbar } from "./Navbar/Navbar";
import { Home } from "./Home/Home";
import { About } from "./About/About";

export const Main = () => {

    return (
        <>
            <Navbar />
        <div className="container">
            <Home />
            <About />
        </div>
        </>
    )
}