// Deps
import React, {useState} from 'react'
// Utils
import Button from "../../components/Button"
//Components
import UpdateDialog from './components/updateDialog'
import TwoCol from './components/TwoCol'


//Assets
import chowScoutLogo from "../../assets/graphics/chowScoutLogo.svg"
import {iconsLight} from "../../assets/icons"
import breakfastTablePhoto from "../../assets/photos/breakfastTablePhoto.png"
import FauxSearchBar from './components/SearchAnimationComponents/FauxSearchBar'



function LandingPage() {

    const [input, setInput] = useState({ fieldOne: "", fieldTwo: "" })
    const [dialog, setDialog] = useState(false)

    function changeHander(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    const viewPortSize = window.innerWidth

    return (
        <div className="mainContainer  w-full h-full">
            <img className="mx-auto mt-6 sm:mb-20" src={chowScoutLogo} alt="ChowScout Logo in Green"/>
            <div className="text-black bg-yellow font-bold p-2 inline-block rounded-md mb-4 mt-12 sm:mt-5"> Coming Soon </div>
        <div className="flex justify-between w-full">
            <div className="">
                    <h1 className="mb-6 text-black" > What is your belly hungry for? </h1>
                    <h3 className="mb-6 font-medium text-black70"> A wickedly simple, food focused search engine. Tell us what you’re hankering and we’ll show you who serves it! </h3>
                    <p className="hidden sm:block text-black mt-10"> Sounds Tasty? Add your email to be notified of release! </p>

                    <div className="flex justify-between mt-2 gap-4 " >
                    <input
                        className="hidden sm:inline-block border-darkGray border-2 py-4 px-4 text-base w-5/6 bg-white rounded-md"
                        name="fieldOne"
                        placeholder="Enter Email Address"
                        value={input.fieldOne}
                        onChange={(e)=> changeHander(e)}
                    />
                    <Button onClick={()=>{ viewPortSize < 640 ? setDialog(true) || window.scrollTo(0, 0) : console.log("sent")}} content={viewPortSize < 640 ? "Get Updates" : "Submit"} icon={iconsLight.sendIcon} background="green" />
            </div>

            </div>
            <div className="hidden w-5/6 lg:block"/>
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
            <img className=" hidden lg:block sm:object-cover sm:absolute sm:z-0 sm:rounded-l-3xl sm:right-0 sm:top-36 sm:w-2/5" style={{height: "550px"}}  src={breakfastTablePhoto} alt="A top down few of a table filled with an assortment of delicious looking breakfast food." /> 

            <TwoCol rightCol={ <FauxSearchBar /> } />

            <div className="bg-yellow" style={{width: '200px', height: '2000px'}}/>
            
        </div>
    )
}

export default LandingPage
