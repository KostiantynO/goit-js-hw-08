import { form, readInput } from './form-obj';
import { KEY, save, load, remove } from './storage';
import { restoreFormState } from './dom-handler';

export const onInteractive = e => {
  if (e.currentTarget.readyState === 'interactive') {
    restoreFormState();
  }
};

export const onInput = ({ target }) => {
  readInput(target);

  save(KEY, form);
};

export const onFormSubmit = event => {
  event.preventDefault();

  console.log(load(KEY));
  remove(KEY);

  event.currentTarget.reset();
};
