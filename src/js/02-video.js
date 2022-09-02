import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

const onPlayer = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds)
};

if(localStorage.getItem('videoplayer-current-time')){
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onPlayer, 1000));