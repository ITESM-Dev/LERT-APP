import { NavigationContainer } from "@react-navigation/native";
import ContentDrawer from "~navigators/ContentDrawer";

const Main = () => {
    return (
        <NavigationContainer linking={{ enabled: true }} >
            <ContentDrawer/>
        </NavigationContainer>
    )
};

export default Main;