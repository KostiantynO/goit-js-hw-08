import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// gallery
const gallery = document.querySelector('.gallery');

const galleryMarkup = createMarkup(galleryItems);
renderMarkup(galleryMarkup, gallery);

// modal
const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationSpeed: 210,
  fadeSpeed: 210,
});

// functions
function itemMarkup({ preview, original, description }) {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>
  </li>
`;
}
function createMarkup(imgArray) {
  return imgArray?.map(img => itemMarkup(img))?.join('');
}
function renderMarkup(bigString, targetEl) {
  if (targetEl) {
    targetEl.innerHTML = bigString;
  }
}
