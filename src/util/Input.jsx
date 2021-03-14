import React, {useState} from 'react'

const changeHandler = (e, setState, state)=>{
    setState( {...state, [e.target.name]: e.target.value})
}

const blurHandler = (e, className) => {
    e.target.classList.add(className)
}

const focusHandler = (e, setState ) => {
    setState(e.target.defaultValue)
}

function Input({name, label, state, setState}) {

    const [initial, setInitial] = useState()
    console.log(state)
    return (
        <div>

{ state? 
<>
<label> {label} </label>
    <input
    name={name}
    placeholder={name}
    className=" border-darkGray bg-white text-base text-black rounded-md border-2"
    value={state ? state[name] : ""}
    onChange={(e) => {changeHandler(e, setState, state)}}
    onFocus={ e => e.target.classList.add('border-blue')} 
    onBlur={e => e.target.classList.remove('border-blue') }
    />
    </>
    :
    ""}
            
        </div>
    )
}

export default Input
