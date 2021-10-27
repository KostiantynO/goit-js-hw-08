import { initGallery } from './modules/01-gallery/gallery';
import { initModal } from './modules/01-gallery/modal';
import { initLazyload } from './modules/01-gallery/lazyload';

initGallery('.gallery');

initModal('.gallery a');

initLazyload({ addClass: 'appear' });
