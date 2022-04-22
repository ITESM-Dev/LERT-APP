import { Input, Box } from 'native-base';
import { Dispatch, SetStateAction, useState } from 'react';
import { ViewStyle } from 'react-native';
import Theme from '~theme/theme';

import BodyStyles from '~styles/body';

type LertInputPropTypes = {
    placeholder: string;
    style?: ViewStyle;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
}

const LertInput = (props: LertInputPropTypes) => {
    return (
        <Input 
            bgColor={Theme.colors.light.backdrop1}
            borderRadius={0}
            borderWidth={0}
            borderBottomWidth={1}
            borderTopWidth={1}
            borderTopColor={"rgba(0, 0, 0, 0.0)"}
            borderBottomColor={Theme.colors.dark.backdrop1}
            variant={"outline"}
            {...props.style}
            placeholder={props.placeholder}
            onChangeText={props.setText}
            value={props.text}
            _focus={{
                borderWidth: 1,
                borderColor: Theme.colors.actions.actionPrimary,
                borderBottomColor: Theme.colors.actions.actionPrimary,
                borderTopColor: Theme.colors.actions.actionPrimary
            }}
            _text={{
                ...BodyStyles.paragraphComponents
            }}
        />
    );
};

export default LertInput;