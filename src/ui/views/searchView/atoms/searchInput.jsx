import React from 'react'
import {changeHandler} from "../../../../logic/helperFunctions"


function SearchInput({}) {

    return (
<div className="w-full" >
    <input
    id="searchInput"
    className="text-2xl w-full "
    style={{outline: 'none'}}
    name="search"
    placeholder="Enter Search Here"

    />
</div>
    )
}

export default SearchInput
