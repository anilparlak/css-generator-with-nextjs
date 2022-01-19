const InputRange = (props) =>{
    const {title,name,value,onChange,min,max,step,unit} = props;
    
    return(
        <div>
            <div className="range-slider">
                                <label htmlFor='allCorners'>{title}</label>
                                <input className="range-slider__range" 
                                    type="range" value={value} min={min} max={max}
                                    name={name}
                                    onChange={onChange}
                                    step={step}

                                />
                                <span className="range-slider__value">{value} { unit? unit : `px` }</span>
            </div>
        </div>
    )
}

export default InputRange;