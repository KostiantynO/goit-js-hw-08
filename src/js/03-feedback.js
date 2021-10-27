import throttle from 'lodash/throttle';
import { getRef } from './modules/03-feedback/dom-handler';
import {
  onInteractive,
  onInput,
  onFormSubmit,
} from './modules/03-feedback/callbacks';

export const formRef = getRef('.feedback-form');

document.addEventListener('readystatechange', onInteractive);
formRef.addEventListener('input', throttle(onInput, 500, { leading: false }));
formRef.addEventListener('submit', onFormSubmit);
