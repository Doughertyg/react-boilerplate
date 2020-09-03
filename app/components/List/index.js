/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Ul from './Ul';

function List({ items }) {
  // eslint-disable-next-line react/no-array-index-key
  const content = items.map((item, index) => <li key={index}>{item}</li>);
  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

export default memo(List);
