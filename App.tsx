import { View, StyleSheet } from 'react-native';

import { NativeBaseProvider } from 'native-base';

import theme from '~theme/theme';
import Tests from 'Tests';

export default function App() {
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

