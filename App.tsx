import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import theme from './src/theme/theme';
import LertText from "./src/components/LertText"

export default function App() {
  let [fontsLoaded] = useFonts({
    "IBMPlexSans-Bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    "IBMPlexSans-SemiBold": require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
    "IBMPlexSans-Light": require("./assets/fonts/IBMPlexSans-Light.ttf"),
    "IBMPlexSans-Regular": require("./assets/fonts/IBMPlexSans-Regular.ttf")
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <View style={{flex: 2, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Image 
            style={styles.logo}
            source={require('./assets/ItesmDev_Transparente.png')}
          />
          <Image 
            style={{width: 320, height: 128, padding: 10}}
            source={require('./assets/IBM_logo.png')}
          />
        </View>
        <Box {...box}>
          <LertText 
            text="Saludos" 
            type="display03"
          />
        </Box>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const box = {
  flex: 1,
  bg: "#fff",
  alignItems: "center",
  justifyContent: "start",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 320,
    height: 160,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#00367d"
  },
  
});