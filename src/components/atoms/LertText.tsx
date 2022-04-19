import { Text } from 'native-base';
import { ViewStyle } from 'react-native';
import DisplayStyles, { DisplayTypes } from '~styles/display';
import FixedHeadingStyles, { FixedHadingTypes } from '~styles/fixedHeadings';
import UtilityStyles, { UtilityTypes } from '~styles/utilityStyles';
import BodyStyles, { BodyTypes } from '~styles/body';
import theme from '../../theme/theme';

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
    onPress?: () => void;
}

/***
 * @param text The text to display
 * @param type The Type Style
 * @param style (optionl) ViewStyle to add more style
 */
const LertText = (props: LertTextPropTypes) => {
    return (
        <Text 
            style={props.style} 
            {...Styles[props.type]} 
            color={props.color ? props.color  :"#14142B"}
            onPress={props.onPress}
        >
            {props.text}
        </Text>
    );
};

export default LertText;