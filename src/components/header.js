import React, {useState} from 'react'
import Styled from "styled-components" ;
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from './features/car/carslice' ;
import { useSelector } from 'react-redux' ; 


function header() {

    const [burgerStatus, setBurgerStatus] = new useState(false) ;
    const cars = new useSelector(selectCars) ;

    //console.log(cars) ;

    return (
        <Container>
            <a> 
                <img src = "teslacloneimages/logo.svg" alt=""/>
            </a>
            <CentralHeader>
                {/* {
                    cars & cars.map((car, index) => 
                        <a href="">{car}</a>
                    )
                } */}
                <a href=""> Model S </a>
                <a href=""> Model 3 </a>
                <a href=""> Model X </a>
                <a href=""> Model Y </a>
                <a href=""> Solar Roof </a>
                <a href=""> Solar Panels </a>
            </CentralHeader>
            <RightHeader>
                <a href=""> Shop </a>
                <a href=""> Account </a>
                <Menu onClick={() => setBurgerStatus(true)}>
                    Menu
                </Menu>
            </RightHeader>
            <BurgerNav show = {burgerStatus}>
                <CustomCloseWrapper> 
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CustomCloseWrapper>
                    <li><a link = "#"> Model 3</a></li>
                    <li><a link = "#"> Model S</a></li>
                    <li><a link = "#"> Model X</a></li>
                    <li><a link = "#">Model Y</a></li>
                    <li><a link = "#">Solar Roof</a></li>
                    <li><a link = "#">Solar Panels</a></li>
                    <li><a link = "#">Existing Inventory</a></li>
                    <li><a link = "#">Used Inventory</a></li>
                    <li><a link = "#">Trade-In</a></li>
                    <li><a link = "#">Test Drive</a></li>
                    <li><a link = "#">Powerwall</a></li>
                    <li><a link = "#">Commercial Energy</a></li>
                    <li><a link = "#">Utilities</a></li>
                    <li><a link = "#">Charging</a></li>
                    <li><a link = "#">Find Us</a></li>
                    <li><a link = "#">Support</a></li>
                    <li><a link = "#">Investor Relations</a></li>
                    <li><a link = "#">Shop</a></li>
                    <li><a link = "#">Account</a></li>
                    <li><a link = "#">More</a></li>
            </BurgerNav>
            
        </Container>
    )
}

export default header

const CustomCloseWrapper = Styled.div`
    display: flex ;
    justify-content: flex-end;
    padding: 3px 7px ;
`

const CustomClose = Styled(CloseIcon)`
    cursor: pointer
` ;


const BurgerNav = Styled.div`
    position: fixed ;
    top : 0 ;
    bottom : 0 ;
    right: 0 ; 
    background: white ; 
    width: 300px ; 
    list-style: none ;
    padding: 25px ; 
    display: flex ; 
    flex-direction: column ; 
    text-align: start ; 
    cursor: pointer; 
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'} ;
    transition: transform 0.2s  ; 
    li{
        padding: 15px 0 ;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        border-color: white ; 
        a{
            font-weight: 600 ;
            padding-left: 15px ; 
        }
    }
` ;

const Menu = Styled.div`
    cursor: pointer ;
    font-weight: 600 ;
    padding-left: 16px ;
`

const RightHeader = Styled.div`
    display: flex ;
    align-items: center; 
    padding-right: 10px ; 
    a{
        font-weight: 600 ;
        padding: 0px 14px ;
        flex-wrap: nowrap ; 
        @media(max-width: 1200px){
            display: none ; 
        }
    }
`

const Container = Styled.div`
    z-index: 1 ;
    min-height: 60px ;
    position: fixed ;
    display: flex ;
    align-items: center ;
    font-size: 14px ;
    justify-content: space-between ; 
    padding: 0px 20px ;
    top: 0 ;
    left: 0 ;
    right: 0 ;
`

const CentralHeader = Styled.div`
    display: flex ;
    align-items: center ; 
    padding-left: 75px ;
    a{
        font-weight: 600 ;
        padding: 0px 17px ;
        flex-wrap: nowrap ; 
        @media(max-width: 1200px){
            display: none ; 
        }
    }
`