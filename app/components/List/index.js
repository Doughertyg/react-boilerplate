/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Li from './Li';
import LoadingSpinner from '../LoadingSpinner';

function List({ items, loading }) {
  const listItems = items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Li key={`${index}-${item.key}`}>{item.string}</Li>
  ));
  const content = loading ? <LoadingSpinner /> : <ul>{listItems}</ul>;

  return <Wrapper>{content}</Wrapper>;
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default memo(List);
