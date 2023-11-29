import { useSelector } from 'react-redux';

import { RootReducer } from '../store/store';
import { FeedInfo } from '../../@types/feedInfo';
import { UserInfo } from '../../@types/userInfo';

export const useMyInfo = () =>
  useSelector<RootReducer, UserInfo | null>((state) => state.userInfo.userInfo);

export const useMyFeedList = () =>
  useSelector<RootReducer, FeedInfo[]>((state) => state.userInfo.myFeedList);
