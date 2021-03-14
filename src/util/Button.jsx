import React from 'react'

function Button({content, icon, color="white", background}) {
    return ( 
        <button className={`bg-${background} flex items-center py-4 px-6 rounded-md`} >
            <p className={`text-${color} font-medium mr-4`} > {content} </p>
            <img src={icon} alt="icon"/>
        </button>    
    )
}

export default Button
