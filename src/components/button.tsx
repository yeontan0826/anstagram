import React, { ReactElement } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

export const Button: React.FC<{
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  hitSlop?: { left: number; right: number; top: number; bottom: number };
  style?: StyleProp<ViewStyle>;
  children: ReactElement | ReactElement[];
}> = (props) => {
  return (
    <Pressable
      style={props.style}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      onPress={props.onPress}
      hitSlop={props.hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {props.children}
    </Pressable>
  );
};
