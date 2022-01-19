import React,{useState} from 'react';
import ColorSelect from '../ColorSelect';
import InputRange from '../InputRange';
import OptionSelect from '../OptionSelect';
import BorderShape from './BorderShape';


const INITIAL_BORDER = {
    allWidth: "15"
}
const INITIAL_OPTION = {
    borderStyle: "solid"
}
const INITIAL_COLOR = {
    borderColor: "#2c3e50",
    borderBg: "#fff"
}

const OPTION_NAME = ["solid","dotted","double","groove","ridge","inset","outset","none","hidden"];
 
const BorderPage = () =>{

    const [border,setBorder] = useState(INITIAL_BORDER);
    const [option,setOption] = useState(INITIAL_OPTION);
    const [color,setColor] = useState(INITIAL_COLOR);

    const onOptionSelect = (event) =>{
        setOption({...option,[event.target.name] : event.target.value})
    }

    const onInputChange = (event) =>{
        // setRadius(event.target.value);
        setBorder({...border,[event.target.name] : event.target.value})
        
    }
    const onColorChange = (event) =>{
      setColor( {...color,[event.target.name] : event.target.value})
 
    }
    return(
        <div>
           <div className="radius">
                <div className="side">
                
                        <div className="inputArea">
            
                            <InputRange title={"Border Width"} name="allWidth" value={border.allWidth} 
                                        onChange={onInputChange} min={"0"} max={"200"}/>
                            <OptionSelect onChange={onOptionSelect} name="borderStyle" value={option.borderStyle} title={"Border Style"} option={OPTION_NAME} />
                            <div className="colorArea">
                                <ColorSelect title={"Border Color"} name={"borderColor"} value={color.borderColor} onChange={onColorChange}/>
                                <ColorSelect title={"Background Color"} name={"borderBg"} value={color.borderBg} onChange={onColorChange}/>
                            </div>
                           
                        </div>
                </div>

                <BorderShape border={border} option={option} color={color}/>

              
                

            </div>
        </div>
    )
}

export default BorderPage;