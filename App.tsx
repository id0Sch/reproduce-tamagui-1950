import { StatusBar } from 'expo-status-bar';
import { Button,View,Text, TamaguiProvider } from 'tamagui'
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { config } from './tamagui.config';

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded){
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if(!loaded){
    return
  }
  
  return (
    <View padding={24} paddingTop={120}>
      <Text >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button>Hello world</Button>
    </View>
  );
}

export default () => {
  return (
    <TamaguiProvider config={config}>
      <App/>
    </TamaguiProvider>

  )
}