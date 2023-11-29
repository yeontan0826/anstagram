import { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as S from './styles';

import { Header } from '../../components/header/header';
import { useRootNavigation } from '../../navigations/rootStackNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../../components/button';
import { RemoteImage } from '../../components/remoteImage';
import { Icon } from '../../components/icon';
import { MultiLineInput } from '../../components/multiLineInput';
import { Spacer } from '../../components/spacer';
import { Typography } from '../../components/typography';

import { TypeFeedListDispatch, createFeed } from '../../redux/actions/feed';

export const AddFeedScreen: React.FC = () => {
  const rootNavigation = useRootNavigation();
  const safeAreInsets = useSafeAreaInsets();
  const dispatch = useDispatch<TypeFeedListDispatch>();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');

  const canSave = useMemo(() => {
    if (selectedPhoto === null) return false;
    if (inputMessage === '') return false;
    return true;
  }, [selectedPhoto, inputMessage]);

  const onPressBack = useCallback(() => {
    rootNavigation.goBack();
  }, []);

  const onPressGetPhoto = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (result.canceled) return;

    setSelectedPhoto(result.assets[0].uri);
  }, []);

  const onPressSave = useCallback(async () => {
    if (!canSave) return;
    if (selectedPhoto === null) return;

    dispatch(
      createFeed({
        imageUrl: selectedPhoto,
        content: inputMessage,
      })
    );

    rootNavigation.goBack();
  }, [canSave, selectedPhoto, inputMessage]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="ADD FEED" />
        <Header.Icon iconName="close" onPress={onPressBack} />
      </Header>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 32 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button onPress={onPressGetPhoto}>
            {selectedPhoto !== null ? (
              <RemoteImage
                url={selectedPhoto}
                style={{ width: 100, height: 100, borderRadius: 4 }}
              />
            ) : (
              <S.AddPhotoWrapper>
                <Icon iconName="add" iconColor="gray" iconSize={32} />
              </S.AddPhotoWrapper>
            )}
          </Button>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <MultiLineInput
              value={inputMessage}
              onChangeText={setInputMessage}
              placeholder="입력해주세요"
              onSubmitEditing={onPressSave}
              height={80}
              fontSize={16}
            />
          </View>
        </View>
      </View>
      <Button onPress={onPressSave}>
        <View style={{ backgroundColor: canSave ? 'black' : 'lightgray' }}>
          <View
            style={{
              height: 52,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography fontSize={18} color={canSave ? 'white' : 'gray'}>
              저장하기
            </Typography>
          </View>
          <Spacer space={safeAreInsets.bottom} />
        </View>
      </Button>
    </View>
  );
};
