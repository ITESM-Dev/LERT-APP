import LoginScreen from "~screens/AppStack/LoginScreen"
//const LoginScreen = require("../../src/screens/AppStack/LoginScreen")
import { render } from '@testing-library/react-native'

test("Login UI", () => {
    const { getByText, getAllByText } = render(
        <LoginScreen/>
    );
})