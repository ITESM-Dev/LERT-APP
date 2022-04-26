import { StyleSheet } from 'react-native';

import { Box, Image } from 'native-base';

import LertText from '~components/atoms/LertText';
import theme from '~theme/theme';

const AppTitle = () => {

    const colors = theme.colors

    return (
        <Box 
            flex={1}
            padding={3}
            backgroundColor={colors.light.backdrop2}
            flexDirection='row' 
            justifyContent="flex-start"
        >
            <LertText 
                text="LERT " 
                type="boldLongLayout2" 
                color={colors.text.primary}
            />
            <LertText 
                text="LABOR EXPENSES RECOVERY TOOL" 
                type="longLayout2" 
                color={colors.text.primary}
            />
        </Box>
    );
};

export default AppTitle;