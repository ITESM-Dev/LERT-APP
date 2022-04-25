import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '~screens/AppStack/LoginScreen';
import SignUp from '~screens/AppStack/SignUp';
import ForgotPassword from '~screens/AppStack/ForgotPassword';
import Content from '~screens/ContentDrawer/Content';

const Stack = createNativeStackNavigator();

const AppStack = () => {
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
            <Stack.Screen
                name='Content'
                component={Content}
            />
        </Stack.Navigator>
    )
};

export default AppStack;
