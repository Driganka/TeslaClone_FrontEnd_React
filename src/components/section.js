import React from 'react'
import Styled from 'styled-components' ;
import Fade from 'react-reveal/Fade';

function section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}> {/* pass in a prop into a style component */}
            <Fade bottom>
                <ItemText>
                    <h1> { title } </h1>
                    <p> { description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>    
                    <ButtonGroup>
                        <LeftButton>
                            { leftBtnText }
                        </LeftButton>
                        { /* Only show right button if it exists; which it does not in case of accessories */ }
                        { rightBtnText && 
                            <RightButton>   
                                { rightBtnText }
                            </RightButton>
                        }
                        
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/teslacloneimages/downarrow/1x/outline_expand_more_black_48dp.png">
                </DownArrow>
            </Buttons>
            
        </Wrap>
    )
}

export default section

const DownArrow = Styled.img`
    animation: animateDown infinite 1.5s ;
    overflow-x: hidden ; 
    display: flex ; 
    margin-left: auto ; 
    margin-right: auto ; 
    `

const Buttons = Styled.div`
    
    `

const Wrap = Styled.div`
    width: 100vw ;
    height: 100vh ;
    background-size: cover ; 
    background-position: center ;
    background-repeat: no-repeat ; 
    background-image: ${props => `url("/teslacloneimages/${props.bgImage}")`} ; // get props inside style component
    display: flex ;
    flex-direction: column; 
    justify-content: space-between; //verticle
    align-items: center ; //horizontal; 


` 

const ItemText = Styled.div`
    padding-top: 15vh ;
    text-alight: center ;  `

const ButtonGroup = Styled.div`
    display: flex ;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column ;
    }` 

const LeftButton = Styled.div`
    background-color: rgba(23, 26, 32, 0.8) ; 
    height: 40px ;
    width: 256px ;
    color: white ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase ;
    font-size: 12px;
    cursor: pointer ;
    margin: 10px ;
    `


const RightButton = Styled(LeftButton)`
    background: white ;
    opacity: 0.65 ; 
    color: black ;
    `

