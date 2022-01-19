const OptionSelect = ({onChange,value,name,title,option}) => {

    return(
       
            <div className="switch-slider">
                <label htmlFor="borderStyle">{title}</label>
                <select name={name} id="borderStyle" onChange={onChange} value={value}>
                    {
                        option && option.map((item) =>(
                            <option value={item}>{item}</option>
                        ))
                    }
                   
                </select>
                
            </div>
      
    )
}

export default OptionSelect;