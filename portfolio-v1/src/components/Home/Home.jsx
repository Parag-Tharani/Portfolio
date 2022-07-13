import React from "react";
import "./Home.css"
import HomeImage from "../Images/HomeImage.png"
import Bulb from "../Images/Bulb.png"
import { Box } from "@mui/material"
import { useDispatch, useSelector} from "react-redux";
import { setTheme } from "../../Redux/action";

export const Home = () => {
    const [matches, setMatches] = React.useState(
        window.matchMedia("(max-width: 1150px)").matches
    )

    const { currentTheme } = useSelector((state) => state);
    const dispatch = useDispatch()


    React.useEffect(() => {
        window
        .matchMedia("(max-width: 1150px)")
        .addEventListener('change', e => setMatches( e.matches ));
    },[])


    console.log(currentTheme)
    return (
        <>
        <Box sx={{display:"flex"}}>
            
            <Box>
            {!matches && <img src={Bulb} onClick={() => dispatch(setTheme(!currentTheme))} alt="Bulb" style={{position:"absolute", left:"32vh", zIndex:2, width:"30vh", cursor:"pointer"}}/>}
            {!matches && <img src= {HomeImage} alt="Switch Button" style={{position:"absolute",top:"33vh", left:"17vh", zIndex:3, width:"80vh"}} />}
            </Box>

            {!matches && 
            <Box sx={{height:"100vh", width:"35%", backgroundColor:"rgb(42, 42, 42)"}}>
            {currentTheme
                ?<Box className="slanted" sx={{position:"absolute", top:"15vh", left:"23vh"}}></Box>
                :null
            }
            </Box>
            }
            

            {!matches && 
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh", width:"65%", backgroundColor:"rgb(124, 23, 90)", opacity:0.88}}>
                <Box>
                <h4 className="name">Hi, I'm Parag Tharani</h4>
                <h1 className="talent">Developer...</h1>
                <h1 className="talent">Designer..</h1>
                <h1 className="talent">Explorer.</h1>
                </Box>
            </Box>
            }

            {matches && 
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh",width:"100%", backgroundColor:"rgb(124, 23, 90)", opacity:0.88}}>
                <Box>
                <h4 className="name">Hi, I'm Parag Tharani</h4>
                <h1 className="talent">Developer...</h1>
                <h1 className="talent">Designer..</h1>
                <h1 className="talent">Explorer.</h1>
                </Box>
            </Box>
            }

        </Box>
        </>
    )
}