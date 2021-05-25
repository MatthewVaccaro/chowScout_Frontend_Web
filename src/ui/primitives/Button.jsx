import React from 'react'

function Button({content, icon, color="white", background, onClick}) {
    return ( 
        <button
        onClick={onClick}
        className={`bg-${background} flex items-center justify-center py-4 px-6 rounded-md hover:bg-${background}50 transition-all duration-300`} >
            { content ? <p className={`text-${color} font-medium mr-4`} > {content} </p> : ""}
            <img src={icon} alt="icon"/>
        </button>    
    )
}

export default Button