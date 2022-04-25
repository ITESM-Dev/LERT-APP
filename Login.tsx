import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "~navigators/LoginStack";

const Login = () => {
    return (
        <NavigationContainer linking={{ enabled: true }}>
            <LoginStack/>
        </NavigationContainer>
    )
};

export default Login;