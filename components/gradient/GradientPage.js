import React,{useState} from 'react';
import ColorSelect from '../ColorSelect';
import InputRange from '../InputRange';
import OptionSelect from '../OptionSelect';
import GradientShape from './GradientShape';


const OPTION_NAME = ["linear","radial","elliptical","repeat linear","repeat radial","repeat elliptical"];
const SIZE_NAME = ["farthest-corner","farthest-side"];
const POSITION_NAME = ["top left","top center","top right","left center", "center center","right center","bottom left","bottom center","bottom right"];


const INITIAL_OPTION = {
    orientation: "linear",
    size: "farthest-corner",
    positionG: "center center"
}
const INITIAL_INPUT = {
    degree: "90"
}
const INITIAL_COLOR = {
    startColor:"#ff0000",
    endColor:"#00ff00"
}
const GradientPage = () =>{

    const [option,setOption] = useState(INITIAL_OPTION);
    const [input,setInput] = useState(INITIAL_INPUT);
    const [color,setColor] = useState(INITIAL_COLOR);

    const onInputChange = (event) => {
        setInput({...input,[event.target.name] : event.target.value})
    } 

    const onOptionSelect = (event) =>{
        setOption({...option,[event.target.name] : event.target.value})
    }
    const onColorChange = (event) =>{
        setColor( {...color,[event.target.name] : event.target.value})
       
    }
    return(
        <div>
            <div className="radius">
                <div className="side">
                        <div className="inputArea">
                            <OptionSelect onChange={onOptionSelect} name="orientation" value={option.orientation} title={"Orientation"} option={OPTION_NAME}/>
                            {
                                option.orientation && (option.orientation === "linear" || option.orientation === "repeat linear")? 
                                    <InputRange title={"Degree"} name="degree" value={input.degree} 
                                                onChange={onInputChange} min={"0"} max={"360"} unit={"°"}/>
                                :   <><OptionSelect onChange={onOptionSelect} name="size" value={option.size} title={"Size"} option={SIZE_NAME}/>  
                                     <OptionSelect onChange={onOptionSelect} name="positionG" value={option.positionG} title={"Position"} option={POSITION_NAME}/></>

                            }
                            

                            <div className="colorArea">
                                <ColorSelect title={"Start Color"} name={"startColor"} value={color.startColor} onChange={onColorChange}/>
                                <ColorSelect title={"End Color"} name={"endColor"} value={color.endColor} onChange={onColorChange}/>
                            </div>
                        </div>    
                </div>

                <GradientShape color={color} option={option} input={input} />
               

            </div>
        </div>
    )
}

export default GradientPage;