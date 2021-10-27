import throttle from 'lodash/throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;

player?.setCurrentTime(savedTime);

const callback = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('timeupdate', throttle(callback, 1000));
