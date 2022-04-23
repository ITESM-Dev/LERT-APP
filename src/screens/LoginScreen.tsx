import { View, ImageBackground, useWindowDimensions } from 'react-native';
import { Box } from 'native-base';
import { useState, ViewStyle } from 'react';
import Theme from '~theme/theme';

import LertInput from '~components/molecules/LertInput';
import LertText  from '~components/atoms/LertText';

type BgBoxPropTypes = {
    text: string;
    style?: ViewStyle;
}

const BgBox = (props: BgBoxPropTypes) => {
    return (
        <Box
            {...props.style}
            bgColor={Theme.colors.icons.primary}
            alignItems="center"
        >
            <LertText 
                text={props.text} 
                type="display01" 
                color={Theme.colors.light.backdrop1}
            />
        </Box>
    );
};

const LoginScreen = () => {

    const [text, setText] = useState("");

    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

    return (
        <Box>
            <Box>
                {/*Left Side*/}
                <ImageBackground 
                    style={{width: screenWidth/10.0 * 6, height: screenHeight, justifyContent:"center", alignItems:"start"}}
                    source={require("~../assets/bgLogin.jpg")}
                    alt="testing"
                >
                    <BgBox text="Welcome to LERT" style={{marginLeft:"18%"}}>
                    </BgBox>

                    <BgBox text="Labor Expenses Recovery Tool" style={{marginLeft:"18%"}}>
                    </BgBox>

                    <BgBox text="Making the expense recvery process faster and easier" style={{marginLeft:"18%", marginTop:"8%"}}>
                    </BgBox>

                </ImageBackground>
            </Box>
        </Box>
    );
};

/*
<LertInput
                            placeholder="IBM ID"
                            style={{width: "10%"}}
                            text={text}
                            setText={setText}
                        />
*/

export default LoginScreen