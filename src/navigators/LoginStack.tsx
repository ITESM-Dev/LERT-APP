import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '~screens/AppStack/LoginScreen';
import SignUp from '~screens/AppStack/SignUp';
import ForgotPassword from '~screens/AppStack/ForgotPassword';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <Stack.Navigator>
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
        </Stack.Navigator>
    )
};

export default LoginStack;
