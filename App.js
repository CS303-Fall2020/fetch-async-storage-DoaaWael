import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import Navigator from './routes/drawer'
import Loading from './screens/loading'


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);



  if (fontsLoaded) {
    return (
      <Navigator />
      // <Loading/>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

