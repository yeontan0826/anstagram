import { useCallback, useRef } from 'react';
import { Animated, View, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

import { Button } from './button';
import { RemoteImage } from './remoteImage';
import { Icon } from './icon';
import { Typography } from './typography';
import { Spacer } from './spacer';
import { DoubleTabButton } from './doubleTabButton';

export const FeedListItem: React.FC<{
  image: string;
  isLiked: boolean;
  likeCount: number;
  writer: string;
  comment: string;
  onPressFeed: () => void;
  onPressFavorite: () => void;
}> = (props) => {
  const { width } = useWindowDimensions();

  const scaleValue = useRef(new Animated.Value(0)).current;
  const alphaValue = useRef(new Animated.Value(0)).current;

  const onPressFavorite = useCallback(() => {
    props.onPressFavorite();

    if (props.isLiked) {
      return;
    }

    scaleValue.setValue(0);
    alphaValue.setValue(1);

    Animated.timing(scaleValue, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        alphaValue.setValue(0);
      }, 1000);
    });
  }, [scaleValue, alphaValue, props.isLiked]);

  return (
    <View>
      {/* 이미지 */}
      <DoubleTabButton onPressDoubleTap={onPressFavorite}>
        <View style={{ width, height: width }}>
          <RemoteImage url={props.image} style={{ width, height: width }} />
          <BigHeartWrapper>
            <Animated.View
              style={{
                transform: [{ scale: scaleValue }],
                opacity: alphaValue,
              }}
            >
              <Icon iconName="heart" iconSize={64} iconColor="red" />
            </Animated.View>
          </BigHeartWrapper>
        </View>
      </DoubleTabButton>
      {/* 좋아요 */}
      <Button onPress={props.onPressFavorite}>
        <View style={{ paddingHorizontal: 12, paddingVertical: 6 }}>
          <Icon
            iconName={props.isLiked ? 'heart' : 'heart-outline'}
            iconSize={28}
            iconColor={props.isLiked ? 'red' : 'black'}
          />
        </View>
      </Button>
      {/* 내용 */}
      <View style={{ paddingHorizontal: 12 }}>
        <Typography fontSize={16}>{`좋아요 ${props.likeCount}개`}</Typography>
        <Spacer space={4} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Typography fontSize={16} fontWeight="bold">
            {props.writer}
          </Typography>
          <Spacer horizontal space={8} />
          <Typography fontSize={16}>{props.comment}</Typography>
        </View>
      </View>
      <Spacer space={20} />
    </View>
  );
};

const BigHeartWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;
