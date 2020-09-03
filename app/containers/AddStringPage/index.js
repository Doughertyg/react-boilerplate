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
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import CenteredSection from '../../components/CenteredSection';
import H1 from '../../components/H1';
import Form from '../../components/Form';
import { setInput, addString } from './actions';
import { makeSelectInput, makeSelectLoading } from './selectors';
import Button from '../../components/Button';
import LoadingSpinner from '../../components/LoadingSpinner';

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export function AddStringPage({
  dispatchAddString,
  dispatchSetInput,
  inputString,
  loading,
}) {
  useInjectReducer({ key: 'addStringPage', reducer });
  useInjectSaga({ key: 'addStringPage', saga });

  return (
    <>
      <CenteredSection>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Form
            handleInputChange={evt => dispatchSetInput(evt.target.value)}
            handleSubmit={dispatchAddString}
            inputValue={inputString}
          />
        )}
      </CenteredSection>
      <ButtonWrapper>
        <Button
          handleClick={() => {
            window.location.href = '/';
          }}
          label="show all strings"
        />
      </ButtonWrapper>
    </>
  );
}

AddStringPage.propTypes = {
  dispatchAddString: PropTypes.func.isRequired,
  dispatchSetInput: PropTypes.func.isRequired,
  inputString: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  inputString: makeSelectInput(),
  loading: makeSelectLoading(),
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
