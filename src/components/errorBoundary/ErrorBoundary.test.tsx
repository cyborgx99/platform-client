import React from 'react';
import { render } from 'utils/test.utils';

import ErrorBoundary from '.';

const ErrorComponent = () => {
  throw new Error('HELP');
};

describe('ErrorBoundary', () => {
  it('renders its children if no error is present', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <>children</>
      </ErrorBoundary>
    );
    getByText('children');
  });

  it('renders the error message if an error is present', () => {
    console.error = jest.fn();
    const { getByText } = render(
      <ErrorBoundary>
        <>
          children
          <ErrorComponent />
        </>
      </ErrorBoundary>
    );

    expect(console.error).toHaveBeenCalled();
    getByText('heading');
    getByText('explanation');
    getByText('reloadButton');
  });

  it('does not render its children if an error is present', () => {
    console.error = jest.fn();
    const { queryByText } = render(
      <ErrorBoundary>
        <>
          children
          <ErrorComponent />
        </>
      </ErrorBoundary>
    );

    const children = queryByText('children');
    expect(children).toBe(null);
  });
});
