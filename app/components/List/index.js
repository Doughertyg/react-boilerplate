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
  const content = items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Li key={`${index}-${item.key}`}>{item.string}</Li>
  ));
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
