import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'


function Home() {
  return (
    <Container> 
          <Header />
    <Section heading='Model S' description='Order Online For Touchless Delivery.' leftbtntext='Customize Order' rightbtntext='Existing User' img='images/model-s.jpg'/>
    <Section heading='Model 3' description='Order Online For Touchless Delivery.' leftbtntext='Customize Order' rightbtntext='Existing User' img='images/model-3.jpg'/>
    <Section heading='Model x' description='Order Online For Touchless Delivery.' leftbtntext='Customize Order' rightbtntext='Existing User' img='images/model-x.jpg'/>
    <Section heading='Model y' description='Order Online For Touchless Delivery.' leftbtntext='Customize Order' rightbtntext='Existing User' img='images/model-y.jpg'/>
    <Section heading='Solar Roof' description='Produce Clean Energy From Your Roof.' leftbtntext='Customize Order' rightbtntext='Existing User' img='images/solar-roof.jpg'/>
    <Section heading='Solar Panels' description='Lowest Cost Solar Panels in America.' leftbtntext='Customize Order' rightbtntext='Existing User' img='images/solar-panel.jpg'/>
    <Section heading='Accessories'  leftbtntext='Customize Order'  img='images/accessories.jpg'/>



     </Container>
  )
}

export default Home

const Container=styled.div`
height:100vh;
`