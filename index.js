let bangkokTime = moment().tz('Asia/Bangkok').format('HH:mm:ss A');

let bangkokTimeElement = document.querySelector('#bangkok');

let localTimezone = moment.tz.guess();
let localElement = document.querySelector('#local');

localElement.innerHTML = `My current timezone is ${localTimezone} 🇹🇭 and the time is ${moment().format(
  'HH:mm:ss A'
)}`;

