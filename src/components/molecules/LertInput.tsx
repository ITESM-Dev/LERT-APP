import { Input } from 'native-base';
import { ViewStyle } from 'react-native';

type LertInputPropTypes = {
    placeholder: string;
    style?: ViewStyle;
}

const LertInput = (props: LertInputPropTypes) => {
    return (
        <Input 
            variant={"underlined"}
            style={props.style}
            placeholder={props.placeholder}
            width='50%'
            maxW="300px"
        />
    );
};

export default LertInput;