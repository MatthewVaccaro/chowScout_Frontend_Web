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

const moreInfo = [
  ['id',],
  ['ref',],
  [1,"Monday ",],
  [2,"Tuesday ",],
  [3,"Wednesday ",],
  [4,"Thursday ",],
  [5,"Friday ",],
  [6,"Saturday ",],
  [0,"Sunday ",]  
]

let index = 0
export function mapTimeToDay (restaurantInfo) {
  for (var key in restaurantInfo) {
      if (restaurantInfo.hasOwnProperty(key)&& index < moreInfo.length) {
        moreInfo[index].push(restaurantInfo[key]);
        index++
      }
  }
  return moreInfo;
}
