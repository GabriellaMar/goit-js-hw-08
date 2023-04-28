
import throttle from 'lodash.throttle'
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGETIME_KEY = "videoplayer-current-time";

const onTimeUpdate = (data) => {
    localStorage.setItem(STORAGETIME_KEY, data.seconds);
    // console.log(data.seconds)
};

const throttledOnTimeUpdate = throttle(onTimeUpdate, 1000);

player.on('timeupdate', throttledOnTimeUpdate);

let currentTime = parseFloat(localStorage.getItem(STORAGETIME_KEY))
console.log(currentTime)

player.setCurrentTime(currentTime);
