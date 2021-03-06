const ColorSelect = (props) =>{

    const {title,name,value,onChange} = props;
    return(
       
            <div style={{width:"50%"}}>
                <label htmlFor='colorbg'>{title}</label>
                <input  type="color" name={name} type="color" value={value} 
                    onChange={onChange}
                />
                <input type="text" placeholder={value} />
            </div>
          
        
   
    )
}

export default ColorSelect;