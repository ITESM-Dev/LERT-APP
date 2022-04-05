import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';

import theme from './src/styles/theme';

export default function App() {
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
          <Text style={styles.title}>Welcome to ItesmDev's LERT Prototype</Text>
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