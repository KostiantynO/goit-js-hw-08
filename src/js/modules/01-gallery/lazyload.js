import 'lazysizes';

const addSrcToLazyImages = addClass => {
  const nativeLoadingLazyImages = document.querySelectorAll(
    'img[loading="lazy"]',
  );

  nativeLoadingLazyImages.forEach(img => {
    img.src = img.dataset.src;
    img.classList.add(addClass);
  });
};

const addLazySizesScript = () => {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossOrigin = 'anonymous';
  script.referrerPolicy = 'no-referrer';
  document.body.appendChild(script);
};

export const initLazyload = ({ addClass }) => {
  if ('loading' in HTMLImageElement.prototype) {
    addSrcToLazyImages(addClass);
  } else {
    addLazySizesScript();
  }

  const onImageLoaded = e => e.target.classList.add(addClass);

  const lazysizesImages = document.querySelectorAll('img[data-src]');

  lazysizesImages.forEach(img => {
    img.addEventListener('load', onImageLoaded, { once: true });
  });
};
