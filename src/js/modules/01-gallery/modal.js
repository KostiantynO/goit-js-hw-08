import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const initModal = galleryLinks => {
  const modalMarkup = galleryLinks;

  const modalOptions = {
    captionsData: 'alt',
    animationSpeed: 210,
    fadeSpeed: 210,
  };

  const modal = new SimpleLightbox(modalMarkup, modalOptions);
};
