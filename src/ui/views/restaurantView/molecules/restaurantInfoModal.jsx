import { useContext } from "react";
import { restaurantContext } from "../../../../data/context/restaurantContext";

function RestaurantInfoModal({restaurantInfo}) {
	const [{ methods }] = useContext(restaurantContext);
	const hoursInfo = methods.restaurantHoursInfo(restaurantInfo);
	const date = new Date()
	const today = date.getDay()
	console.log(today)
		return (
		<div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
			<div class="modal-overlay absolute w-full h-full bg-black opacity-50"></div>
			<div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
					<svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
					<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
					</svg>
					<span class="text-sm">(Esc)</span>
				</div>
				<div class="modal-content py-4 text-left px-6">
					{/* <!--Title--> */}
					<div class="flex justify-between items-center pb-3">
					<p class="text-2xl font-bold">Location</p>
					<div class="modal-close cursor-pointer z-50">
						<svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
						<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
						</svg>
					</div>
					</div>
					{/* <!--Body business location--> */}
					<div className="shadow-lg py-2 bg-white">
						
					</div>

					{/* <!--Body business hours--> */}
					<p class="text-2xl font-bold">Business Hours</p>
					<div className="shadow-lg py-2 bg-white">
						{hoursInfo.slice(2).map(dayAndTime => (
							<div key={dayAndTime[0]} className={today === dayAndTime[0] ? "text-green" : ""}>
								<span>{dayAndTime[1]}</span>
								<span>{dayAndTime[2]}</span>
								<br/>
							</div>
						))}
					</div>		
				</div>
			</div>
		</div>
		);
}

export default RestaurantInfoModal;


// opacity-0, place this on the main div later