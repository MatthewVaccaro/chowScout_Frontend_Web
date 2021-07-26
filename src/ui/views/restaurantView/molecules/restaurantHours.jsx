import { useContext } from "react";
import { restaurantContext } from "../../../../data/context/restaurantContext";


function RestaurantHoursDisplay({restaurantHours}) {
    const [{ methods }] = useContext(restaurantContext);
    const hoursData = methods.restaurantTimeData(restaurantHours)
		return (
			<div className='max-w-full rounded sm:flex sm:items-center sm:flex-col'>
                <div className='font-semibold bg-darkGray text-center rounded-md w-1/5'>   
                    {hoursData === false ? `Closed` : 'open' ? <div><span className='text-green'>Open</span>{` Until ${hoursData.restaurantCurrent.TimeClose - 1200} ${hoursData.restaurantCurrent.CloseMerridian}`} </div>: <div><span className='text-red'>Closed</span>{` Until ${hoursData.restaurantCurrent.TimeOpen} ${hoursData.restaurantCurrent.OpenMerridian}`}</div>}
                </div>
            </div>
		);
}

export default RestaurantHoursDisplay;

