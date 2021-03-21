import React from 'react'


function TwoCol({rightCol}) {
    return (
        <div className="flex flex-col justify-between gap-4 mt-24 md:flex-row">
                <div className=" w-full sm:w-3/5">
                <h2>The new way to discover amazing place & food!</h2>
                <h3 className="text-black70 font-medium mt-4" >For too long we’ve been forced to look for places that serve what you hunger for! The tables have turned, discover all the eateries who have what you desire!</h3>
                </div>
                {rightCol}
            </div>
    )
}

export default TwoCol
