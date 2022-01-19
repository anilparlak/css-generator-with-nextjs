const InputSwitch = ({title,value,onChange}) =>{
    return(
        <div>
             <div className="switch-slider">
                 <span>{title}</span>
                    <label class="switch">
                        <input type="checkbox" value={value} onChange={onChange}/>
                        <span class="slider round"></span>
                    </label>
            </div>
        </div>
    )
}

export default InputSwitch;