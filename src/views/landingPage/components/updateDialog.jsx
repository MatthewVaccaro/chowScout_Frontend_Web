import React from 'react'
import Button from "../../../components/Button"
import {iconsLight, iconsDark} from "../../../assets/icons"

function UpdateDialog({setDialog, setInput, input}) {

    const viewPortSize = window.innerWidth

    return (
        <div className=" bg-white p-4 rounded-t-3xl" >
            <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-black" >🤤 Hungry For Updates?</h3>
            <img onClick={()=> setDialog(false)} src={iconsDark.closeIcon} alt="close icon"/>
            </div>
            <p className="mb-4 text-black" > It means the world to me that you’re interested in ChowScout! I promise you will only recieve emails about Beta testing and final lauch 🚀 </p>
            <div className="flex justify-between">
            <input
            className="border-darkGray border-2 py-4 px-4 text-base bg-white w-3/4 rounded-md"
            name="fieldOne"
            placeholder="Enter Email Address"
            value={input}
            />
            <Button content={viewPortSize === 375 ? "" : "Submit"} icon={iconsLight.sendIcon} background="green" />
            </div>
        </div>
    )
}

export default UpdateDialog
