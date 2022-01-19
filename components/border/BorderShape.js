import styled from "styled-components";

const BorderShape = ({border,option,color}) =>{

    const handleCopy = (event) => {
        var textInfo = document.getElementById('copyText').textContent;
        navigator.clipboard.writeText(textInfo);
        document.getElementsByClassName("copyBtn")[0].innerText = "COPIED"
        
       
        const changeBtnText = setTimeout(()=>{
            document.getElementsByClassName("copyBtn")[0].innerText = "COPY"
        },1500)
        
    }

    const Shape = styled.div`
        border: ${border.allWidth}px ${option.borderStyle} ${color.borderColor};
        
        background-color: ${color.borderBg} !important;
      
    
    `;
    return(
        <div className="side">
                       <div className="shapeArea">
                            <Shape className="shape"/>
                            <div className="copyArea">
                               
                                <p id="copyText">
                                    border: {border.allWidth}px {option.borderStyle} {color.borderColor}; <br/> {"\r\n"}
                                    background: {color.borderBg}; <br/> {"\r\n"}
                                             
                                </p> 
                            </div>
                            <button className="copyBtn" onClick={handleCopy}>COPY</button>
                       </div>
                       
         </div>
    )
}

export default BorderShape;