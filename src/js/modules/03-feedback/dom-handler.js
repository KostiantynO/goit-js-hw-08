// formObj read/write - logical representation
import { readStorage } from './form-obj';
import { formRef } from '../../03-feedback';

export const getRef = ref => document.querySelector(ref);

const getInputs = form => [...form?.elements]?.filter(el => el?.name);

export const restoreFormState = () => {
  const namedInputs = getInputs(formRef);

  namedInputs?.forEach(el => {
    el.value = readStorage(el);

    el.setAttribute('required', 'true');
  });
};
