import React from 'react';
import { Typography } from '../typography';

export const HeaderTitle: React.FC<{
  title: string;
}> = (props) => {
  return <Typography fontSize={18}>{props.title}</Typography>;
};
