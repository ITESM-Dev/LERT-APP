import { useEffect, useState } from 'react';
import { 
    View, 
    ImageBackground, 
    useWindowDimensions, 
    Linking, 
    ViewStyle  
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';

import { AppDispatch } from '~store/store';
import { LoginForm } from '~store/api';
import { 
    userSelector, 
    UserType, 
    logUserThunk, 
    saveTokenInStorageThunk, 
    setUser
} from '~store/user';

import LertInput from '~components/molecules/LertInput';
import LertText from '~components/atoms/LertText';
import LertButton from '~components/atoms/LertButton'

import theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';

import { APP_STACK_SCREENS } from '~utils/screenNames';

type BgBoxPropTypes = {
    text: string;
    style?: ViewStyle;
    textType: string;
}

const BgBox = (props: BgBoxPropTypes) => {
    return (
        // @ts-ignore
        <Box
            {...props.style}
            bgColor={theme.colors.text.bg} 
            alignItems="center"
        >
            <LertText 
                text={props.text} 
                type={props.textType} 
                color={theme.colors.text.white}
            />
        </Box>
    );
};

const IBMidHelp = "https://www.ibm.com/ibmid/myibm/help/us/helpdesk.html";

const LoginScreen = () => {

    const navigation = useNavigation()
    const dispatch: AppDispatch = useDispatch();

    const user: UserType = useSelector(userSelector)

    const [IBMid, setIBMid] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;
    
    const handleSubmit = () => {
        // Construct Login Form for API call
        const loginForm: LoginForm = {
            mail: IBMid,
            password: password
        }

        setLoading(true)
        // Dispatch thunk Action
        dispatch(logUserThunk(loginForm))
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

    return (
        <Box
            flexDirection="row"
        >
            {/*Left Side*/}
            <Box>
                <ImageBackground 
                    // @ts-ignore
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
                    bgColor={theme.colors.components.offWhite}
                    justifyContent="center"
                    alignSelf="center"
                    padding="15%"
                >
                    <LertText
                        text="Log in to LERT"
                        type={textTypes.heading4}
                    />

                    <LertText
                        style={{marginTop:"8%"}}
                        text="IBMid"
                        type={textTypes.label}
                        color={theme.colors.components.placeholderActive}
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
                        color={theme.colors.components.placeholderActive}
                    />
                    <LertInput
                        placeholder="Password"
                        style={{width: "100%"}}
                        text={password}
                        setText={setPassword}
                        password={true}
                    />

                    <LertButton 
                        title="Continue"
                        type={"primary"}
                        disabled={loading}
                        onPress={() => {
                            handleSubmit()
                        }}
                        style={{
                            width: "35%",
                            marginTop: "10%"
                        }}
                    />
                    {error && <LertText 
                        text={error}
                        type={textTypes.label}
                        color={theme.colors.alerts.errorSecondary}
                    />}

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
                            color={theme.colors.actions.actionPrimary}
                            underline="underline"
                            onPress={() => {
                                // @ts-ignore
                                navigation.navigate({ name: APP_STACK_SCREENS.SignUp })
                            }}
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
                            color={theme.colors.actions.actionPrimary}
                            underline="underline"
                        />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default LoginScreen
