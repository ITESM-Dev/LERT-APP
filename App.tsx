import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Image 
                style = {{height: '100%', width: '100%'}}
                source ={{uri:'https://tentulogo.com/wp-content/uploads/2017/08/ibm-logo.jpg'}}
            />
            <Image 
                style = {{height: '100%', width: '100%'}}
                source ={require('./src/assets/ITESMDev.png')}
            />
            <Text
                style = {{fontSize: 80  }}
            > 
                Testing Hello world!  
            </Text>
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
});
