const itemMarkup = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image lazyload" data-src="${preview}" alt="${description}" title="${description}" loading="lazy"/>
    </a>
  </li>
`;
};

export const createMarkup = imgArray => {
  return imgArray?.map(img => itemMarkup(img)).join('');
};

export const renderMarkup = (bigString, targetEl) => {
  if (targetEl) {
    targetEl.innerHTML = bigString;
  }
};
