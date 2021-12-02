import React from 'react'
import { useState } from 'react'


function LeftArrow(props){
    return (
        <i className={props.className}></i>
    )
}

function RightArrow(props){
    return (
        <i className={props.className}></i>
    )
}

function Slider() {

    const images = ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWPzKl?ver=a03a&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=0&s=1898&d=712&aim=true',
                'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Oxxp?ver=3bec&q=0&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=85&s=2120&d=795&aim=true',
                'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLSia?ver=09bd&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
                'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLJcd?ver=7d9d&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true'
    ];

    const [counter, counterFunc] = useState(0);
    
    function rightArrowClick(){
        if(counter < images.length - 1){
            counterFunc(counter + 1);
        }
    }
    
    function leftArrowClick(){
        if(counter > 0) {
            counterFunc(counter - 1) 
        };
    }

    return (
        <div className="slider">
            <img src={images[counter]}  className="slider-img"></img>
            <div className="btns">
                <button className="left" onClick={leftArrowClick}><LeftArrow className="fa fa-angle-left" /></button>
                <button className="right" onClick={rightArrowClick}><RightArrow className="fa fa-angle-right"/></button>
            </div>
            
        </div>
    )
}

export default Slider;