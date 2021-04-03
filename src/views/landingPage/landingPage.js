// Deps
import React, {useState} from 'react'
// Utils
import {POST_earlyEmail} from "../../utility/requestHandler"
import Button from "../../utility/components/Button"
import Input from "../../utility/components/Input"
//Components
import UpdateDialog from './components/updateDialog'
import TwoCol from './components/TwoCol'


//Assets
import chowScoutLogo from "../../assets/graphics/chowScoutLogo.svg"
import {iconsLight, iconsDark} from "../../assets/icons"
import breakfastTablePhoto from "../../assets/photos/breakfastTablePhoto.png"
import FauxSearchBar from './components/SearchAnimationComponents/FauxSearchBar'
import LocationAsset from './components/LocationAsset'
import LowerSignUpForm from './components/LowerSignUpForm'
import { motion, AnimatePresence } from 'framer-motion'
import EmailNotification from './components/EmailNotification'




function LandingPage() {

    const [input, setInput] = useState({ email: "", city: "" })
    const [dialog, setDialog] = useState(false)
    const [notification, setNotification] = useState(null)

    const viewPortSize = window.innerWidth

    window.onscroll = ()=>{  if( window.scrollY > 300 ){ setDialog(false)  } }

    function dialogPop(){
            window.scrollTo(0, 0)
            setTimeout(() => { setDialog(true)}, 100) 
    }

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
        <div className="mainContainer w-full h-full">
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
            
            <img className="mx-auto mt-6 sm:mb-20" src={chowScoutLogo} alt="ChowScout Logo in Green"/>
            <div className="text-black bg-yellow font-bold p-2 inline-block rounded-md mb-4 mt-12 sm:mt-5"> Coming Soon </div>
        <div className="flex justify-between w-full">
            <div className="">
                    <h1 onClick={()=>{ setNotification(!notification) }} className="mb-6 text-black" > What is your belly hungry for? </h1>
                    <h3 className="mb-6 font-medium text-black70"> A wickedly simple, food focused search engine. Tell us what you’re hankering and we’ll show you who serves it! </h3>
                    <p className="hidden sm:block text-black mt-10"> Sounds Tasty? Add your email to be notified of release! </p>

                    <div className="flex justify-between mt-2 gap-4" >
                    <div className="hidden sm:inline-block w-5/6" >
                    <Input state={input} setState={setInput} name="email" placeholder="enter email address" validation={true}/>
                    </div>
                    <Button onClick={()=>{ viewPortSize < 640 ? dialogPop() : postAndNotify() }} content={viewPortSize < 640 ? "Get Updates" : "Submit"} icon={iconsLight.sendIcon} background="green" />
            </div>

            </div>
            <div className="hidden w-5/6 lg:block"/>
        </div>
        <AnimatePresence>
        {dialog ? (
                <>
                        <motion.div
                        initial={{opacity: '0%', height: '0%'}}
                        animate={{opacity: '100%', height: '400%'}}
                        exit={{opacity: '0%'}}
                        className=" absolute top-0 left-0 w-full bg-black50"/>
                        <motion.div 
                        initial={{bottom: '-230px'}}
                        animate={{bottom: '400px'}}
                        exit={{bottom: '900px', opacity: '0%'}}
                        style={{width: '359px'}}
                        className="absolute bg-white rounded-3xl z-10 left-2 sm:hidden">
                            <UpdateDialog setDialog={setDialog} setInput={setInput} input={input}  />
                        </motion.div>
                </>
                )
                :
                ""
            }
            </AnimatePresence>
            <img className=" hidden lg:block sm:object-cover sm:absolute sm:z-0 sm:rounded-l-3xl sm:right-0 sm:top-36 sm:w-2/5" style={{height: "550px"}}  src={breakfastTablePhoto} alt="A top down few of a table filled with an assortment of delicious looking breakfast food." /> 
            <TwoCol header="The new way to discover amazing place & food!" paragraph="For too long we’ve been forced to look for places that serve what you hunger for! The tables have turned, discover all the eateries who have what you desire!" rightCol={ <FauxSearchBar /> } />

            <TwoCol header="Current available locations" paragraph="I’m one lad trying to catalog all the restaurants in the United States. Starting in my current home town Nashville and going where ever hungry humans call! I’m working hard to add in new cities as quickly as possible." rightCol={ <LocationAsset /> } />

            <LowerSignUpForm input={input} setInput={setInput} />

            <footer className="flex flex-col items-center my-24 cursor-pointer">
                <a href="https://twitter.com/EarHolesMcgee" target="blank">
                    <div className="flex items-center">
                    <img src={iconsDark.twitterIcon} alt="twitter Icon"/>
                    <h4 className="text-black70 ml-2"> Twitter </h4>
                    </div>
                </a>
                <h5 className="text-black50 my-3">All rights reserved ® ChowScout 2021</h5>
                <img src={chowScoutLogo} alt="chowScout Logo"/>
            </footer>
            
        </div>
    )
}

export default LandingPage
