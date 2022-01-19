import React,{useState} from 'react';
import InputRange from '../InputRange';
import FilterShape from './FilterShape';

const INITIAL_FILTER = {
    grayscale:"0",
    sepia:"0",
    blur:"0",
    brightness:"100",
    hueRotate: "0",
    saturate: "100",
    opacity: "100",
    contrast: "100",
    invert: "0"
}
const FilterPage =() =>{

    const [filter,setFilter] = useState(INITIAL_FILTER);

    const onInputChange = (event) => {

        setFilter({...filter,[event.target.name]: event.target.value});
    }
    return (
        <div>
            <div className="radius">
                <div className="side">
                        <div className="inputArea">
                            <InputRange title={"Grayscale"} name="grayscale" value={filter.grayscale} 
                                        onChange={onInputChange} min={"0"} max={"100"} unit={"%"} />
                            <InputRange title={"Sepia"} name="sepia" value={filter.sepia} 
                                        onChange={onInputChange} min={"0"} max={"100"} unit={"%"}/>
                            <InputRange title={"Blur"} name="blur" value={filter.blur} 
                                        onChange={onInputChange} min={"0"} max={"10"} />
                            <InputRange title={"Brightness"} name="brightness" value={filter.brightness} 
                                        onChange={onInputChange} min={"0"} max={"200"} unit={"%"} />
                            <InputRange title={"Hue Rotate"} name="hueRotate" value={filter.hueRotate} 
                                        onChange={onInputChange} min={"0"} max={"360"} unit={"°"} />
                            <InputRange title={"Saturate"} name="saturate" value={filter.saturate} 
                                        onChange={onInputChange} min={"0"} max={"1000"} unit={"%"} />
                            <InputRange title={"Opacity"} name="opacity" value={filter.opacity} 
                                        onChange={onInputChange} min={"0"} max={"100"} unit={"%"} />
                            <InputRange title={"Contrast"} name="contrast" value={filter.contrast} 
                                        onChange={onInputChange} min={"0"} max={"1000"} unit={"%"} />
                            <InputRange title={"Invert"} name="invert" value={filter.invert} 
                                        onChange={onInputChange} min={"0"} max={"100"} unit={"%"} />
                        </div>    
                </div>
                <FilterShape filter={filter}/>

            </div>
        </div>
    )
}

export default FilterPage;