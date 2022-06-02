import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ForgotPassword from '~screens/AppStack/ForgotPassword';
import LoginScreen from '~screens/AppStack/LoginScreen';
import SignUp from '~screens/AppStack/SignUp';
import { APP_STACK_SCREENS } from '~utils/screenNames';
import { useSelector } from 'react-redux';
import { userSelector } from '~store/user';
import NotFound from '~screens/AppStack/NotFound';

const Stack = createNativeStackNavigator();

const AppStack = () => {

    const user = useSelector(userSelector);

    return (
        <Stack.Navigator
            initialRouteName={APP_STACK_SCREENS.LoginScreen}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name={APP_STACK_SCREENS.LoginScreen}
                component={LoginScreen}
            />

            <Stack.Screen 
                name={APP_STACK_SCREENS.SignUp}
                component={SignUp}
            />

            <Stack.Screen 
                name={APP_STACK_SCREENS.ForgotPassword}
                component={ForgotPassword}
            />

            <Stack.Screen 
                name={APP_STACK_SCREENS.NotFound}
                component={NotFound}
            />

        </Stack.Navigator>
    )
};

export default AppStack;
