import React from 'react';
import { View } from 'react-native';

import { Badge } from './badge';
import { Icon, IconName } from './icon';

export const TabIcon: React.FC<{
  visibleBadge?: boolean;
  iconName: IconName;
  iconColor?: string;
}> = (props) => {
  if (props.visibleBadge) {
    return (
      <View>
        <Badge>
          <Icon
            iconName={props.iconName}
            iconSize={20}
            iconColor={props.iconColor ?? 'black'}
          />
        </Badge>
      </View>
    );
  }

  return (
    <View>
      <Icon
        iconName={props.iconName}
        iconSize={20}
        iconColor={props.iconColor ?? 'black'}
      />
    </View>
  );
};
