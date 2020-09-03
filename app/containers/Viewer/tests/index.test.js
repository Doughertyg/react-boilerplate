/**
 *
 * Tests for Viewer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { Viewer } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';
import configureStore from '../../../configureStore';

describe('<Viewer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Should fetch strings on mount', () => {
    const mock = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Viewer dispatchGetStringList={mock} stringlist={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(mock).toHaveBeenCalled();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Viewer dispatchGetStringList={dispatch} />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Viewer />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
