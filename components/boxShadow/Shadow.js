import React,{useState} from 'react';
import InputRange from '../InputRange';
import ColorSelect from '../ColorSelect';
import ShadowShape from './ShadowShape';
import hexRgb from 'hex-rgb';
import InputSwitch from '../InputSwitch';
const INITIAL_COLOR = {
    colorRed: "0",
    colorGreen: "0",
    colorBlue: "0"
}

const INITIAL_SHADOW = {
    hShadowLength: "0",
    vShadowLength: "0",
    blurRadius: "5",
    spreadRadius: "0",
    shadowOpacity: "0.75",
    opacityStep: "0.1"
    
}

const Shadow = () =>{

    const [color,setColor] = useState(INITIAL_COLOR);
    const [shadow,setShadow] = useState(INITIAL_SHADOW);
    const [inset,setInset] = useState("");

    const onInputChange = (event) =>{
        // setRadius(event.target.value);
        setShadow({...shadow,[event.target.name] : event.target.value})
        
    }
    const onColorChange = (event) =>{
        
        
        var rgb = hexRgb(event.target.value);
        setColor(rgb)
        
       
    }

    const onCheckBox = (event) =>{
        
        if(inset === ""){
            setInset("inset")
        }
        else{
            setInset("")
        }
        
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
                            <InputRange title={"Spread Radius"} name="spreadRadius" value={shadow.spreadRadius} 
                                        onChange={onInputChange} min={"-100"} max={"110"}/>
                            <InputRange title={"Shadow Color Opacity"} step={shadow.opacityStep} name="shadowOpacity" value={shadow.shadowOpacity} 
                                        onChange={onInputChange} min={"0"} max={"1"}/>
                            <InputSwitch title={"Inset"} value={""} onChange={onCheckBox}/>
                            <div className="colorArea">
                                <ColorSelect title={"Shadow Color"} name={"shadowColor"} value={color} onChange={onColorChange}/>
                            </div>
                        </div>
                </div>


                <ShadowShape shadow={shadow} color={color} inset={inset}/>


            </div>
        </div>
    )
}

export default Shadow;