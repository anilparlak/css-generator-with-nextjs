import styled from "styled-components";

const GradientShape = ({input,color,option}) => {



    const handleCopy = (event) => {
        var textInfo = document.getElementById('copyText').textContent;
        navigator.clipboard.writeText(textInfo);
        document.getElementsByClassName("copyBtn")[0].innerText = "COPIED"
        
       
        const changeBtnText = setTimeout(()=>{
            document.getElementsByClassName("copyBtn")[0].innerText = "COPY"
        },1500)
        
       
        
            
    }

    

    const Shape = styled.div`
        background: ${color.startColor};
        background: ${option.orientation}-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 80%);

        ${(option.orientation === "radial")? 
                                        `background:${option.orientation}-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : "" };
      
        ${(option.orientation === "elliptical")? 
                                        `background:radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%) !important;` : "" };
        
        ${(option.orientation === "repeat linear")? 
                                        `background:repeating-linear-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 20%) !important;` : "" };
      
        
    
        ${(option.orientation === "repeat radial")? 
                                        `background:repeating-radial-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : "" };
                            
        ${(option.orientation === "repeat elliptical")? 
                                        `background:repeating-radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%) !important;` : "" };

    `;

  
    return(
       
            <div className="side">
                       <div className="shapeArea">
                            <Shape className="shape"/>
                            <div className="copyArea">
                               
                                <p id="copyText">
                                        background: {color.startColor}; <br/> {"\r\n"}
                                        {/* background: {option.orientation === "linear"? `linear-gradient({input.degree}deg, {color.startColor} 0%, {color.endColor} 80%)`} */}
                                        background: {(option.orientation === "linear")? `linear-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 80%);` : ""}
                                                    {(option.orientation === "radial")? `radial-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "elliptical")? `radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat linear")? `repeating-linear-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat radial")? `repeating-radial-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat elliptical")? `repeating-radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""} <br/> {"\r\n"}
                                        
                                        background: {(option.orientation === "linear")? `-webkit-linear-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 80%);` : ""}
                                                    {(option.orientation === "radial")? `-webkit-radial-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "elliptical")? `-webkit-radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat linear")? `-webkit-repeating-linear-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat radial")? `-webkit-repeating-radial-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat elliptical")? `-webkit-repeating-radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""} <br/> {"\r\n"}

                                        background: {(option.orientation === "linear")? `-moz-linear-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 80%);` : ""}
                                                    {(option.orientation === "radial")? `-moz-radial-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "elliptical")? `-moz-radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat linear")? `-moz-repeating-linear-gradient(${input.degree}deg,${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat radial")? `-moz-repeating-radial-gradient(circle ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""}
                                                    {(option.orientation === "repeat elliptical")? `-moz-repeating-radial-gradient(ellipse ${option.size} at ${option.positionG}, ${color.startColor} 0%, ${color.endColor} 20%);` : ""} <br/> {"\r\n"}
                                    
                                </p> 
                            </div>
                            <button className="copyBtn" onClick={handleCopy}>COPY</button>
                       </div>
                       
                </div>
      
    )
}
export default GradientShape;