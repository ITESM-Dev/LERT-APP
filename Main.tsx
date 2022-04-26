import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import AppStack from "~navigators/AppStack";

const Main = () => {

    const linkingOptions: LinkingOptions<ReactNavigation.RootParamList> = { 
        enabled: true,
        prefixes: [ 'lertApp://' ] // Not used for web
    }

    return (
        <NavigationContainer linking={linkingOptions}>
            <AppStack/>
        </NavigationContainer>
    )
};

export default Main;