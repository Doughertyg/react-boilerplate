/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ButtonStyle = styled.button`
  padding: 10px;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: blue;
  }

  ${({ primary }) => primary && `background-color: lightblue;`}
`;

function Button({ label, handleClick, primary }) {
  return (
    <ButtonStyle onClick={handleClick} primary={primary}>
      {label || <FormattedMessage {...messages.header} />}
    </ButtonStyle>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
  primary: PropTypes.any,
};

export default Button;
