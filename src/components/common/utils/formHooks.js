import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {

  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    case 'SET_STATE':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      }
    default:
      return state;
  }

};

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const selectChanged = useCallback((id, value, isValid) => {
    dispatch({
      isValid,
      inputId: id,
      type: 'INPUT_CHANGE',
      value,
    });
  }, []);


  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      inputs: inputData,
      formIsValid: formValidity,
      type: 'SET_DATA',
    });
  }, [])

  return [formState, selectChanged, setFormData]

}