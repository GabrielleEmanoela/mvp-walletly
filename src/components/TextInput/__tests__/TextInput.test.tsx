import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextInput, TextInputIcon, TextInputProps } from '..';

const defaultProps: TextInputProps = {
  onChangeText: jest.fn(),
  errorMessage: '',
  Icon: 'cash',
  testID: 'TextInput',
};

const componentName = 'TextInput';

describe(componentName, () => {
  it('should render input with testID', () => {
    const { getByTestId } = render(<TextInput {...defaultProps} />);
    expect(getByTestId(componentName)).toBeOnTheScreen();
  });

  it('should display error message when errorMessage prop is provided', () => {
    const errorMessage = 'Campo obrigatório';
    const { getByText } = render(
      <TextInput onChangeText={() => {}} errorMessage={errorMessage} />,
    );
    expect(getByText(errorMessage)).toBeOnTheScreen();
  });

  it('should call onChangeText when text changes', () => {
    const onChangeText = jest.fn();
    const assertion = 'Novo texto';
    const { getByTestId } = render(<TextInput onChangeText={onChangeText} />);
    fireEvent.changeText(getByTestId('text-input-flat'), assertion);
    expect(onChangeText).toHaveBeenCalledWith(assertion);
  });

  it('should render TextInputIcon correctly', () => {
    const textInputIconTestID = 'TextInputIcon';
    const mockIcon = 'search';
    const { getByTestId } = render(<TextInputIcon icon={mockIcon} />);
    expect(getByTestId(textInputIconTestID)).toBeOnTheScreen();
  });
});
