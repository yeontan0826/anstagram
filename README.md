# anstagram
간단한 SNS 피드 토이 프로젝트

<br>

|피드 추가|피드 좋아요|
|:-----:|:------:|
|![googleLogin](https://github.com/yeontan0826/anstagram/blob/master/assets/screenshots/add_feed.gif)|![addDiary](https://github.com/yeontan0826/anstagram/blob/master/assets/screenshots/favorite_feed.gif)|

<br>

<hr>

## 사용방법

### Firebase

[Firebase](https://firebase.google.com/?hl=ko)에 접속하여 프로젝트를 생성합니다.

<br>

**Authentication**과 **Storage**를 설정하고 `google-services.json`과 `GoogleService-Info.plist` 파일을 다운받습니다.

다운받은 파일을 프로젝트 최상단 폴더에 넣어줍니다.

<br>

> 패키지명이 `com.anstagram`이 아닌 다른 패키지명이라면 아래와 같이 수정해줍니다.

`app.json`
```
{
  "expo": {
    ...,
    "ios": {
      ...,
      "bundleIdentifier": "com.anstagram"  // 수정할 부분(iOS 번들명)
    },
    "android": {
      ...,
      "package": "com.anstagram"  // 수정할 부분(AOS 패키지명)
    },
    ...
  }
}
```

<br>

### Admob

[Admob](https://admob.google.com/intl/ko/home/)에 접속하여 각각 플랫폼 앱을 추가합니다.

`app.json` 파일 안에 생성된 각 플랫폼 APP ID를 입력해줍니다.

```
{
  ...,
  "react-native-google-mobile-ads": {
    "android_app_id": "insert your aos app id",
    "ios_app_id": "insert your ais app id"
  }
}
```

<br>

`npx expo prebuild`를 os 파일들을 생성해줍니다.

<br>

그 후, `npx expo run:ios` 또는 `npx expo run:android`를 통해 앱을 빌드합니다.
