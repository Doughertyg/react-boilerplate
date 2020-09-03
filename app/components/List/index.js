/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Li from './Li';

function List({ items }) {
  // eslint-disable-next-line react/no-array-index-key
  const content = items.map((item, index) => <Li key={index}>{item}</Li>);
  return (
    <Wrapper>
      <ul>{content}</ul>
    </Wrapper>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

export default memo(List);
