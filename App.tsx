import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { View, StyleSheet } from 'react-native';

import { NativeBaseProvider } from 'native-base';

import theme from '~theme/theme';
import Tests from 'Tests';

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
				<Tests/>
			</View>
		</NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

