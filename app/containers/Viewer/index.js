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
import List from '../../components/List';

export function Viewer({ dispatchGetStringList, stringlist }) {
  useInjectReducer({ key: 'viewer', reducer });
  useInjectSaga({ key: 'viewer', saga });

  // get string list after first render
  useEffect(() => {
    dispatchGetStringList();
  }, []);

  return (
    <CenteredSection>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List items={stringlist.map(strObj => strObj.string)} />
    </CenteredSection>
  );
}

Viewer.propTypes = {
  dispatchGetStringList: PropTypes.func.isRequired,
  stringlist: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
  stringlist: makeSelectStringList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetStringList: () => dispatch(getStringList()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Viewer);
