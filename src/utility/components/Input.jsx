import React from 'react'
import {changeHandler} from "../helperFunctions"


function Input({name, state, setState, placeholder}) {
    return (
<div>
    <input
    className="border-darkGray border-2 py-4 px-4 w-full text-base bg-white rounded-md focus:border-blue transition-all duration-300"
    style={{outline: 'none'}}
    name={name}
    placeholder={ placeholder ? placeholder : name }
    value={state ? state[name] : ""}
    onChange={(e)=>{changeHandler(e, state, setState)}}
    />
</div>
    )
}

export default Input
