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
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import CenteredSection from '../../components/CenteredSection';
import H1 from '../../components/H1';
import Form from '../../components/Form';
import { setInput, addString } from './actions';
import makeSelectInput from './selectors';

export function AddStringPage({
  dispatchAddString,
  dispatchSetInput,
  inputString,
}) {
  useInjectReducer({ key: 'addStringPage', reducer });
  useInjectSaga({ key: 'addStringPage', saga });

  return (
    <CenteredSection>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form
        handleInputChange={evt => dispatchSetInput(evt.target.value)}
        handleSubmit={dispatchAddString}
        inputValue={inputString}
      />
    </CenteredSection>
  );
}

AddStringPage.propTypes = {
  dispatchAddString: PropTypes.func.isRequired,
  dispatchSetInput: PropTypes.func.isRequired,
  inputString: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  inputString: makeSelectInput(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetInput: val => dispatch(setInput(val)),
    dispatchAddString: () => dispatch(addString()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddStringPage);
