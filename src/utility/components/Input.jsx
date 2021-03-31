import React,{useState} from 'react'
import {changeHandler} from "../helperFunctions"


function Input({name, state, setState, placeholder, validation = false}) {

    function validateEmail(e, string){
        if (string.includes('@')){
            e.target.classList.remove('border-darkGray')
            e.target.classList.add('border-green')
        }else{
            e.target.classList.remove('border-darkGray')
            e.target.classList.remove('border-green')
            e.target.classList.add('border-red')

        }
    }

    return (
<div>
    <input
    className="border-darkGray border-2 py-4 px-4 w-full text-base bg-white rounded-md focus:border-blue  transition-all duration-300"
    style={{outline: 'none'}}
    name={name}
    placeholder={ placeholder ? placeholder : name }
    value={state ? state[name] : ""}
    onChange={(e)=>{changeHandler(e, state, setState)}}
    onBlur={(e)=> { validation ? validateEmail(e, state[name]) : console.log()}}
    />
</div>
    )
}

export default Input
