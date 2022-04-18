import { StyleSheet } from 'react-native';
import LertText from '~components/atoms/LertText';
import { Box } from 'native-base';
import theme from '~theme/theme';

const AppTitle = (props: any) => {
    return (
        <Box style={styles.blackBox}>
            <LertText text="LERT - LABOR EXPENSES RECOVERY TOOL" type="display02"/>
        </Box>
    );
};

type StyleType = {
    backgroundColor?: string;
}

const AppTitleStyles: { [name: string]: StyleType} = {
    blackBox: {
        backgroundColor: "dark.backdrop1",
    }
}

const styles = StyleSheet.create({
    blackBox: {
        backgroundColor: "#ff0000",
        alignSelf: "flex-end",
        alignContent: "flex-start",
        padding: 10
    },
    text: {
        color: "actions.actionPrimary"
    }
});

export default AppTitle;