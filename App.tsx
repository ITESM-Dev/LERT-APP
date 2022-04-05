import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
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
      <View style={{flex: 1}}>
        <Text style={styles.title}>ItesmDev's LERT Prototype</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
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