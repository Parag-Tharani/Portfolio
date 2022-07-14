import React from "react";
import "./Navbar.css"
import Logo from "../Images/Logo1.png"
import { Box, Link, styled } from "@mui/material"


const Linked = styled(Link)({
    paddingTop:"12vh",
    textDecoration:"none",
    color: "rgba(128, 128, 128, 0.8)"
})

export const Navbar = () => {

    return(
        <>
        <Box className="navbar">
            <img src={Logo} alt="Logo" style={{width:60, height:60, paddingTop:"12vh",paddingLeft:"5vw", paddingRight:"20vw"}} />
            <Box sx={{display:"flex", justifyContent:"space-between", paddingRight:"5vw"}}>
                <Linked href="#" sx={{paddingRight:'2vw', fontSize:"15px"}}>Twitter</Linked>
                <Linked href="#" sx={{paddingRight:'2vw', fontSize:"15px"}}>LinkedIn</Linked>
                <Linked href="#" sx={{fontSize:"14px"}}>Theme</Linked>
            </Box>
        </Box>
        </>
    )
}