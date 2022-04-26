import { ViewStyle } from 'react-native';

import { Text, useTheme } from 'native-base';

import DisplayStyles, { DisplayTypes } from '~styles/display';
import FixedHeadingStyles, { FixedHadingTypes } from '~styles/fixedHeadings';
import UtilityStyles, { UtilityTypes } from '~styles/utilityStyles';
import BodyStyles, { BodyTypes } from '~styles/body';
import Theme from '../../theme/theme';

export type StyleTypes = DisplayTypes | BodyTypes | FixedHadingTypes | UtilityTypes;

const Styles = {
    ...DisplayStyles,
    ...BodyStyles,
    ...FixedHeadingStyles,
    ...UtilityStyles
}

export type TextType = {
    fontWeight: string,
    fontStyle: string,
    fontFamily: string,
    fontSize: number,
    lineHeight: number,
    letterSpacing: number
}

type LertTextPropTypes = {
    text: string,
    type: StyleTypes,
    style?: ViewStyle,
    color?: string,
    bold?: string,
    underline?: string
    onPress?: () => void;
}

/***
 * @param text The text to display
 * @param type The Type Style
 * @param style (optionl) ViewStyle to add more style
 * @param color (optional) Change text color
 * @param bold (optional) Fontweight bold
 * @param underline (optionL) TextDecorationLine underline
 */
const LertText = (props: LertTextPropTypes) => {

    const Colors = theme.colors

    return (
        <Text 
            {...Styles[props.type]} 
            fontWeight={props.bold}
            textDecorationLine={props.underline}
            style={props.style} 
            color={props.color ? props.color  : Theme.colors.text.primary}
            onPress={props.onPress}
        >
            {props.text}
        </Text>
    );
};

export default LertText;