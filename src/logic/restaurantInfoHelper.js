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
  ["Monday ",],
  ["Tuesday ",],
  ["Wednesday ",],
  ["Thursday ",],
  ["Friday ",],
  ["Saturday ",],
  ["Sunday ",]  
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
