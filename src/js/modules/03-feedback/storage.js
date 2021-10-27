export const KEY = 'feedback-form-state';

export const load = key => JSON.parse(localStorage.getItem(key)) || '';

export const save = (key, formObject) =>
  localStorage.setItem(key, JSON.stringify(formObject));

export const remove = key => localStorage.removeItem(key);
