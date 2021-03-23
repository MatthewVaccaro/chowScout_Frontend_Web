import React from 'react'
import Button from "../../../components/Button"
import {iconsLight, iconsDark} from "../../../assets/icons"
import {motion} from "framer-motion"

function UpdateDialog({setDialog, setInput, input}) {

    const viewPortSize = window.innerWidth

    function changeHander(e){
        setInput({...input, [e.target.name]: e.target.value})
        console.log(input)
    }

    return (
        <motion.div
        initial={{opacity: '0%'}}
        animate={{opacity: '100%' , transition:{duration: .6, delay: .5}}}
        exit={{opacity: '0%'}}
        className=" bg-white p-4 rounded-t-3xl overflow-y-hidden" >
            <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-black" >🤤 Hungry For Updates?</h3>
            <img onClick={()=> setDialog(false)} src={iconsDark.closeIcon} alt="close icon"/>
            </div>
            <p className="mb-4 text-black" > It means the world to me that you’re interested in ChowScout! I promise you will only recieve emails about Beta testing and final launch 🚀 </p>
            <div className="flex justify-between">
            <input
            className="border-darkGray border-2 py-4 px-4 text-base bg-white w-3/4 rounded-md"
            name="fieldOne"
            placeholder="Enter Email Address"
            value={input.fieldOne}
            onChange={(e)=>{changeHander(e)}}
            />
            <Button content={viewPortSize < 500 ? "" : "Submit"} icon={iconsLight.sendIcon} background="green" />
            </div>
        </motion.div>
    )
}

export default UpdateDialog
