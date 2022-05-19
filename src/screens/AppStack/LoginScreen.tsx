import { View, ImageBackground, useWindowDimensions, Linking, ViewStyle  } from 'react-native';
import { Box } from 'native-base';
import { useEffect, useState } from 'react';
import Theme from '~theme/theme';

import LertInput from '~components/molecules/LertInput';
import LertText, { StyleTypes }  from '~components/atoms/LertText';
import LertButton from '~components/atoms/LertButton'

import * as textTypes from '~styles/constants/textTypes';
import Main from 'Main';
import { useNavigation } from '@react-navigation/native';
import theme from '~theme/theme';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { useGetFactsQuery } from '~store/api/slice'
import { useDispatch } from 'react-redux';
import { AppDispatch, store } from '~store/store';
import { addFacts } from '~store/cats/slice';
import { catFactsSelectors } from '~store/cats/selectors';

type BgBoxPropTypes = {
    text: string;
    style?: ViewStyle;
    textType: string;
}

const BgBox = (props: BgBoxPropTypes) => {
    return (
        <Box
            {...props.style}
            bgColor={Theme.colors.text.bg} 
            alignItems="center"
        >
            <LertText 
                text={props.text} 
                type={props.textType} 
                color={Theme.colors.text.white}
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
    

    const navigation = useNavigation()
    
    const dispatch: AppDispatch = useDispatch();
    
    //const catFacts = allCatFacts();

    const { data } = useGetFactsQuery()

    useEffect(() => {
        if (data !== undefined) dispatch(addFacts(data));
        //console.log(catFacts)
    }, [data])

    return (
        <Box
            flexDirection="row"
        >
            {/*Left Side*/}
            <Box>
                <ImageBackground 
                    style={{width: screenWidth/10.0 * 6, height: screenHeight, justifyContent:"center", alignItems:"start"}}
                    source={require("~../assets/bgLogin.jpg")}
                    alt="Login Background"
                >

                    <LertText
                        text="Welcome to"
                        numberOfLines={2}
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft: '18%'
                        }}
                        type={textTypes.heading5}
                    />
                    <LertText
                        text="LERT"
                        numberOfLines={2}
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft: '18%'
                        }}
                        type={textTypes.display06}
                    />
                    <LertText
                        text="Labor Expenses Recovery Tool"
                        numberOfLines={2}
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft: '18%'
                        }}
                        type={textTypes.displayParagraph}
                    />
                    <LertText
                        text="Making the expense recovery process faster and easier."
                        numberOfLines={2}
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft:"18%", 
                            marginTop:"8%", 
                            marginRight:"10%"
                        }}
                        type={textTypes.heading5}
                    />

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
                    bgColor={Theme.colors.components.offWhite}
                    justifyContent="center"
                    alignSelf="center"
                    padding="15%"
                    marginVertical="15%"
                >
                    <LertText
                        text="Log in to LERT"
                        type={textTypes.heading4}
                    />

                    <LertText
                        style={{marginTop:"8%"}}
                        text="IBMid"
                        type={textTypes.label}
                        color={Theme.colors.components.placeholderActive}
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
                        type={textTypes.label}
                        color={Theme.colors.components.placeholderActive}
                    />
                    <LertInput
                        placeholder="Password"
                        style={{width: "100%"}}
                        text={password}
                        setText={setPassword}
                        password={true}
                    />

                    <LertText
                        style={{alignSelf:"flex-end", marginTop:"5%"}}
                        text="Forgot password?"
                        type={textTypes.label}
                        color={Theme.colors.actions.actionPrimary}
                        underline="underline"
                    />

                    <LertButton 
                        title="Continue"
                        type={"primary"}
                        onPress={() => {
                            navigation.navigate("Content")
                        }}
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
                            type={textTypes.label}
                        />
                        <LertText
                            style={{marginTop:"5%"}}
                            text="Create an IBMid"
                            type={textTypes.label}
                            color={Theme.colors.actions.actionPrimary}
                            underline="underline"
                        />
                    </Box>

                    <Box
                        flexDirection={"row"}
                    >
                        <LertText
                            style={{marginTop:"5%"}}
                            text="Need help? "
                            type={textTypes.label}
                        />
                        <LertText
                            style={{marginTop:"5%"}}
                            text="Contact the IBMid help desk"
                            type={textTypes.label}
                            onPress={()=>{ Linking.openURL( IBMidHelp )}}
                            color={Theme.colors.actions.actionPrimary}
                            underline="underline"
                        />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default LoginScreen
