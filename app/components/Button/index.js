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
  background-color: lightblue;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
`;

function Button({ label, handleClick }) {
  return (
    <ButtonStyle onClick={handleClick}>
      {label || <FormattedMessage {...messages.header} />}
    </ButtonStyle>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
