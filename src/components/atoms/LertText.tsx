import { ViewStyle } from 'react-native';

import { Text, Tooltip, useTheme } from 'native-base';

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
    underline?: string,
    tooltipDisabled?: boolean,
    numberOfLines?: number,
    onPress?: () => void;
}

/***
 * @param text The text to display
 * @param type The Type Style
 * @param style (optionl) ViewStyle to add more style
 * @param color (optional) Change text color
 * @param bold (optional) Fontweight bold
 * @param underline (optional) TextDecorationLine underline
 * @param tooltipDisabled (optional) Whether to show the tooltip on Hover / Default is true
 * @param numberOfLines (optional) text lines
 */
const LertText = (props: LertTextPropTypes) => {

    return (
        <Tooltip 
            label={props.text} 
            isDisabled={props.tooltipDisabled !== undefined ? props.tooltipDisabled : true} 
            openDelay={100} 
            placement='left'
        > 
            <Text 
                {...Styles[props.type]} 
                fontWeight={props.bold}
                textDecorationLine={props.underline}
                isTruncated
                numberOfLines={props.numberOfLines}
                style={props.style} 
                color={props.color ? props.color  : Theme.colors.text.primary}
                onPress={props.onPress}
            >
                {props.text}
            </Text>
        </Tooltip>
    );
};

export default LertText;