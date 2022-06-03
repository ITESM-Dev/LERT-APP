import { StyleSheet } from 'react-native';

import { Box, Image } from 'native-base';

import LertText from '~components/atoms/LertText';
import theme from '~theme/theme';

import * as textTypes from '~styles/constants/textTypes';

const AppTitle = () => {

    const colors = theme.colors

    return (
        <Box
            padding={3}
            backgroundColor={colors.text.white}
            flexDirection='row' 
            justifyContent="flex-start"
        >
            <LertText 
                text={`LERT `}
                isTruncated={false}
                type={textTypes.display02} 
                color={colors.text.primary}
                bold="bold"
            />
            <LertText 
                text="LABOR EXPENSES RECOVERY TOOL" 
                type={textTypes.display01} 
                color={colors.text.primary}
            />
        </Box>
    );
};

export default AppTitle;