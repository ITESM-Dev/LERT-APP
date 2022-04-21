import { StyleSheet } from "react-native";

import Theme from '~theme/theme'

const containerStyles: { [key: string]:any } = {
    app: {
        flex: 1,
    },
    screen_light: {
        flex: 1,
        backgroundColor: Theme.colors.light.backdrop2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    screen_drak: {
        flex: 1,
        backgroundColor: Theme.colors.dark.backdrop1,
        alignItems: 'center',
        justifyContent: 'center',
    },

};

export default containerStyles;