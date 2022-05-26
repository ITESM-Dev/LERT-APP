
import { useFonts } from 'expo-font';

import { View } from 'react-native';

import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';

import containerStyles from '~styles/containers';
import theme from '~theme/theme';

import Main from 'Main';

//Importing LoginScreen to test it
import LoginScreen from '~screens/AppStack/LoginScreen'
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '~store/store';

export default function App() {

	let [fontsLoaded] = useFonts({
		"IBMPlexSans-Bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
		"IBMPlexSans-SemiBold": require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
		"IBMPlexSans-Light": require("./assets/fonts/IBMPlexSans-Light.ttf"),
		"IBMPlexSans-Regular": require("./assets/fonts/IBMPlexSans-Regular.ttf")
	});

	if(!fontsLoaded) {
		return <></>;
	}
	
	return (
		<Provider store={store}>
			<NativeBaseProvider theme={theme}>
				<View style={containerStyles.app}>
					<Main/>
				</View>
			</NativeBaseProvider>
		</Provider>
  );
}

