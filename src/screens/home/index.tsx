import { useCallback, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

import { Header } from '../../components/header/header';
import { FeedListItem } from '../../components/feedListItem';
import { useTotalFeedList } from '../../redux/selectors/feed';
import {
  TypeFeedListDispatch,
  favoriteFeed,
  getFeedList,
} from '../../redux/actions/feed';
import { useRootNavigation } from '../../navigations/rootStackNavigation';
import { useMyInfo } from '../../redux/selectors/user';

export const HomeScreen: React.FC = () => {
  const rootNavigation = useRootNavigation();
  const userInfo = useMyInfo();
  const feedList = useTotalFeedList();
  const dispatch = useDispatch<TypeFeedListDispatch>();

  const onPressHome = useCallback(() => {
    rootNavigation.navigate('AddFeedScreen');
  }, []);

  useEffect(() => {
    dispatch(getFeedList());
  }, []);

  const ListHeaderComponent = () => {
    return <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME" />
        <Header.Icon iconName="add" onPress={onPressHome} />
      </Header>
      <FlatList
        data={feedList}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({ item }) => {
          const isLiked =
            item.likeHistory.filter(
              (likeUserId) => likeUserId === userInfo?.uid
            ).length > 0;

          return (
            <FeedListItem
              image={item.imageUrl}
              comment={item.content}
              isLiked={isLiked}
              likeCount={item.likeHistory.length}
              writer={item.writer.name}
              onPressFeed={() => {
                console.log('onPress Feed!');
              }}
              onPressFavorite={() => {
                dispatch(favoriteFeed(item));
              }}
            />
          );
        }}
      />
    </View>
  );
};
