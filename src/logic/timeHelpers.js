var testObj = {
    id: 567,
    restaurant_ref: 567,
    mon: "11:00 AM 09:00 PM",
    tue: "11:00 AM 09:00 PM",
    wed: "11:00 AM 09:00 PM",
    thu: "11:00 AM 09:00 PM",
    fri: "04:00 PM 3:00 AM",
    sat: "04:00 PM 2:00 AM",
    sun: "12:00 PM 09:00 PM"
  }
const date = new Date();
const day = date.getDay(); // Returns INT 0 - 6
const allDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const localTimeArr = date.toString().split(' ');
const localDay = localTimeArr[0].toLowerCase();
const pastDay = day === 0 ? allDays[6] : allDays[day - 1];
const currentTime = parseInt(localTimeArr[4].split(':')[0] + localTimeArr[4].split(':')[1]);

const fullTime = {
    isRestaurantOpen: null,
    restaurantCurrent: {
        day: localDay,
        TimeOpen: 0,
        TimeClose: 0,
        OpenMerridian: '',
        CloseMerridian: '',
        isClosed: null
    },
    restaurantPast: {
        day: pastDay,
        TimeOpen: 0,
        TimeClose: 0,
        OpenMerridian: '',
        CloseMerridian: '',
        isClosed: null
    },

}

    


let stringToInt = (timeAsString) => {
    return parseInt(timeAsString.split(':').join(''))
}

export function setupTimes (restaurantHours) {
    const restaurantCurrentDayTime = restaurantHours[localDay].split(' ') //splits this value --> "mon": "11:00 AM 09:00 PM"
    if (restaurantCurrentDayTime[0] !== "Closed") {
        fullTime.restaurantCurrent.OpenMerridian = restaurantCurrentDayTime[1]
        fullTime.restaurantCurrent.CloseMerridian = restaurantCurrentDayTime[3]
        fullTime.restaurantCurrent.TimeOpen = (fullTime.restaurantCurrent.OpenMerridian === "AM" ? (stringToInt(restaurantCurrentDayTime[0])) : (stringToInt(restaurantCurrentDayTime[0]) + 1200));
        fullTime.restaurantCurrent.TimeClose = (restaurantCurrentDayTime[3] === "PM" ? (stringToInt(restaurantCurrentDayTime[2])+1200) : (stringToInt(restaurantCurrentDayTime[2])));
        fullTime.restaurantCurrent.isClosed = false
    }
    else {
        fullTime.restaurantCurrent.isClosed = true
    }

    const restaurantPastDayTime = restaurantHours[pastDay].split(' ') //splits this value --> "mon": "11:00 AM 09:00 PM"
    if (restaurantPastDayTime !== "Closed") {
        fullTime.restaurantPast.OpenMerridian = restaurantPastDayTime[1]
        fullTime.restaurantPast.CloseMerridian = restaurantPastDayTime[3]
        fullTime.restaurantPast.TimeOpen = (fullTime.restaurantPast.OpenMerridian  === "AM" ? (stringToInt(restaurantPastDayTime[0])) : (stringToInt(restaurantPastDayTime[0]) + 1200));
        fullTime.restaurantPast.TimeClose = (fullTime.restaurantPast.CloseMerridian === "PM" ? (stringToInt(restaurantPastDayTime[2])+1200) : (stringToInt(restaurantPastDayTime[2])));
        fullTime.restaurantPast.isClosed = false
    }
    else {
        fullTime.restaurantPast.isClosed = true
    }
    return fullTime
}

export function isOpen() {
    if (fullTime.restaurantPast.isClosed === false && fullTime.restaurantPast.CloseMerridian === 'AM') {
        if (fullTime.restaurantPast.TimeClose > currentTime) {
            fullTime.isRestaurantOpen = true
            return fullTime
        }
    }
    if (fullTime.restaurantCurrent.isClosed === true) {
        fullTime.isRestaurantOpen = false
        return fullTime
    }
    if (fullTime.restaurantCurrent.TimeOpen < currentTime && fullTime.restaurantCurrent.TimeClose > currentTime) {
        fullTime.isRestaurantOpen = true
        return fullTime
    }
    if (currentTime > fullTime.restaurantCurrent.TimeOpen && fullTime.restaurantCurrent.CloseMerridian === 'AM') {
        fullTime.isRestaurantOpen = true
        return fullTime
    }
}
