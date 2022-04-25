import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "~navigators/LoginStack";

const Login = () => {
    return (
        <NavigationContainer>
            <LoginStack/>
        </NavigationContainer>
    )
};

export default Login;