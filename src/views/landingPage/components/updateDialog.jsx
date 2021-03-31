import React from 'react'
import Button from "../../../utility/components/Button"
import Input from "../../../utility/components/Input"
import {iconsLight, iconsDark} from "../../../assets/icons"
import {motion} from "framer-motion"

function UpdateDialog({setDialog, setInput, input}) {

    const viewPortSize = window.innerWidth

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
                <div className="w-3/4" >
                    <Input state={input} setState={setInput} name="email" placeholder="Enter email address"/>
                </div>

            <Button content={viewPortSize < 500 ? "" : "Submit"} icon={iconsLight.sendIcon} background="green" />
            </div>
        </motion.div>
    )
}

export default UpdateDialog
