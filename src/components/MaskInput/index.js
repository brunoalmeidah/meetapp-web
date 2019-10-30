import React, { useRef, useEffect, useState, useMemo } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { parseISO, format } from 'date-fns';
// import { Container } from './styles';

export default function MaskInput({ name, placeholder, mask }) {
  const ref = useRef(null);
  const { defaultValue, fieldName, registerField, error } = useField(name);

  const [inputValue, setInputValue] = useState(defaultValue);

  const inputValueFormatted = useMemo(() => {
    try {
      const valueFormatted =
        inputValue &&
        format(parseISO(inputValue), "dd'/'MM'/'yyyy HH':'mm':'ss");
      return valueFormatted;
    } catch {
      return inputValue;
    }
  }, [inputValue]);

  function parseInputValue(inputRef) {
    const { value } = inputRef;
    if (!value) {
      return null;
    }
    const dateTime = value.split(' ');
    const date = dateTime[0].split('/');
    const time = dateTime[1].split(':');

    return parseISO(`${date[2]}-${date[1]}-${date[0]}T${time[0]}:00:00`); // Date(Date.UTC(date[2], date[1] - 1, date[0], ...time))
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      parseValue: parseInputValue,
      path: 'value',
    });
  },[ref.current,fieldName]) //eslint-disable-line
  return (
    <>
      <InputMask
        mask={mask}
        placeholder={placeholder}
        ref={ref}
        value={inputValueFormatted}
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </>
  );
}

MaskInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
};
