import React from 'react';
import { Image as RNImage, StyleProp, ImageStyle } from 'react-native';

export const RemoteImage: React.FC<{
  url: string;
  style?: StyleProp<ImageStyle>;
}> = (props) => {
  return <RNImage source={{ uri: props.url }} style={props.style} />;
};
