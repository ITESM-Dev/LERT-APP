import { Input, Box } from 'native-base';
import { Dispatch, SetStateAction, useState } from 'react';
import { ViewStyle } from 'react-native';
import Theme from '~theme/theme';

import BodyStyles from '~styles/body';

type LertInputPropTypes = {
    placeholder?: string;
    style?: ViewStyle;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    password?: boolean;
}

/**
 * 
 * @param placeholder (optional) Placeholder text 
 * @param style (optional) ViewStyle
 * @param text The variable in which the input is stored
 * @param setText The function to update the text variable
 * @param password (optional) Hides text if true
 * 
 */
const LertInput = (props: LertInputPropTypes) => {
    return (
        <Input
            type={props.password ? "password" : "text"}
            variant=    "outline" 
            {...LertInputStyle}
            {...props.style}

            placeholder={props.placeholder}
            onChangeText={props.setText}
            value={props.text}

            _focus={{
                borderWidth: 1,
                borderColor: Theme.colors.actions.actionPrimary,
                borderBottomColor: Theme.colors.actions.actionPrimary,
                borderTopColor: Theme.colors.actions.actionPrimary,
                bgColor: Theme.colors.components.background
            }}

            _text={{
                ...BodyStyles.paragraphComponents
            }}
        />
    );
};

export const LertInputStyle = {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.0)",
    borderBottomColor: Theme.colors.text.primary,
}

export default LertInput;