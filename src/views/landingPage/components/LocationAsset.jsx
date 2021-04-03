import React from 'react'
import nashvillePhoto from "../../../assets/photos/nashvillePhoto.png"

function LocationAsset() {
    return (
        <div className="sm:w-2/5" >
            <img className="rounded-lg" src={nashvillePhoto} alt="The skyline of Nashville in mid day" />
            <h2 className="ml-3 text-white" style={{marginTop: '-50px'}} > Nashville, TN </h2>
            <div className="flex mt-4">
            <h4 className="text-black70 mr-4 font-bold"> <span className="bg-black text-white rounded font-bold px-2 py-1 mr-2" >152</span> Restaurants </h4>
            <h4 className="text-black70  font-bold"> <span className="bg-black text-white rounded font-bold px-2 py-1 mr-2" >3496</span> Dishes </h4>
            </div>
        </div>
    )
}

export default LocationAsset
