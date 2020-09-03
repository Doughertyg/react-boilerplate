/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Form({ handleSubmit, handleInputChange, inputValue }) {
  const submit = evt => {
    evt.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="type a string..."
        value={inputValue}
      />
      <input type="submit" />
    </form>
  );
}

Form.propTypes = {
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Form;
