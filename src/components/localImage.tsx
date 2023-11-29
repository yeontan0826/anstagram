import React from 'react';
import { Image as RNImage, ImageStyle, StyleProp } from 'react-native';

export const LocalImage: React.FC<{
  localAsset: number;
  style?: StyleProp<ImageStyle>;
}> = (props) => {
  return <RNImage source={props.localAsset} style={props.style} />;
};
