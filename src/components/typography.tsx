import React, { type ReactElement } from 'react';
import { Text as RNText } from 'react-native';

export const Typography: React.FC<{
  color?: string;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
  numberOfLines?: number;
  children: ReactElement | string | ReactElement[];
}> = (props) => {
  return (
    <RNText
      style={{
        color: props.color ?? 'black',
        fontSize: props.fontSize ?? 10,
        fontWeight: props.fontWeight ?? 'normal',
      }}
    >
      {props.children}
    </RNText>
  );
};
