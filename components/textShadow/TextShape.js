import styled from "styled-components";

const TextShape = ({color,shadow}) => {

    const handleCopy = (event) => {
        var textInfo = document.getElementById('copyText').textContent;
        navigator.clipboard.writeText(textInfo);
        document.getElementsByClassName("copyBtn")[0].innerText = "COPIED"
        
       
        const changeBtnText = setTimeout(()=>{
            document.getElementsByClassName("copyBtn")[0].innerText = "COPY"
        },1500)
         
    }

    const Shape = styled.div`
    text-shadow: ${shadow.hShadowLength}px ${shadow.vShadowLength}px ${shadow.blurRadius}px  
                    rgba(${color.red? color.red : 0},${color.green? color.green : 0},${color.blue? color.blue : 0},${shadow.shadowOpacity});
    
    `;
    return(
        <div className="side">
                       <div className="shapeArea">
                            <Shape className="textShape">Preview Text</Shape>
                            <div className="copyArea">
                               
                                <p id="copyText">
                                text-shadow: {shadow.hShadowLength}px {shadow.vShadowLength}px {shadow.blurRadius}px 
                                             rgba({color.red? color.red : 0},{color.green? color.green : 0},{color.blue? color.blue : 0},{shadow.shadowOpacity}); <br/> {"\r\n"}
                                         
                                </p> 
                            </div>
                            <button className="copyBtn" onClick={handleCopy}>COPY</button>
                       </div>
        </div>
    )
}

export default TextShape;