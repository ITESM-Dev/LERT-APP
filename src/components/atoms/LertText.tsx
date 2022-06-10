import { ViewStyle } from 'react-native';

import { Text } from 'native-base';

import DisplayStyles, { DisplayTypes } from '~styles/display';
import FixedHeadingStyles, { FixedHadingTypes } from '~styles/fixedHeadings';
import UtilityStyles, { UtilityTypes } from '~styles/utilityStyles';
import BodyStyles, { BodyTypes } from '~styles/body';
import Theme from '../../theme/theme';

export type StyleTypes = DisplayTypes | BodyTypes | FixedHadingTypes | UtilityTypes;

export const TextStyles = {
    ...DisplayStyles,
    ...BodyStyles,
    ...FixedHeadingStyles,
    ...UtilityStyles
}

export type TextType = {
    fontWeight: "light" | "regular" | "semibold" | "bold",
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
    bold?: "light" | "regular" | "semibold" | "bold",
    underline?: string,
    tooltipDisabled?: boolean,
    numberOfLines?: number,
    isTruncated?: boolean,
    onPress?: () => void;
}

/***
 * @param text The text to display
 * @param type The Type Style
 * @param style (optionl) ViewStyle to add more style
 * @param color (optional) Change text color
 * @param bold (optional) "light" | "regular" | "semibold" | "bold"
 * @param underline (optional) TextDecorationLine underline
 * @param tooltipDisabled (optional) Whether to show the tooltip on Hover / Default is true
 * @param numberOfLines (optional) text lines
 */
const LertText = (props: LertTextPropTypes) => {

    return (
        <Text 
            {...TextStyles[props.type]} 
            fontWeight={props.bold !== undefined ? props.bold : 
                TextStyles[props.type] !== undefined ? 
                    TextStyles[props.type].fontWeight : 'light'
            }
            textDecorationLine={props.underline}
            isTruncated={props.isTruncated !== undefined ? props.isTruncated : true}
            numberOfLines={props.numberOfLines}
            style={props.style} 
            color={props.color ? props.color  : Theme.colors.text.primary}
            onPress={props.onPress}
        >
            {props.text}
        </Text>
    );
};

export default LertText;