import React from "react";
import styled from "styled-components";
const FilterShape = ({filter}) => {

    const handleCopy = (event) => {
        var textInfo = document.getElementById('copyText').textContent;
        navigator.clipboard.writeText(textInfo);
        document.getElementsByClassName("copyBtn")[0].innerText = "COPIED"
        
       
        const changeBtnText = setTimeout(()=>{
            document.getElementsByClassName("copyBtn")[0].innerText = "COPY"
        },1500)
         
    }
    const Shape = styled.div`
   
    img{
        // //filter: grayscale(${filter.grayscale}%);
        filter: ${filter.grayscale? `grayscale(${filter.grayscale}%)` : ""} ${filter.sepia? `sepia(${filter.sepia}%)` : ""} 
                ${filter.blur? `blur(${filter.blur}px)` : ""} ${filter.brightness? `brightness(${filter.brightness}%)` : ""}
                ${filter.hueRotate? `hue-rotate(${filter.hueRotate}deg)` : ""}  ${filter.saturate? `saturate(${filter.saturate}%)` : ""} 
                ${filter.opacity? `opacity(${filter.opacity}%)` : ""}  ${filter.contrast? `contrast(${filter.contrast}%)` : ""} 
                ${filter.invert? `invert(${filter.invert}%)` : ""};
    }
    
    
`;

    return(
        <div className="side">
                       <div className="shapeArea">
                            <Shape className="filterImg">
                                <img src="./images/filter.jpg" alt="" />
                            </Shape>

                            <div className="copyArea">
                               
                                <p id="copyText">
                                   filter: {(filter.grayscale !== `0`)? `grayscale(${filter.grayscale}%)`: ""} {(filter.sepia !== `0`)? `speia(${filter.sepia}%)`: ""}
                                             {(filter.blur !== `0`)? ` blur(${filter.blur}px)`: ""} {(filter.brightness !== `100`)? ` brightness(${filter.brightness}%)`: ""}
                                             {(filter.hueRotate !== `0`)? ` hue-rotate(${filter.hueRotate}deg)`: ""} {(filter.saturate !== `100`)? ` saturate(${filter.saturate}%)`: ""}
                                             {(filter.opacity !== `100`)? ` opacity(${filter.opacity}%)`: ""}  {(filter.contrast !== `100`)? ` contrast(${filter.contrast}%)`: ""}
                                             {(filter.invert !== `0`)? ` invert(${filter.invert}%)`: ""}; <br/> {"\r\n"}
                                </p> 
                            </div>
                            <button className="copyBtn" onClick={handleCopy}>COPY</button>
                       </div>
        </div>
    )
}

export default FilterShape;