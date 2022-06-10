import { Box, View } from "native-base";
import AppTitle from "~components/molecules/AppTitle";
import ContentDrawer from "~navigators/ContentDrawer";
import theme from "~theme/theme";

const Content = () => {
    return (
        <Box 
            flex={1}
            backgroundColor={theme.colors.text.primary}
        >
            
            <ContentDrawer/>
        </Box>
    )
};

export default Content;