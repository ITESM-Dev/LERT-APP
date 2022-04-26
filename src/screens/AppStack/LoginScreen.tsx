import { View, ImageBackground, useWindowDimensions, Linking } from 'react-native';
import { Box } from 'native-base';
import { useState, ViewStyle } from 'react';
import Theme from '~theme/theme';

import LertInput from '~components/molecules/LertInput';
import LertText  from '~components/atoms/LertText';
import LertButton from '~components/atoms/LertButton'

type BgBoxPropTypes = {
    text: string;
    style?: ViewStyle;
}

const BgBox = (props: BgBoxPropTypes) => {
    return (
        <Box
            {...props.style}
            bgColor={Theme.colors.text.bg} //Icons.Primary Not in palette 
            alignItems="center"
        >
            <LertText 
                text={props.text} 
                type="largeParagraph" 
                color={Theme.colors.light.backdrop1}
            />
        </Box>
    );
};

const LoginScreen = () => {

    const [IBMid, setIBMid] = useState("");
    const [password, setPassword] = useState("");

    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

    const IBMidHelp = "https://www.ibm.com/ibmid/myibm/help/us/helpdesk.html";

    return (
        <Box
            flexDirection="row"
        >
            {/*Left Side*/}
            <Box>
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

            {/*Right Side*/}
            <Box
                flex={1}
                flexDirection="row"
                alignContent="flex-end"
                justifyContent="center"
            >
                <Box
                    bgColor={Theme.colors.light.backdrop1}
                    justifyContent="center"
                    alignSelf="center"
                    padding="5%"
                    marginVertical="15%"
                >
                    <LertText
                        text="Log in to LERT"
                        type="longLayout2"
                    />

                    <LertText
                        style={{marginTop:"8%"}}
                        text="IBMid"
                        type="headingCompact"
                        color={Theme.colors.text.inputLabels}
                    />
                    <LertInput
                        placeholder="IBM ID"
                        style={{width: "100%"}}
                        text={IBMid}
                        setText={setIBMid}
                    />

                    <LertText
                        style={{marginTop:"8%"}}
                        text="Password"
                        type="headingCompact"
                        color={Theme.colors.text.inputLabels}
                    />
                    <LertInput
                        placeholder="Password"
                        style={{width: "100%"}}
                        text={password}
                        setText={setPassword}
                    />

                    <LertText
                        style={{alignSelf:"flex-end", marginTop:"5%"}}
                        text="Forgot password?"
                        type="headingCompact"
                        color={Theme.colors.actions.actionPrimary}
                    />

                    <LertButton 
                        title="Continue"
                        type={"primary"}
                        onPress={() => {}}
                        style={{
                            width: "35%",
                            marginTop: "10%"
                        }}
                    />

                    <Box
                        borderBottomColor={"rgba(22, 22, 22, 0.3)"} //Icons.Primary Not in palette
                        borderBottomWidth={1}
                        marginTop={"10%"}
                    />

                    <Box
                        flexDirection={"row"}
                    >
                        <LertText
                            style={{marginTop:"5%"}}
                            text="Don't have an account? "
                            type="headingCompact"
                        />
                        <LertText
                            style={{marginTop:"5%"}}
                            text="Create an IBMid"
                            type="headingCompact"
                            color={Theme.colors.actions.actionPrimary}
                        />
                    </Box>

                    <Box
                        flexDirection={"row"}
                    >
                        <LertText
                            style={{marginTop:"5%"}}
                            text="Need help?"
                            type="headingCompact "
                        />
                        <LertText
                            style={{marginTop:"6%"}}
                            text=" Contact the IBMid help desk"
                            type="headingCompact"
                            onPress={()=>{ Linking.openURL( IBMidHelp )}}
                            color={Theme.colors.actions.actionPrimary}
                        />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default LoginScreen
