
import throttle from 'lodash.throttle'
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGETIME_KEY = "videoplayer-current-time";

const onTimeUpdate = (data) => {
  localStorage.setItem(STORAGETIME_KEY, data.seconds);
};
const throttledOnTimeUpdate = throttle(onTimeUpdate, 1000);

player.on('timeupdate', throttledOnTimeUpdate);

const videoCurrentTime = localStorage.getItem(STORAGETIME_KEY);

if (videoCurrentTime >= 0 && videoCurrentTime < player.getDuration()) {
  player.setCurrentTime(videoCurrentTime)
  
} else {
  player.setCurrentTime(0)
  console.log(videoCurrentTime)
  localStorage.removeItem(STORAGETIME_KEY);

}

