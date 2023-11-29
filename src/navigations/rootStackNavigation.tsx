import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { BottomTabNavigation } from './bottomTabNavigation';
import { AddFeedScreen } from '../screens/addFeed';
import { FeedListScreen } from '../screens/feedList';
import { FeedInfo } from '../@types/feedInfo';

export type RootStackParamList = {
  BottomTabNavigation: undefined;
  FeedListScreen: {
    list: FeedInfo[];
  };
  AddFeedScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: 'containedModal' }}
    >
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <Stack.Screen name="AddFeedScreen" component={AddFeedScreen} />
      <Stack.Screen name="FeedListScreen" component={FeedListScreen} />
    </Stack.Navigator>
  );
};

export const useRootNavigation = <
  RouteName extends keyof RootStackParamList
>() => {
  return useNavigation<
    NativeStackNavigationProp<RootStackParamList, RouteName>
  >();
};

export const useRootRoute = <RouteName extends keyof RootStackParamList>() => {
  return useRoute<RouteProp<RootStackParamList, RouteName>>();
};
