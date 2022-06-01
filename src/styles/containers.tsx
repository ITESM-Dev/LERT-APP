import { StyleSheet } from "react-native";

import Theme from '~theme/theme'

const containerStyles: { [key: string]:any } = {
    app: {
        flex: 1,
    },
    screen_light: {
        flex: 1,
        backgroundColor: Theme.colors.text.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen_drak: {
        flex: 1,
        backgroundColor: Theme.colors.text.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentScreen: {
        flex: 1,
        backgroundColor: Theme.colors.components.background,
    },
    insideScreen: {
        margin: '5%'
    }

};

export default containerStyles;