/**
 *
 * AddStringPage
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
import makeSelectAddStringPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import CenteredSection from '../../components/CenteredSection';
import H1 from '../../components/H1';

export function AddStringPage() {
  useInjectReducer({ key: 'addStringPage', reducer });
  useInjectSaga({ key: 'addStringPage', saga });

  return (
    <CenteredSection>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </CenteredSection>
  );
}

AddStringPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addStringPage: makeSelectAddStringPage(),
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

export default compose(withConnect)(AddStringPage);
