import { StyleSheet } from 'react-native';
import LertText from '~components/atoms/LertText';
import { Box } from 'native-base';

const AppTitle = () => {
    return (
        <Box 
            backgroundColor={"dark.backdrop1"} 
            alignSelf={"flex-end"}
            alignContent={"flex-start"}
            padding={10}
        >
            <LertText text="LERT - LABOR EXPENSES RECOVERY TOOL" type="display02" color="components.selectedState"/>
        </Box>
    );
};

export default AppTitle;