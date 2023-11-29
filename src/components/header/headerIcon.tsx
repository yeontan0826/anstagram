import React from 'react';
import { Button } from '../button';
import { Icon, IconName } from '../icon';

export const HeaderIcon: React.FC<{
  onPress: () => void;
  iconName: IconName;
  iconColor?: string;
}> = (props) => {
  return (
    <Button onPress={props.onPress}>
      <Icon
        iconName={props.iconName}
        iconSize={28}
        iconColor={props.iconColor}
      />
    </Button>
  );
};
