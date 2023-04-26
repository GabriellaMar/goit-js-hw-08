const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle'
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeKey = "videoplayer-current-time";

const onTimeUpdate = throttle(function (data) {
    localStorage.setItem(timeKey, data.seconds);
    // console.log(data.seconds)
}, 1000);

player.on('timeupdate', onTimeUpdate);



let currentTime = parseFloat(localStorage.getItem(timeKey))
console.log(currentTime)

player.setCurrentTime(currentTime);





//   const onPlay = function(data) {
//      currentTime = data.seconds;
//       console.log('Current time is ', currentTime);
//     //  localStorage.setItem(timeKey, currentTime);
//   };
//  player.on("timeupdate", onPlay);
