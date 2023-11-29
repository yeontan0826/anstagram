import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';

import { TypeUserDispatch, signIn } from './redux/actions/user';

export const SplashView: React.FC<{ onFinishLoad: () => void }> = (props) => {
  const [showLoginButton, setShowLoginButton] = useState(false);
  const dispatch = useDispatch<TypeUserDispatch>();

  const appInit = useCallback(async () => {
    try {
      const { idToken } = await GoogleSignin.signInSilently();
      if (idToken !== null) {
        // await
        // 로그인에 대한 어떠한 처리
        await dispatch(signIn(idToken));
        props.onFinishLoad();
      }
    } catch (err) {
      console.error(err);
      setShowLoginButton(true);
    }
  }, []);

  const onPressSignin = useCallback(async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    const { idToken } = await GoogleSignin.signIn();
    if (idToken !== null) {
      // signin
      await dispatch(signIn(idToken));
      props.onFinishLoad();
    }
  }, []);

  useEffect(() => {
    appInit();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showLoginButton && <GoogleSigninButton onPress={onPressSignin} />}
    </View>
  );
};
