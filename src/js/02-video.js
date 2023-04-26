import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime = 0;
player.setCurrentTime(currentTime);

const onPlay = function(data) {
    // data is an object containing properties specific to that event
    currentTime = data.seconds;
       
  
};

player.on('play', onPlay);
