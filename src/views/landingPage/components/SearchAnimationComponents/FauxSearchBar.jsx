import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {iconsDark} from "../../../../assets/icons"

function FauxSearchItem({restaurant, dish, price, description, change}) {
    
    return (
     
       
       <motion.div
       initial={{opacity: 0, marginTop: '40px'}}
       animate={{opacity: 1, marginTop: '16px'}}
       exit={{opacity: 0, marginTop: '40px'}}
       className="bg-white rounded-md shadow-lg flex flex-col mt-4">
            <div className='flex justify-center items-center bg-black rounded-t-lg py-2' > 
                <div className="bg-green w-3 h-3 rounded-full mr-2"/>
                <h6 className="text-white font-bold"> {restaurant} </h6>
            </div>
            <div className="px-2 py-2">
                <div className='flex justify-between' >
                    <p className="font-bold"> {dish} </p>
                    <p> {price} </p>
                </div>
                <h5 className="text-black70 mt-1">{description}</h5>
            </div>
        </motion.div>
    )
}

function FauxSearchBar() {

    const fauxData = [[{
        restaurant: "Hopdoddy",
        dish: "The Magic Shroom ",
        price: "$12.99",
        description: "Creamy goat cheese, field mushrooms, lettuce, tomato, onion, mayo & basil pesto sauce."
    },{
        restaurant: "Burger Up",
        dish: "Troyathlon",
        price: "$14.55",
        description: "Quinoa and black bean burger, lettuce, tomato, yellow cheddar, jack daniel's maple ketchup, fresh jalapeño, avocado."
    },{
        restaurant: "Emmy Squared",
        dish: "Le Big Matt",
        price: "$16.80",
        description: "double-stack beef patties, American cheese, Sammy Sauce on a pretzel bun."
    } ],
    [{
        restaurant: "Love, Peace, Pho",
        dish: "Bánh Mì",
        price: "$9.00",
        description: "Baguettes are lightly toasted and filled with hollandaise, pate, lettuce, cucumber, jalapeno, pickle radish, carrot & cilantro."
    },{
        restaurant: "East Side Banh Mi",
        dish: "Pork Banh Mi",
        price: "$9.79",
        description:'Black Pepper-Caramel Roasted Pork Shoulder. Served on Baguette w/ Fried Shallot Mayo, Pickled Veggies, Cilantro, Cucumber, Jalapeños & Maggi'
    },{
        restaurant: "Far East Nashville",
        dish: "Banh Mi",
        price: "$9.00",
        description: "Vietnamese bread stuffed with fresh cucumber, onion, cilantro, jalapeno, pickled radish &carrot, scallion oil with your choice of protein"
    } ],
    [{
        restaurant: "Taqueria del Sol",
        dish: "The Memphis",
        price: "$3.89",
        description: "Chopped smoked pork with a spicy jalapeños coleslaw & tequila bbq sauce."
    },{
        restaurant: "Carniceria Y Taqueria Don Juan",
        dish: "Taco Royale",
        price: "$3.75",
        description: "A double-stacked taco filled with roasted chicken, salsa verde, lettuce, pico de gallo, chorizo, creamy black bean, chipotle cream sauce."
    },{
        restaurant: "Bakersfield Tacos",
        dish: "Carnitas",
        price: "$5.00",
        description: "Beer braised pork, guacamole, tomatillo crema, pickled red onion, cilantro"
    } ]]
    const terms = ["Burgers", "Bánh Mì", "Tacos", ""];

    const [word, setWord] = useState(0); // Words
    const [letter, setLetter] = useState(0); // Letters
    const [reverse, setReverse] = useState(false);
    const [result, setResult] = useState()
    
    useEffect(() => {

        if (word === terms.length - 1 && letter === terms[word].length){
            setResult(fauxData[word])
            setWord(0)
            setLetter(0)
        }

        else{

            if (terms[word].length === letter && reverse === false){
                
                console.log(word)
                setResult(fauxData[word])
                const eachWordPause = setTimeout(() => {
                        console.log(result)
                        
                        setReverse(true)
                }, 3000);
                return
            }
    
            if (reverse === true && letter === 0){
                setReverse(false)
                setResult(null)
                setWord( (prev) => prev + 1)
                return
            }
    
            
            const timeout = setTimeout(() => {
                setLetter( (prev) => prev + (reverse ? -1 : 1) )
            }, reverse ? 100 : Math.random() * 500);

        }

      }, [letter, word, reverse]);
    
  
    return (
        <div style={{height: '550px'}} className="w-full sm:w-2/5" >
        <div className="flex items-center rounded-md shadow-xl px-3 py-2 w-full" >
            <img className="mr-4" src={iconsDark.searchIcon} alt="search icon"/>
            <h3 className="fauxSearch" > {terms[word].substring(0, letter)}
                <motion.span
                animate={{opacity: [0, 1, 0]}}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-blue">
                    |
                </motion.span>
                </h3> 
        </div>
        <AnimatePresence>
        {
        result ?
        result.map( value => <FauxSearchItem restaurant={value.restaurant} dish={value.dish} price={value.price} description={value.description} /> )
        :
        ""
        }
        </AnimatePresence>
        </div>
    )
}

export default FauxSearchBar