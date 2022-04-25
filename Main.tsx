import { NavigationContainer } from "@react-navigation/native";
import AppStack from "~navigators/AppStack";

const Main = () => {
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
};

export default Main;