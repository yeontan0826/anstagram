import React, { ReactElement } from 'react';
import styled from 'styled-components/native';

export const HeaderGroup: React.FC<{
  children: ReactElement[];
}> = (props) => {
  return <GroupContainer>{props.children}</GroupContainer>;
};

const GroupContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
