
import React,{useState} from 'react';
import RadiusShape from './RadiusShape';
import InputRange from '../InputRange';
import ColorSelect from '../ColorSelect';

const INITIAL_COLOR = {
    colorbg:"#2c3e50",
    colorborder:"#2c3e50"
}

const INITIAL_RADIUS = {
    allCorners: "0",
    topLeft: "0",
    topRight: "0",
    bottomLeft: "0",
    bottomRight: "0",
    borderWidth: "5"
}

const Radius = () => {

    const [color,setColor] = useState(INITIAL_COLOR);
    const [radius,setRadius] = useState(INITIAL_RADIUS);

    const onInputChange = (event) =>{
        // setRadius(event.target.value);
        if(event.target.name !== "allCorners"){
            setRadius({...radius,[event.target.name] : event.target.value})
         
        }else{
            setRadius({[event.target.name] : event.target.value})
       
        }
     
    }

    const onColorChange = (event) =>{
        setColor( {...color,[event.target.name] : event.target.value})
       
    }

    return(
        <div>
            <div className="radius">
                <div className="side">
                        <div className="inputArea">

                            <InputRange title={"All Corners"} name="allCorners" value={radius.allCorners} 
                                        onChange={onInputChange} min={"0"} max={"200"}/>
                            <InputRange title={"Top Left Corner"} name="topLeft" value={radius.topLeft? radius.topLeft : radius.allCorners } 
                                        onChange={onInputChange}  min={"0"} max={"200"}/>
                            <InputRange title={"Top Right Corner"} name="topRight" value={radius.topRight? radius.topRight : radius.allCorners } 
                                        onChange={onInputChange}  min={"0"} max={"200"}/>
                            <InputRange title={"Bottom Left Corner"} name="bottomLeft" value={radius.bottomLeft? radius.bottomLeft : radius.allCorners} 
                                        onChange={onInputChange}  min={"0"} max={"200"}/>
                            <InputRange title={"Bottom Right Corner"} name="bottomRight" value={radius.bottomRight? radius.bottomRight : radius.allCorners } 
                                        onChange={onInputChange}  min={"0"} max={"200"}/>
                            <InputRange title={"Border Width"} name="borderWidth" value={radius.borderWidth? radius.borderWidth : "0"} 
                                        onChange={onInputChange}  min={"0"} max={"200"}/>
                           
                            <div className="colorArea">
                                <ColorSelect title={"Background Color"} name={"colorbg"} value={color.colorbg} onChange={onColorChange}/>
                                <ColorSelect title={"Border Color"} name={"colorborder"} value={color.colorborder} onChange={onColorChange}/>
                            </div>
                        </div>
                </div>

                <RadiusShape radius = {radius} color = {color}/>
                

            </div>
        </div>

            
    )
}


export default Radius;