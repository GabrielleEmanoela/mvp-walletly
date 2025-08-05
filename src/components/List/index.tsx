import React from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Text, List, Avatar } from 'react-native-paper';
import { TransactionResponse } from '@/types/user';

import { styles } from './styles';

export type ListProps = {
  data: TransactionResponse[];
  onPress?: (item: { id: string }) => void;
  testID?: string;
};

export const ListComponent = ({ data, onPress }: ListProps) => {
  const handlePress = React.useCallback(
    (item: { id: string }) => () => onPress && onPress(item),
    [onPress],
  );

  return (
    <View style={styles.container} testID={'listComponent'}>
      {data?.length !== 0 ? (
        <FlashList
          data={data}
          estimatedItemSize={80}
          initialScrollIndex={0}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => (
            <View testID={`item-${item.id}`}>
              <List.Item
                onPress={handlePress({ id: item.id })}
                title={item.description}
                description={
                  item.creditCard
                    ? `${item?.creditCard.brand} (${item?.creditCard.number})`
                    : ''
                }
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    size={40}
                    color={item.iconColor}
                    icon={item.icon || 'currency-usd'}
                    style={styles.icon}
                  />
                )}
                right={() => (
                  <Text style={styles.item}>
                    {item?.currency} {item?.amount}
                  </Text>
                )}
                style={styles.listItem}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <Text style={styles.emptyState}>Nenhuma transação encontrada.</Text>
      )}
    </View>
  );
};
