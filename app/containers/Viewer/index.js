/**
 *
 * Viewer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectViewer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Viewer() {
  useInjectReducer({ key: 'viewer', reducer });
  useInjectSaga({ key: 'viewer', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Viewer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewer: makeSelectViewer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Viewer);
