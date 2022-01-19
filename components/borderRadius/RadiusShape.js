import styled from "styled-components";

const RadiusShape = ({radius,color}) => {


    console.log("borderWidth",radius.borderWidth)
    const handleCopy = (event) => {
        var textInfo = document.getElementById('copyText').textContent;
        navigator.clipboard.writeText(textInfo);
        document.getElementsByClassName("copyBtn")[0].innerText = "COPIED"
        
       
        const changeBtnText = setTimeout(()=>{
            document.getElementsByClassName("copyBtn")[0].innerText = "COPY"
        },1500)
         
    }

    

    const Shape = styled.div`
    border: ${radius.borderWidth}px solid ${color.colorborder};
    background-color: ${color.colorbg} !important;
    border-radius: ${radius.allCorners}px;
    border-top-left-radius: ${radius.topLeft}px;
    border-top-right-radius: ${radius.topRight}px;
    border-bottom-left-radius: ${radius.bottomLeft}px;
    border-bottom-right-radius: ${radius.bottomRight}px;

    `;

  
    return(
       
            <div className="side">
                       <div className="shapeArea">
                            <Shape className="shape"/>
                            <div className="copyArea">
                               
                                <p id="copyText">
                                         border-radius: {radius.topLeft? radius.topLeft : radius.allCorners}px {radius.topRight? radius.topLeft : radius.allCorners}px {radius.bottomLeft? radius.bottomLeft : radius.allCorners}px {radius.bottomRight? radius.bottomRight : radius.allCorners}px; <br/> {"\r\n"}
                                         -webkit-border-radius: {radius.topLeft? radius.topLeft : radius.allCorners}px {radius.topRight? radius.topLeft : radius.allCorners}px {radius.bottomLeft? radius.bottomLeft : radius.allCorners}px {radius.bottomRight? radius.bottomRight : radius.allCorners}px; <br/> {"\r\n"}
                                         -moz-border-radius: {radius.topLeft? radius.topLeft : radius.allCorners}px {radius.topRight? radius.topLeft : radius.allCorners}px {radius.bottomLeft? radius.bottomLeft : radius.allCorners}px {radius.bottomRight? radius.bottomRight : radius.allCorners}px; <br/> {"\r\n"}
                                         background: {color.colorbg}; <br/> {"\r\n"}
                                         {((radius.borderWidth !== "0") && radius.borderWidth !== undefined)? `border:${radius.borderWidth}px solid ${color.colorborder};` : ""} <br/> {"\r\n"}
                                         
                                </p> 
                            </div>
                            <button className="copyBtn" onClick={handleCopy}>COPY</button>
                       </div>
                       
                </div>
      
    )
}
export default RadiusShape;