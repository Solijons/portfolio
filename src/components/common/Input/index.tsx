import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FunctionComponent, useEffect, useReducer } from 'react';
import { ICustomInputProps } from './interfaces';

import {
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import { validate } from '../utils/validators';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const formElementReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        isValid: validate(action.val, action.validators),
        value: action.val,
      };
    case 'TOUCHED':
      return {
        ...state,
        isFormElementTouched: true,
      };
    default:
      return state;
  }
};


const CustomInput: FunctionComponent<ICustomInputProps> = (props) => {
  const classes = useStyles();

  const [inputState, dispatch] = useReducer(formElementReducer, {
    isFormElementTouched: false,
    isValid: props.initialValid || false,
    value: props.initialValue || '',
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);


  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const handleFormElementTouched = () => {
    dispatch({
      type: 'TOUCHED'
    });
  };


  const element =
    props.element === 'TextField' ? (
      <TextField
        fullWidth
        type={props.type}
        error={!inputState.isValid && inputState.isFormElementTouched}
        id={props.id}
        label={props.type === "date" ? '' : id.substr(0, 1).toUpperCase() + id.substr(1)}
        value={props.initialValue}
        helperText={props.errorText}
        className={classes.selectEmpty}
        onChange={handleChange}
        variant="outlined"
        onBlur={handleFormElementTouched}
      />
    ) : (
        <div>
          <Select
            label={id.substr(0, 1).toUpperCase() + id.substr(1)}
            displayEmpty
            labelId={id}
            id={id}
            value={inputState.value}
            className={classes.selectEmpty}
            fullWidth
            onChange={handleChange}
            variant="outlined"
            error={!inputState.isValid && inputState.isFormElementTouched}
            onBlur={handleFormElementTouched}
          >
            <MenuItem value={props.defaultValue}>{props.defaultValueText}</MenuItem>
            {props.options?.map((option) => {
              return (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              );
            })}
          </Select>
          <FormHelperText
            error={!inputState.isValid && inputState.isFormElementTouched}
          >
            {!inputState.isValid && inputState.isFormElementTouched && props.errorText}
          </FormHelperText>
        </div>
      );

  return (
    element
  );
};

export default CustomInput;
