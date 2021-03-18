import React, {useState} from 'react'
import Button from "../../components/Button"
import breakfastTablePhoto from "../../assets/photos/breakfastTablePhoto.png"
import {iconsLight} from "../../assets/icons"
import chowScoutLogo from "../../assets/graphics/chowScoutLogo.svg"
import UpdateDialog from './components/updateDialog'

function LandingPage() {

    const [input, setInput] = useState({ fieldOne: "", fieldTwo: "" })
    const [dialog, setDialog] = useState(false)

    function changeHander(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    const viewPortSize = window.innerWidth

    return (
        <div className=" px-4 sm:px-0 max-w-screen-lg mx-auto">
            <img className="mx-auto mt-6 sm:mb-20" src={chowScoutLogo} alt="ChowScout Logo in Green"/>
                
                <div className="text-black bg-yellow font-bold p-2 inline-block rounded-md mb-4 mt-12"> Coming Soon </div>
                <div className="sm:w-7/12">
                    <h1 className="mb-6 text-black" > What is your belly hungry for? </h1>
                    <h3 className="mb-6 font-medium text-black70"> A wickedly simple, food focused search engine. Tell us what you’re hankering and we’ll show you who serves it! </h3>
            
                </div>
                <Button onClick={()=>{ viewPortSize <= 375 ? setDialog(true) || window.scrollTo(0, 0) : console.log("sent")}} content={viewPortSize <= 375 ? "Get Updates" : "Submit"} icon={iconsLight.sendIcon} background="green" />
                
            <p className="hidden sm:block text-black mt-10"> Sounds Tasty? Add your email to be notified of release! </p>
            <div className="flex justify-between mt-2 sm:w-7/12 " >
                <input
                    className="hidden sm:inline-block border-darkGray border-2 py-4 px-4 text-base bg-white w-3/4 rounded-md"
                    name="fieldOne"
                    placeholder="Enter Email Address"
                    value={input.fieldOne}
                    onChange={(e)=> changeHander(e)}
                />
                
            </div>
            {dialog ? (
                <>
                <div className=" absolute top-0 left-0 w-full h-full bg-black50"/>
                <div className="absolute bg-white rounded-t-3xl z-10 bottom-0 left-0 w-full sm:hidden">
                    <UpdateDialog setDialog={setDialog} setInput={setInput} input={input.fieldOne}  />
                </div>
                </>
                )
                :
                ""
            }
            <img className=" hidden sm:block sm:object-cover sm:absolute sm:z-0 sm:rounded-l-3xl sm:right-0 sm:top-36 sm:w-2/5 sm:h-3/5 "  src={breakfastTablePhoto} alt="A top down few of a table filled with an assortment of delicious looking breakfast food." />
        </div>
    )
}

export default LandingPage
