import React from 'react'


function TwoCol({header, paragraph, rightCol}) {
    return (
        <div className="flex flex-col justify-between gap-4 my-24 md:flex-row">
                <div className=" w-full sm:w-3/5">
                <h2>{header}</h2>
                <h3 className="text-black70 font-medium mt-4" >{paragraph}</h3>
                </div>
                {rightCol}
            </div>
    )
}

export default TwoCol
