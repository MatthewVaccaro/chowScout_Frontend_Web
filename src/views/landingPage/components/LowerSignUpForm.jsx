import React from 'react'
//Component
import Button from "../../../components/Button"
//Assets
import {iconsLight} from "../../../assets/icons"

function LowerSignUpForm({input, setInput}) {

    function changeHander(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    return (
        <div className="bg-black flex flex-col items-center py-8 rounded-lg">
            <h2 className="text-white text-center"> Where Should We Add Next? </h2>
            <h4 className="text-white text-center"> I want to focus on the cities our food-comrades live! </h4>
            <div className="flex flex-col justify-center md:flex-row w-full px-4 md:px-0 md:max-w-2xl gap-4 mt-4">
            <input
            className="border-darkGray border-2 py-4 px-4 text-base bg-white rounded-md w-full md:w-1/5 focus:border-blue transition-all duration-500"
            style={{outline: 'none'}}
            onChange={(e)=>{changeHander(e)} }
            name="fieldTwo"
            value={input.fieldTwo}
            placeholder="Enter City"
            />
            <input
            className="border-darkGray border-2 py-4 px-4 text-base bg-white rounded-md w-full md:w-3/5 focus:border-blue transition-all duration-500"
            style={{outline: 'none'}}
            onChange={(e)=>{changeHander(e)} }
            name="fieldOne"
            value={input.fieldOne}
            placeholder="Enter Address"
            />
            <Button content="Submit" color="white" background="green" icon={iconsLight.sendIcon} />
            </div>
        </div>
    )
}

export default LowerSignUpForm
