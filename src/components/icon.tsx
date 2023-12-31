import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export type IconName = keyof typeof Ionicons.glyphMap;

export const Icon: React.FC<{
  iconName: IconName;
  iconSize: number;
  iconColor?: string;
}> = (props) => {
  return (
    <Ionicons
      name={props.iconName}
      size={props.iconSize}
      color={props.iconColor ?? 'black'}
    />
  );
};
