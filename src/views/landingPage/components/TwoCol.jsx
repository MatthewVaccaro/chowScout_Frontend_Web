import React from 'react'
import FauxSearchBar from './SearchAnimationComponents/FauxSearchBar'


function TwoCol() {
    return (
        <div className="flex flex-col justify-between gap-4 mt-24 sm:flex-row ">
                <div className=" w-full sm:w-3/5">
                <h2>The new way to discover amazing place & food!</h2>
                <h3 className="text-black70 font-medium mt-4" >For too long we’ve been forced to look for places that serve what you hunger for! The tables have turned, discover all the eateries who have what you desire!</h3>
                </div>

                <FauxSearchBar />
            </div>
    )
}

export default TwoCol
