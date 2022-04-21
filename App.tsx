import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { View } from 'react-native';

import { NativeBaseProvider } from 'native-base';

import containerStyles from '~styles/containers';
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
			<View style={containerStyles.app}>
				<Tests/>
			</View>
		</NativeBaseProvider>
  );
}

