import React from 'react';
import {
  TextInput as Input,
  TextInputProps as BaseProps,
  Text,
  TextInputIconProps,
} from 'react-native-paper';
import { View } from 'react-native';

import { errorStyles } from './styles';

export type TextInputProps = {
  onChangeText: (text: string) => void;
  errorMessage?: string;
  Icon?: React.ReactNode;
  testID?: string;
} & BaseProps;

export function TextInput({ errorMessage = '', ...props }: TextInputProps) {
  return (
    <>
      <Input {...props} left={props.Icon} testID={props.testID} />
      <View style={errorStyles.errorContainer}>
        <Text style={errorStyles.error}>{errorMessage}</Text>
      </View>
    </>
  );
}

export const TextInputIcon = ({ icon, ...rest }: TextInputIconProps) => {
  return <Input.Icon {...rest} icon={icon} testID={'TextInputIcon'} />;
};
