import React from 'react'


const restaurantOne = {
    "id": 17,
    "restaurant_ref": 17,
    "mon": "1:00 PM 1:30 AM",
    "tue": "10:00 AM 8:30 PM",
    "wed": "10:00 PM 4:30 AM",
    "thu": "10:00 AM 8:30 PM",
    "fri": "2:00 PM 10:30 PM",
    "sat": "10:00 AM 8:30 PM",
    "sun": "Closed"
  }

const date = new Date();

// this component makes the request with axios
// check if day is closed first ----- done

// have to add a zero at the end of whole hours (10:00) when converting to 24 hour --- done

// we check for am pm time, this determines what is converted to 24hour time
// convert time to 24 hour
// check if current time is more less or in between time range
// have to check if closing time is in the next day
// if closing time is AM and closing time is less than current time thant it is open

// if CT is less than open than closed
// if CT is greater than open and less than close than opened
// if CT is greater than open and greater than close than closed

// verify the current time by using the length. we know if current time is 4 than we use "is close time less than greater than open" else if the length of current time is 3 than we stick to the orginal operation

function RestaurantView() {
    let timeSlots = [];
    let restarauntHours = '';
    const allDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = date.toUTCString();
    const day = date.getDay();
    const localTime = new Date(today);
    const localTimeArr = localTime.toString().split(' ');
    const currentTime = localTimeArr[4]
    const yesterday = allDays[day - 1];
    console.log(yesterday)

    let currentTimeArray = currentTime.split(':');
    
    let stringToInt = (val) => {
        let arr = val.split(":")
        let fullTime = arr[0]+arr[1]
        let disfullTIme = parseInt(fullTime)
        return disfullTIme
    }

    let twoFourHourConversion = (val) => {
        let arr = val.split(":")
        console.log(arr, '24 hour conversion')
        if (arr[0] === "12") {
            let midDay = arr[0]+arr[1]
            let midTime = parseInt(midDay)
            return midTime
        }
        let addTwelve = parseInt(arr[0])+12
        arr[0] = addTwelve.toString()
        let fullTime = arr[0]+arr[1]
        let disfullTIme = parseInt(fullTime)
        return disfullTIme
    }
    

    let amOrpm = () =>{
        let time = restaurantOne[localTimeArr[0].toLowerCase()].split(' ')
        console.log(time)
        if (restaurantOne[localTimeArr[0].toLowerCase()] === "Closed") {
            timeSlots.push("closed")
            console.log(timeSlots)
        }
        if (time[1] === "AM" && time[3] === "AM") {
            timeSlots.push(stringToInt(time[0]))
            timeSlots.push(stringToInt(time[2]))
            timeSlots.push("AM")
            timeSlots.push("AM")
        }
        if (time[1] === "AM" && time[3] === "PM") {
            timeSlots.push(stringToInt(time[0]))
            timeSlots.push(twoFourHourConversion(time[2]))
            timeSlots.push("AM")
            timeSlots.push("PM")
        }
        if (time[1] === "PM" && time[3] === "PM") {
            timeSlots.push(twoFourHourConversion(time[0]))
            timeSlots.push(twoFourHourConversion(time[2]))
            timeSlots.push("PM")
            timeSlots.push("PM")
        }
        if (time[1] === "PM" && time[3] === "AM") {
            timeSlots.push(twoFourHourConversion(time[0]))
            timeSlots.push(stringToInt(time[2]))
            timeSlots.push("PM")
            timeSlots.push("AM")
        }
    }

    amOrpm()
    // removes the "":"":seconds from the array
    currentTimeArray.pop()
    // concats two strings in array to 24 hour string of just hour and minutes
    let twentyFourHourTime = currentTimeArray[0] + currentTimeArray[1]
    // sets the first index equal to the concatenated string
    currentTimeArray[0] = twentyFourHourTime
    // removes the last index of array leaving the 24 hour time
    currentTimeArray.pop()
    // turns 24 hour string to integer
    let completeTime = parseInt(currentTimeArray[0])

    let timeRange;

    let setHours = () => {
        let currentTimeStr = completeTime.toString()
        let timeSlotStrOpen = timeSlots[0].toString()
        let timeSlotStrClose = timeSlots[1].toString()
        console.log(completeTime, "set hours function", currentTimeStr, timeSlotStrClose)
        // checking the state of the time 
        if (timeSlotStrClose.length === 3 && currentTimeStr.length === 4) {
            if (completeTime < timeSlots[0]) {
                console.log('close', 1, timeSlots[0])
                restarauntHours = 'close'
            } 
            if (completeTime > timeSlots[0]) {
                console.log('open', 3, timeSlots[0])
                restarauntHours = 'open'
            }  
        }
        if (timeSlotStrClose.length === 3 && currentTimeStr.length === 3) {
            if (completeTime < timeSlots[1]) {
                console.log('open', 3, timeSlots[1])
                restarauntHours = 'open'
            }  
            if (completeTime > timeSlots[1]) {
                console.log('close', 4, timeSlots[1])
                restarauntHours = 'close'
            }  
        } 

        if (timeSlotStrOpen.length === 3 && currentTimeStr.length === 3){
            if (completeTime < timeSlots[0]) {
                    console.log('close')
                    restarauntHours = 'close'
                }
                if (completeTime > timeSlots[0]) {
                    console.log('open')
                    restarauntHours = 'open'
                }
        }
        if (timeSlotStrOpen.length === 3 && currentTimeStr.length === 4){
            if (completeTime < timeSlots[1]) {
                    console.log('open')
                    restarauntHours = 'open'
                }
                if (completeTime > timeSlots[1]) {
                    console.log('close')
                    restarauntHours = 'close'
                }
        }
        if (timeSlotStrOpen.length === 4 && currentTimeStr.length === 4){
            if (completeTime < timeSlots[0]) {
                    console.log('closed')
                    restarauntHours = 'closed'
                }
            if (completeTime > timeSlots[0] && completeTime < timeSlots[1]) {
                    console.log('open')
                    restarauntHours = 'open'
                }
        }
           
        timeRange = restaurantOne[localTimeArr[0].toLowerCase()].split(' ')
    }
    setHours()
    return (
        <div className='w-96 rounded'>
            <div className='font-semibold bg-darkGray text-center rounded-md'>   
                {restarauntHours === 'Closed' ? `Closed` : restarauntHours === 'open' ? <div><span className='text-green'>Open</span>{` Until ${(parseInt(timeRange[2]))+' '+ timeRange[3]}`} </div>: <div><span className='text-red'>Closed</span>{` Until ${timeRange[0]+' '+timeRange[1]}`}</div>}
                {}
            </div>
        </div>
        
    )
}

export default RestaurantView;
