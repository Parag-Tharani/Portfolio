import React, { useState } from 'react'
import "../About/About.css"
import Intro from './AboutIntro'
import { YinYang } from './YinYang'
import styled, { keyframes } from 'styled-components'


const MainContainer = styled.div`
position: relative;
height: 100vh;
background:rgb(250, 200, 100,0.77);
}
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: rgb(0,0,0,0.98);
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


export const About = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
         <DarkDiv  click={click}/>
           
            <Center className='yinyang' style={click?{transform:"translate(-90%,-30%)"}:{transform:"translate(-50%,-50%)"}} click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 80 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span className='clickHere'>Click To Know About Me</span>
            </Center>

            {/* </Container> */}
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}