import { useState } from "react"
import {motion, motionValue} from "framer-motion"

//atoms
import ClearButton from "../atoms/clearButton"
import SearchInput from "../atoms/searchInput"

//Assets
import {iconsDark} from "../../../assets/icons"

function SearchBar() {

    const [select, setSelect] = useState(false)
    const selectValues = {
        active: { border: "2px solid #09F",
        transition: { duration: 0.3 } },
        inactive: {border: "2px solid #fff",
        transition: { duration: 0.3 }} }
    

    return (
        <motion.div
        initial={{border: "2px solid #fff"}}
        variants={selectValues}
        animate={select ? "active" : "inactive" }
        className="rounded-lg p-4 w-full mt-3 flex items-center justify-between transition-all duration-300 bg-white">
            <div className="flex w-full" style={{border: "s"}}>
                <img className="mr-3" src={iconsDark.searchIcon} alt="search icon"/>
                <div onClick={() => setSelect(true)} onBlur={() => setSelect(false)} className="w-full">
                <SearchInput />
                </div>
            </div>
            <ClearButton/>
        </motion.div>
    )
}

export default SearchBar
