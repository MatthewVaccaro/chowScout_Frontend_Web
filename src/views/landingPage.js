import React, {useState} from 'react'
import Button from "../util/Button"
import breakfastTablePhoto from "../assets/photos/breakfastTablePhoto.png"
import {iconsLight} from "../assets/icons"
import chowScoutLogo from "../assets/graphics/chowScoutLogo.svg"
import chowScoutLogoWhite from "../assets/graphics/chowScoutLogoWhite.svg"

function LandingPage() {

    const [input, setInput] = useState({ fieldOne: "", fieldTwo: "" })

    function changeHander(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    const viewPortSize = window.innerWidth
    console.log(viewPortSize)

    return (
        <div className=" px-4 sm:px-0 max-w-screen-lg mx-auto">
            <div className="relative z-20 mb-10">
            <img className="mx-auto mt-6 mb-20" src={ viewPortSize === 375 ? chowScoutLogoWhite : chowScoutLogo } alt="ChowScout Logo in Green"/>
                
                <div className=" text-red p-2 inline-block rounded-md mb-4 mt-12" style={{background:"#FFF1F1"}} > Coming Soon </div>
                <div className=" z-20 sm:w-7/12">
                    <h1 className="mb-6 text-white sm:text-black" > What is your belly hungry for? </h1>
                    <h3 className="mb-6 font-medium text-white sm:text-black"> A wickedly simple, food focused search engine. Tell us what you’re hankering and we’ll show you who serves it! </h3>
            
                </div>
            </div>
            <p className=" text-black mt-4"> Sounds Tasty? Add your email to be notified of release! </p>
            <div className="flex justify-between mt-2 sm:w-7/12 " >
                <input
                    className=" border-darkGray border-2 py-4 px-4 text-base bg-white w-3/4 rounded-md"
                    name="fieldOne"
                    placeholder="Enter Email Address"
                    value={input.fieldOne}
                    onChange={(e)=> changeHander(e)}
                    />
                <Button content={viewPortSize === 375 ? "" : "Submit"} icon={iconsLight.sendIcon} background="green" />
            </div>
            { viewPortSize === 375 ? <div className="absolute top-0 right-0 w-full h-4/5 bg-black20 z-10 " /> : ""}
            <img className="object-cover absolute top-0 z-0 right-0 w-full h-4/5  sm:rounded-l-3xl  sm:right-0 sm:top-36 sm:w-2/5 sm:h-3/5 "  src={breakfastTablePhoto} alt="A top down few of a table filled with an assortment of delicious looking breakfast food." />
        </div>
    )
}

export default LandingPage
