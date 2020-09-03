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
import styled from 'styled-components';

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
import Button from '../../components/Button';
import LoadingSpinner from '../../components/LoadingSpinner';

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export function Viewer({ dispatchGetStringList, loading, stringlist }) {
  useInjectReducer({ key: 'viewer', reducer });
  useInjectSaga({ key: 'viewer', saga });

  // get string list after first render
  useEffect(() => {
    dispatchGetStringList();
  }, []);

  const items = loading ? [<LoadingSpinner />] : stringlist;

  return (
    <>
      <CenteredSection>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <List items={items} />
      </CenteredSection>
      <ButtonWrapper>
        <Button
          handleClick={() => {
            window.location.href = '/add';
          }}
          label="Add string"
        />
      </ButtonWrapper>
    </>
  );
}

Viewer.propTypes = {
  dispatchGetStringList: PropTypes.func.isRequired,
  loading: PropTypes.bool,
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
