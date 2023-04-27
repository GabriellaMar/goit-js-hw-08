const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle'
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGETIME_KEY = "videoplayer-current-time";

const onTimeUpdate = throttle(function (data) {
    localStorage.setItem(STORAGETIME_KEY, data.seconds);
    // console.log(data.seconds)
}, 1000);

player.on('timeupdate', onTimeUpdate);

let currentTime = parseFloat(localStorage.getItem(STORAGETIME_KEY))
console.log(currentTime)

player.setCurrentTime(currentTime);
