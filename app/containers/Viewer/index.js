/**
 *
 * Viewer
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectStringList,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import CenteredSection from '../../components/CenteredSection';
import H1 from '../../components/H1';
import { getStringList } from './actions';

export function Viewer() {
  useInjectReducer({ key: 'viewer', reducer });
  useInjectSaga({ key: 'viewer', saga });

  // get string list after first render
  useEffect(() => {
    getStringList();
  }, []);

  return (
    <CenteredSection>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </CenteredSection>
  );
}

Viewer.propTypes = {
  getStringList: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
  stringlist: makeSelectStringList(),
});

function mapDispatchToProps(dispatch) {
  return {
    getStringList: dispatch(getStringList()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Viewer);
