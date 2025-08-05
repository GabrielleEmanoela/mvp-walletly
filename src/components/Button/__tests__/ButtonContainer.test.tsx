import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonContainer, ButtonProps } from '..';

const mock: ButtonProps = {
  children: 'Press Me',
  onPress: jest.fn(),
  loading: false,
  disabled: false,
  contentStyle: {},
};

describe('ButtonContainer', () => {
  it('should render correctly with all props', () => {
    const { getByText } = render(<ButtonContainer {...mock} />);
    expect(getByText('Press Me')).toBeOnTheScreen();
  });
  it('should call onPress when pressed', () => {
    const { getByText } = render(<ButtonContainer {...mock} />);
    fireEvent.press(getByText('Press Me'));
    expect(mock.onPress).toHaveBeenCalled();
  });
  it('should render correctly', () => {
    const { toJSON } = render(<ButtonContainer {...mock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
