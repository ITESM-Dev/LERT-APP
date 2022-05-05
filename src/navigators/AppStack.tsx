import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'native-base';
import { Button } from 'react-native';
import { View } from 'react-native';
import AppTitle from '~components/molecules/AppTitle';

import ForgotPassword from '~screens/AppStack/ForgotPassword';
import LoginScreen from '~screens/AppStack/LoginScreen';
import SignUp from '~screens/AppStack/SignUp';
import Content from '~../Content';
import theme from '~theme/theme';

const Stack = createNativeStackNavigator();

const ContentHeader = () => {
    return(
        <View style={{ padding: 0 }}>
            <AppTitle/>
        </View>
    )
}

const AppStack = () => {
    
    /** @todo add Redux State */
    const userIsLogged = false;

    return (
        <Stack.Navigator
            initialRouteName={userIsLogged ? 'Content': 'LoginScreen'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name='LoginScreen'
                component={LoginScreen}
            />

            <Stack.Screen 
                name='SignUp'
                component={SignUp}
            />

            <Stack.Screen 
                name='ForgotPassword'
                component={ForgotPassword}
            />

            {/* Drawer Navigator */}
            <Stack.Screen 
                name='Content'
                component={Content}
                options={{ 
                    header: ContentHeader,
                    headerShown: true, 
                    headerStyle: { backgroundColor: theme.colors.text.primary }
                }}
            />

        </Stack.Navigator>
    )
};

export default AppStack;
