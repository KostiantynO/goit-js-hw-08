import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
player?.setCurrentTime(savedTime);

const call = e => localStorage.setItem('videoplayer-current-time', e.seconds);

player.on('timeupdate', throttle(call, 1000));
