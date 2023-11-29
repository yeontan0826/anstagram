import { useSelector } from 'react-redux';
import { RootReducer } from '../store/store';
import { FeedInfo } from '../../@types/feedInfo';

export const useTotalFeedList = () =>
  useSelector<RootReducer, FeedInfo[]>((state) => state.feedList.list);
