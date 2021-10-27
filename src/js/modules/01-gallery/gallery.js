import { galleryItems } from '../../gallery-items';
import { createMarkup, renderMarkup } from './create-markup';

export const initGallery = galleryRef => {
  const gallery = document.querySelector(galleryRef);

  const galleryMarkup = createMarkup(galleryItems);
  renderMarkup(galleryMarkup, gallery);
};
