import React from 'react';
import { render } from '@testing-library/react-native';
import { Loading } from '@/components';

const componentName = 'Loading';

describe(`${componentName}`, () => {
  it('should render ActivityIndicator', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId(componentName)).toBeOnTheScreen();
  });

  it('should render correctly', () => {
    const { toJSON } = render(<Loading />);
    expect(toJSON()).toMatchSnapshot();
  });
});
