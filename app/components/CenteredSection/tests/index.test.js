import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import CenteredSection from '../index';

describe('<CenteredSection />', () => {
  it('Expect to render a prop', () => {
    const id = 'centerdiv';
    const { container } = render(<CenteredSection id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });

  it('Expect to render an <div> tag', () => {
    const { container } = render(<CenteredSection />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have children', () => {
    const { container } = render(
      <CenteredSection>
        <h1>TEST</h1>
      </CenteredSection>,
    );
    expect(container.querySelector('div').children).toHaveLength(1);
  });
});
