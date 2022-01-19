import styled from "styled-components";



const ShadowShape = ({shadow,color,inset}) =>{

    const handleCopy = (event) => {
        var textInfo = document.getElementById('copyText').textContent;
        navigator.clipboard.writeText(textInfo);
        document.getElementsByClassName("copyBtn")[0].innerText = "COPIED"
        
       
        const changeBtnText = setTimeout(()=>{
            document.getElementsByClassName("copyBtn")[0].innerText = "COPY"
        },1500)
         
    }

const Shape = styled.div`
    box-shadow: ${shadow.hShadowLength}px ${shadow.vShadowLength}px ${shadow.blurRadius}px ${shadow.spreadRadius}px 
        rgba(${color.red? color.red : 0},${color.green? color.green : 0},${color.blue? color.blue : 0},${shadow.shadowOpacity}) ${inset};
    
`;

    return(
        <div className="side">
                       <div className="shapeArea">
                            <Shape className="shape"/>
                            <div className="copyArea">
                               
                                <p id="copyText">
                                box-shadow: {shadow.hShadowLength}px {shadow.vShadowLength}px {shadow.blurRadius}px {shadow.spreadRadius}px 
                                             rgba({color.red? color.red : 0},{color.green? color.green : 0},{color.blue? color.blue : 0},{shadow.shadowOpacity}) {inset}; <br/> {"\r\n"}
                                -webkit-box-shadow: {shadow.hShadowLength}px {shadow.vShadowLength}px {shadow.blurRadius}px {shadow.spreadRadius}px 
                                             rgba({color.red? color.red : 0},{color.green? color.green : 0},{color.blue? color.blue : 0},{shadow.shadowOpacity}) {inset}; <br/> {"\r\n"}
                                -moz-box-shadow: {shadow.hShadowLength}px {shadow.vShadowLength}px {shadow.blurRadius}px {shadow.spreadRadius}px 
                                             rgba({color.red? color.red : 0},{color.green? color.green : 0},{color.blue? color.blue : 0},{shadow.shadowOpacity}) {inset}; <br/> {"\r\n"}
                                             
                                </p> 
                            </div>
                            <button className="copyBtn" onClick={handleCopy}>COPY</button>
                       </div>
                       
        </div>
    )
}

export default ShadowShape;