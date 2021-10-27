import { KEY, load } from './storage';

export const form = { email: '', message: '' };
export const readInput = el => (form[el.name] = el.value.trim());
export const readStorage = input =>
  (form[input.name] = load(KEY)[input?.name] ? load(KEY)[input?.name] : '');
