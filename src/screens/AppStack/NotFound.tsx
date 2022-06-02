import { VStack } from "native-base";
import LertText from "~components/atoms/LertText";
import * as textTypes from '~styles/constants/textTypes';
import Theme from '~theme/theme';

const ForgotPassword = () => {
    return (
        <VStack alignItems={"center"} bgColor={Theme.colors.components.background} flex={1}>
            <LertText text="Path not found" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
            <LertText text="Looks like there is something wrong wih the path you typed" type={textTypes.heading3} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
        </VStack>
    )
};

export default ForgotPassword;