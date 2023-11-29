import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/home';
import { MyPageScreen } from '../screens/myPage';
import { IconName } from '../components/icon';
import { TabIcon } from '../components/tabIcon';

export type BottomTabParamList = {
  HomeScreen: undefined;
  MyPageScreen: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigation: React.FC = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => {
        const getIconName = (): IconName => {
          if (route.name === 'MyPageScreen') {
            return 'person';
          }

          return 'home';
        };

        const routeIconName = getIconName();

        return {
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <TabIcon iconName={routeIconName} iconColor={color} />;
          },
        };
      }}
    >
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />

      <BottomTab.Screen name="MyPageScreen" component={MyPageScreen} />
    </BottomTab.Navigator>
  );
};
