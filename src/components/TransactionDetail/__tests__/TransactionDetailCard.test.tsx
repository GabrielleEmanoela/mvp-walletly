import React from 'react';
import { render } from '@testing-library/react-native';
import { TransactionDetailCard, TransactionDetailProps } from '..';
import { theme } from '@/theme/colors';

const defaultProps: TransactionDetailProps = {
  currency: 'Título',
  description: 'Descrição',
  status: 'completed',
  icon: 'cash',
  iconColor: theme.colors.primary,
  id: '',
  date: '',
  type: 'deposit',
  amount: 0,
};

describe('TransactionDetailCard', () => {
  it('should render correctly with all props', () => {
    const { getAllByText } = render(
      <TransactionDetailCard {...defaultProps} />,
    );
    expect(getAllByText(defaultProps.description).length).toBeGreaterThan(0);
  });

  it('should render correctly', () => {
    const { toJSON } = render(<TransactionDetailCard {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
