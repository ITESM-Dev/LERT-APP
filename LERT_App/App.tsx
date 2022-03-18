import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type CustomTextPropTypes = {
  name?: string
}
/**
 * Oso text
 * @param name nombre del oso 
 * @returns 
 */
const CustomText = (props: CustomTextPropTypes) => {
  return (
    <Text>{props.name}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomText name = "oso"/>
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
