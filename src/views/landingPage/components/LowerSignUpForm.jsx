import React from 'react'
//Component
import Button from "../../../utility/components/Button"
import Input from "../../../utility/components/Input"
//Assets
import {iconsLight} from "../../../assets/icons"

function LowerSignUpForm({input, setInput}) {
    return (
        <div className="bg-black flex flex-col items-center py-8 rounded-lg">
            <h2 className="text-white text-center"> Where Should We Add Next? </h2>
            <h4 className="text-white text-center"> I want to focus on the cities our food-comrades live! </h4>
            <div className="flex flex-col justify-center md:flex-row w-full px-4 md:px-0 md:max-w-2xl gap-4 mt-4"> 
                <div className="md:w-1/5" >
                    <Input state={input} setState={setInput} name="city" placeholder="Enter City"/>
                </div>
                <div className="md:w-3/5" >
                    <Input state={input} setState={setInput} name="email" placeholder="Enter eMail Address"/>
                </div>
                <Button content="Submit" color="white" background="green" icon={iconsLight.sendIcon} />
            </div>
        </div>
    )
}

export default LowerSignUpForm
