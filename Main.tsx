import { NavigationContainer } from "@react-navigation/native";
import ContentDrawer from "~navigators/ContentDrawer";

const Main = () => {
    return (
        <NavigationContainer>
            <ContentDrawer/>
        </NavigationContainer>
    )
};

export default Main;