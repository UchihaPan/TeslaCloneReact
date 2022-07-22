import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function Header() {
  const[burgerstatus,setburgerstatus]=useState(false)
  return (
    <Container>
            <a href='/'><img src="images/logo.svg" alt="logo" /></a>

      <Menu>
      <a href='#'>Models S</a>
      <a href='#'>Models 3</a>
      <a href='#'>Models X</a>
      <a href='#'>Models Y</a>
      <a href='#'>Solar Roof</a>
      <a href='#'>Solar Panels</a>



      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>

      </RightMenu>
      <CustomMenu  onClick={()=>{setburgerstatus(true)}}/>
      <BurgerNav show={burgerstatus}>
      <CloseIconwrapper>
      <Closed  onClick={()=>{setburgerstatus(false)
         console.log(burgerstatus)}}/>
      </CloseIconwrapper>
      <li><a href='#'>Model S</a></li>
      <li><a href='#'>Model X</a></li>                                        
      <li><a href='#'>Model Y</a></li>
      <li><a href='#'>Solar Roof</a></li>
      <li><a href='#'>Solar Panels</a></li>
      <li><a href='#'>Existing Inventry</a></li>
      <li><a href='#'>Used Inventry</a></li>
      <li><a href='#'>Trade-IN</a></li>
      <li><a href='#'>Testdrive</a></li>
      <li><a href='#'>Poerwall</a></li>
      <li><a href='#'>Commercial Energy</a></li>
      <li><a href='#'>Utilities</a></li>
      <li><a href='#'>Charging</a></li>
      <li><a href='#'>Model S</a></li>
      <li><a href='#'>Find Us</a></li>
      <li><a href='#'>Support</a></li>
      <li><a href='#'>Investor Relations</a></li>

      </BurgerNav>
      </Container>
  )
}


export default Header

const Container =styled.div`
min-height:60px;
margin-bottom:10px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
top:0;
left:0;
right:0;

`

const Menu=styled.div`
display:flex;
align-items:center;
flex-wrap:no-wrap;



a{
  font-weight:600;
  text-transform:uppercase;
padding:10px;

}

@media(max-width:768px){
  display:none;
}
`

const RightMenu=styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
padding:10px;

}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
  
`

const BurgerNav=styled.div`

position:fixed;
overflow-y:scroll;

top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:20;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? 'translateX(0%)': 'translateX(100%)'};
transition:transform 0.5s ease-in-out;
li{
  padding:15px 0px;
  border-bottom:1px solid rgba(0,0,0,0.2);
}
`

const Closed=styled(CloseIcon)`
cursor:pointer;
`

const CloseIconwrapper=styled.div`

display:flex;
justify-content:flex-end;

`
