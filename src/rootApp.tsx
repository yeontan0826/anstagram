import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackNavigation } from './navigations/rootStackNavigation';
import { SplashView } from './splashView';

export const RootApp: React.FC = () => {
  const [initialize, setInitialize] = useState(false);

  if (!initialize) {
    return <SplashView onFinishLoad={() => setInitialize(true)} />;
  }

  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};
