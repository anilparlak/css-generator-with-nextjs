import styled from "styled-components";



const TransformShape = ({transform}) =>{

    const handleCopy = (event) => {
        var textInfo = document.getElementById('copyText').textContent;
        navigator.clipboard.writeText(textInfo);
        document.getElementsByClassName("copyBtn")[0].innerText = "COPIED"
        
       
        const changeBtnText = setTimeout(()=>{
            document.getElementsByClassName("copyBtn")[0].innerText = "COPY"
        },1500)
         
    }

const Shape = styled.div`
    
    transform:${transform.rotate? `rotate(${transform.rotate}deg)` : ""} ${transform.scale? `scale(${transform.scale})` : ""} ${transform.skew? `skew(${transform.skew}deg)` : ""}
                ${transform.translateX? `translate(${transform.translateX}px , ${transform.translateY}px)` : ""} ${transform.translateY? `translate(${transform.translateX}px , ${transform.translateY}px)` : ""}; 
    
`;

    return(
        <div className="side">
                       <div className="shapeArea">
                            <Shape className="shape"/>
                            <div className="copyArea">
                               
                                <p id="copyText">
                                    transform: {(transform.rotate !== "0")? `rotate(${transform.rotate}deg)` : ""} {(transform.scale !== "1")? ` scale(${transform.scale})` : ""}
                                                 {(transform.skew !== "0")? ` skew(${transform.skew}deg)` : ""} 
                                                 {((transform.translateX !== "0") || transform.translateY !== 0)? ` translate(${transform.translateX}px , ${transform.translateY}px)` : ""} ;  <br/> {"\r\n"}

                                    -webkit-transform: {(transform.rotate !== "0")? `rotate(${transform.rotate}deg)` : ""} {(transform.scale !== "1")? ` scale(${transform.scale})` : ""}
                                                 {(transform.skew !== "0")? ` skew(${transform.skew}deg)` : ""} 
                                                 {((transform.translateX !== "0") || transform.translateY !== 0)? ` translate(${transform.translateX}px , ${transform.translateY}px)` : ""} ;  <br/> {"\r\n"}
                                        
                                    -moz-transform: {(transform.rotate !== "0")? `rotate(${transform.rotate}deg)` : ""} {(transform.scale !== "1")? ` scale(${transform.scale})` : ""}
                                                 {(transform.skew !== "0")? ` skew(${transform.skew}deg)` : ""} 
                                                 {((transform.translateX !== "0") || transform.translateY !== 0)? ` translate(${transform.translateX}px , ${transform.translateY}px)` : ""} ;  <br/> {"\r\n"}
                                             
                                </p> 
                            </div>
                            <button className="copyBtn" onClick={handleCopy}>COPY</button>
                       </div>
                       
        </div>
    )
}

export default TransformShape;