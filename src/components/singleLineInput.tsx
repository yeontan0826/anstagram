import { useState } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const SingleLineInput: React.FC<{
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  fontSize?: number;
  onSubmitEditing?: () => void;
}> = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper focused={focused}>
      <TextInput
        style={{ fontSize: props.fontSize ?? 20 }}
        autoCorrect={false}
        autoCapitalize="none"
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onSubmitEditing={props.onSubmitEditing}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.View<{ focused: boolean }>`
  align-self: stretch;
  padding: 8px 12px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${(props) => (props.focused ? 'black' : 'gray')};
`;
