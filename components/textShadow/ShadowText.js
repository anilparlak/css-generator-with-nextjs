import React,{useState} from 'react';
import InputRange from '../InputRange';
import ColorSelect from '../ColorSelect';
import hexRgb from 'hex-rgb';
import TextShape from './TextShape';

const INITIAL_SHADOW = {
    hShadowLength: "0",
    vShadowLength: "0",
    blurRadius: "5",
    shadowOpacity: "0.75",
    opacityStep: "0.1"
    
}
const INITIAL_COLOR = {
    colorRed: "0",
    colorGreen: "0",
    colorBlue: "0"
}

const ShadowText = () => {
    const [shadow,setShadow] = useState(INITIAL_SHADOW);
    const [color,setColor] = useState(INITIAL_COLOR);
    const onInputChange = (event) =>{
        // setRadius(event.target.value);
        setShadow({...shadow,[event.target.name] : event.target.value})
        
    }

    const onColorChange = (event) =>{
        
        var rgb = hexRgb(event.target.value);
        setColor(rgb)
        
    }

    return(
        <div>
            <div className="radius">
                <div className="side">
                        <div className="inputArea">

                            <InputRange title={"Horizontal Shadow Length"} name="hShadowLength" value={shadow.hShadowLength} 
                                        onChange={onInputChange} min={"-110"} max={"110"}/>
                            <InputRange title={"Vertical Shadow Length"} name="vShadowLength" value={shadow.vShadowLength} 
                                        onChange={onInputChange} min={"-110"} max={"110"}/>
                            <InputRange title={"Blur Radius"} name="blurRadius" value={shadow.blurRadius} 
                                        onChange={onInputChange} min={"0"} max={"110"}/>
                            <InputRange title={"Shadow Color Opacity"} step={shadow.opacityStep} name="shadowOpacity" value={shadow.shadowOpacity} 
                                        onChange={onInputChange} min={"0"} max={"1"}/>

                            <div className="colorArea">
                                <ColorSelect title={"Shadow Color"} name={"shadowColor"} value={color} onChange={onColorChange}/>
                            </div>
                        </div>
                </div>

                <TextShape  shadow={shadow} color={color} />



            </div>
        </div>
    )
}

export default ShadowText;