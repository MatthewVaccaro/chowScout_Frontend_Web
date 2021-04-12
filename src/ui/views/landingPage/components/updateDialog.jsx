import React, {useState} from 'react'
import Button from "../../../primitives/Button"
import Input from "../../../primitives/Input"
import {POST_earlyEmail} from "../../../../logic/requestHandler"
import {iconsLight, iconsDark} from "../../../assets/icons"
import {motion, AnimatePresence} from "framer-motion"
import EmailNotification from './EmailNotification'

function UpdateDialog({setDialog, setInput, input}) {

    const viewPortSize = window.innerWidth

    const [notification, setNotification] = useState(null)

    function postAndNotify(){
        POST_earlyEmail(input).then( (res) => { 
            if ( res.status === 200){
                setNotification('good')
                setTimeout(() => {
                    setNotification(null)
                    setDialog(false)
                }, 1000);
            }else{
                console.log(res)
                setNotification('bad')
                setTimeout(() => {
                    setNotification(null)
                }, 1000);
            }
        }).catch( err => {
            console.log(err)
            setNotification('bad')
                setTimeout(() => {
                    setNotification(null)
                }, 1000);
        })
    }

    return (
        <motion.div
        initial={{opacity: '0%'}}
        animate={{opacity: '100%' , transition:{duration: .6, delay: .5}}}
        exit={{opacity: '0%'}}
        className=" bg-white p-4 rounded-3xl" >


            <AnimatePresence>
            { notification ? (<motion.div
            initial={{opacity: '0%', bottom: '-5rem'}}
            animate={{opacity: '100%', bottom: '50%'}}
            exit={{opacity: '0%', bottom: '-5rem'}}
            style={{transform: 'translateX(-50%)'}}
            className=" fixed bottom-4 left-1/2 z-20">
            <EmailNotification status={notification} />
            </motion.div>) : "" }
            </AnimatePresence>

            <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-black" >🤤 Hungry For Updates?</h3>
            <img onClick={()=> setDialog(false)} src={iconsDark.closeIcon} alt="close icon"/>
            </div>
            <p className="mb-4 text-black" > It means the world to me that you’re interested in ChowScout! I promise you will only recieve emails about Beta testing and final launch 🚀 </p>
            <div className="flex justify-between">
                <div className="w-3/4" >
                    <Input state={input} setState={setInput} name="email" placeholder="Enter email address" validation={true} />
                </div>

            <Button
            content={viewPortSize < 500 ? "" : "Submit"}
            icon={iconsLight.sendIcon} background="green"
            onClick={()=> {postAndNotify()}}
            />
            </div>
        </motion.div>
    )
}

export default UpdateDialog
