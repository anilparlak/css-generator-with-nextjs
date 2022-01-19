import React,{useState} from 'react';
import ColorSelect from '../ColorSelect';
import InputRange from '../InputRange';
import TransformShape from './TransformShape';

const INITIAL_TRANSFORM = {
    rotate: "0",
    scale: "1",
    scaleStep:"0.1",
    skew:"0",
    translateX:"0",
    translateY:"0"
    
}
const TransformPage = () =>{

    const [transform,setTransform] = useState(INITIAL_TRANSFORM);

    const onInputChange = (event) =>{
        setTransform({...transform,[event.target.name]: event.target.value})
    }
    return(
        <div>
            <div className="radius">
                <div className="side">
                
                        <div className="inputArea">
                            <InputRange title={"Rotate"} name="rotate" value={transform.rotate} 
                                        onChange={onInputChange} min={"0"} max={"360"} unit={"°"}/>
                            <InputRange title={"Scale"} name="scale" value={transform.scale} 
                                        onChange={onInputChange} min={"0.1"} max={"2"} step={transform.scaleStep} unit={" "}/>
                            <InputRange title={"Skew"} name="skew" value={transform.skew} 
                                        onChange={onInputChange} min={"-180"} max={"180"} unit={"°"}/>
                           <InputRange title={"Translate X"} name="translateX" value={transform.translateX} 
                                        onChange={onInputChange} min={"-200"} max={"200"}  />
                            <InputRange title={"Translate Y"} name="translateY" value={transform.translateY} 
                                        onChange={onInputChange} min={"-200"} max={"200"}  />
                        </div>
                </div>

                <TransformShape transform={transform} />

            </div>
        </div>
    )
}

export default TransformPage;