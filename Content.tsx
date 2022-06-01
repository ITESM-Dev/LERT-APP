import { View } from "native-base";
import AppTitle from "~components/molecules/AppTitle";
import ContentDrawer from "~navigators/ContentDrawer";
import theme from "~theme/theme";

const Content = () => {
    return (
        <>
            <View style ={{
                backgroundColor: theme.colors.text.primary,
                padding: 0
            }}>
                <AppTitle />
            </View>
            <ContentDrawer/>
        </>
    )
};

export default Content;