import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import ProfilePic3 from '../Images/ProfilePic3.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    rgb(250, 200, 100,0.77) 50%,
    black 50%) bottom,

    linear-gradient(
    to right,
    rgb(250, 200, 100,0.77) 50%,
    black 50%) top;

    background-repeat: no-repeat;

    background-size: 100% 2px;
    border-left: 2px solid rgb(250, 200, 100,0.77);
    border-right: 2px solid black;


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

&>*:last-child{
    color: rgb(250, 200, 100,0.77) };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}



`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text style={{color:"rgb(250, 200, 100,0.77)"}}>
                    <p className='clickHere'>Hello World</p>
                    <h1 className='clickHere'>Myslef Parag Tharani</h1>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={ ProfilePic3 } alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro