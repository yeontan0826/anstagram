import { FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Header } from '../../components/header/header';
import { FeedListItem } from '../../components/feedListItem';
import {
  useRootNavigation,
  useRootRoute,
} from '../../navigations/rootStackNavigation';

import { TypeFeedListDispatch, favoriteFeed } from '../../redux/actions/feed';

export const FeedListScreen: React.FC = () => {
  const route = useRootRoute<'FeedListScreen'>();
  const navigation = useRootNavigation<'FeedListScreen'>();
  const dispatch = useDispatch<TypeFeedListDispatch>();

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="FEED LIST" />
        <Header.Icon iconName="close" onPress={() => navigation.goBack()} />
      </Header>
      <FlatList
        data={route.params.list}
        renderItem={({ item }) => {
          return (
            <FeedListItem
              image={item.imageUrl}
              comment={item.content}
              isLiked={false}
              likeCount={item.likeHistory.length}
              writer={item.writer.name}
              onPressFeed={() => {
                console.log('onPress Feed!');
              }}
              onPressFavorite={() => {
                console.log('onPress Favorite');
                dispatch(favoriteFeed(item));
              }}
            />
          );
        }}
      />
    </View>
  );
};
