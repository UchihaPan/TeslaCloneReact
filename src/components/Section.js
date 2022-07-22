import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({heading,description,leftbtntext,rightbtntext,img}) {
  return (
    <Wrap img={img}>
        <ItemText>
        <Fade top>

            <h1>{heading}</h1>
            <p>{description}</p>
            </Fade>

        </ItemText>
        <Buttons>
        <Fade top>

        <ButtonGroup>
           {leftbtntext &&( <LeftButton>{leftbtntext}</LeftButton>)}
           {rightbtntext &&( <RightButton>{rightbtntext}</RightButton>)}
        </ButtonGroup>
        </Fade>

        <DownArrow src='images/down-arrow.svg' />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-image:${props=>`url(${props.img})`};

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

const ItemText=styled.div`
padding-top:10vh;
text-align:center;
`

const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
  flex-direction:column;
}
`


const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:15px;
margin-right:10px;
@media(max-width:768px){
  margin-top:10px;
}

`

const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`

const DownArrow=styled.img`

height:30px;
animation:animatedown infinite 1.55s
`

const Buttons=styled.div`
`





