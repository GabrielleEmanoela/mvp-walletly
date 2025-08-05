import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ListComponent, ListProps } from '..';
import '@testing-library/jest-native/extend-expect';

const mockProps: ListProps = {
  data: [
    {
      id: '1',
      description: 'Description for transaction 1',
      icon: 'search',
      iconColor: '#000',
      date: '',
      type: 'deposit',
      amount: 0,
      currency: '',
      status: 'completed',
    },
    {
      id: '2',
      description: 'Description for transaction 2',
      icon: 'search',
      iconColor: '#000',
      date: '',
      type: 'deposit',
      amount: 0,
      currency: '',
      status: 'completed',
    },
  ],
  onPress: jest.fn(),
};

const componetName = 'ListComponent';

describe(`${componetName}`, () => {
  it('should call onPress when an item is pressed', async () => {
    const { findByText } = render(<ListComponent {...mockProps} />);
    const itemTitle = await findByText(mockProps.data[0].description);
    fireEvent.press(itemTitle);
    expect(mockProps.onPress).toHaveBeenCalledWith({ id: '1' });
  });
  it('should render empty state when no data is provided', async () => {
    const { findByText } = render(<ListComponent data={[]} />);
    expect(await findByText('Nenhuma transação encontrada.')).toBeTruthy();
  });

  it('should render correctly with testID', () => {
    const { getByTestId } = render(<ListComponent {...mockProps} />);
    expect(getByTestId('listComponent')).toBeTruthy();
  });

  it('should render correctly', () => {
    const { toJSON } = render(<ListComponent {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
