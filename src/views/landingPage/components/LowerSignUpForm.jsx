import React, {useState} from 'react'
import {AnimatePresence, motion} from "framer-motion"
//Component
import {POST_earlyEmail} from "../../../utility/requestHandler"
import Button from "../../../utility/components/Button"
import Input from "../../../utility/components/Input"

//Assets
import {iconsLight} from "../../../assets/icons"
import EmailNotification from './EmailNotification'

function LowerSignUpForm({input, setInput}) {

    const [notification, setNotification] = useState(null)

    function postAndNotify(){
        POST_earlyEmail(input).then( (res) => { 
            console.log(res)
            if ( res.status === 200){
                setNotification('good')
                setTimeout(() => {
                    setNotification(null)
                }, 3000);
            }else{
                console.log(res)
                setNotification('bad')
                setTimeout(() => {
                    setNotification(null)
                }, 3000);
            }
        }).catch(err => {
            console.log(err)
            setNotification('bad')
                setTimeout(() => {
                    setNotification(null)
                }, 3000);
        })
    }

    return (
        <div className="bg-black flex flex-col items-center py-8 rounded-lg">
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

            <h2 className="text-white text-center"> Where Should We Add Next? </h2>
            <h4 className="text-white text-center"> I want to focus on the cities our food-comrades live! </h4>
            <div className="flex flex-col justify-center md:flex-row w-full px-4 md:px-0 md:max-w-2xl gap-4 mt-4"> 
                <div className="md:w-1/5" >
                    <Input state={input} setState={setInput} name="city" placeholder="Enter City"/>
                </div>
                <div className="md:w-3/5" >
                    <Input state={input} setState={setInput} name="email" placeholder="Enter eMail Address" validation={true} />
                </div>
                <Button
                content="Submit"
                color="white"
                background="green"
                icon={iconsLight.sendIcon}
                onClick={()=> { postAndNotify() }}
                 />
            </div>
        </div>
    )
}

export default LowerSignUpForm
