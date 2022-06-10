import { useState } from 'react';
import { View, ImageBackground, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Box } from 'native-base';

import { AppDispatch } from '~store/store';
import { SignUpForm } from '~store/api';
import { signUpUserThunk } from '~store/user';

import LertText from '~components/atoms/LertText';
import LertButton from '~components/atoms/LertButton'
import LertInput from '~components/molecules/LertInput';
import Dropdown from '~components/molecules/Dropdown';

import theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';

import { APP_STACK_SCREENS } from '~utils/screenNames';
import { USER_ROLES } from '~utils/constants';

const SignUp = () => {

    const navigation: any = useNavigation()
    const dispatch: AppDispatch = useDispatch()
    
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("")

    const dropdownCountries = [
        { label: 'México', value: 'Mexico' },
    ]

    const handleSubmit = () => {
        const signUpForm: SignUpForm = {
            name: `${firstName} ${lastName}`,
            mail: email,
            password: password,
            role: USER_ROLES.RESOURCE,
            band: '0',
            country: country
        }

        dispatch(signUpUserThunk(signUpForm))
            .then((response: any) => {
                if(response.meta.requestStatus === 'fulfilled') 
                    navigation.navigate(APP_STACK_SCREENS.LoginScreen)
            })
            .catch((error: any) => {

            });
    }

    return (
        <View style={{flexDirection:"row"}}>
            <Box>
                <ImageBackground 
                    // @ts-ignore
                    style={{width: screenWidth/10.0 * 5.5, height: screenHeight, justifyContent:"center", alignItems:"start"}}
                    source={require("~../assets/bgLogin.jpg")}
                    alt="Login Background"
                >
                
                <View  style={{ width: '100%', flexDirection: 'row' }}>
                    <LertText
                        text="Create your "
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft: '18%'
                        }}
                        type={textTypes.display04}
                    />

                    <LertText
                        text="IBM"
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft: '.5%'
                        }}
                        type={textTypes.display03}
                    />
                   </View>
                   <LertText
                        text="Account"
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft: '18%'
                        }}
                        type={textTypes.display04}
                    />
                   
                    <LertText
                        text="Access to trials, demos, starter kits, services and APIs"
                        numberOfLines={2}
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft:"18%", 
                            marginTop:"5%", 
                            marginRight:"10%",
                            width: '55%'
                        }}
                        type={textTypes.display01}
                    />

                </ImageBackground>
            </Box>
            <Box style={{marginTop:'5%', marginHorizontal:'5%', width: '30%'}}>
                <LertText
                    text="Sign up for an IBMid"
                    color={theme.colors.text.primary}
                    type={textTypes.display02}
                    />

               <Box style={{flexDirection:'row', marginTop:'2%', width: '100%'}}>
                    <LertText
                        style={{marginTop:"1%"}}
                        text="Already have an IBM account? "
                        isTruncated={false}
                        type={textTypes.label}
                        />

                    <LertText
                        style={{alignSelf:"flex-end", marginTop:"1%"}}
                        text="Log in"
                        type={textTypes.label}
                        color={theme.colors.actions.actionPrimary}
                        underline="underline"
                        onPress={() => {
                            navigation.navigate({ name: APP_STACK_SCREENS.LoginScreen })
                        }}
                    />                
               </Box>

               <Box
                        borderBottomColor={"rgba(22, 22, 22, 0.3)"} //Icons.Primary Not in palette
                        borderBottomWidth={1}
                        marginTop={"2%"}
                    />

               <LertText
                    style={{marginTop:"7%"}}
                    text="Account information"
                    type={textTypes.display01}
                    />

               <LertInput
                    placeholder="Email"
                    style={{width: "100%", marginTop:"1%"}}
                    text={email}
                    setText={setEmail}
                    />
                
                <LertInput
                    placeholder="Password"
                    password={true}
                    style={{ width: "100%", marginTop:"5%" }}
                    text={password}
                    setText={setPassword}
                /> 

                <LertText
                    style={{marginTop:"5%"}}
                    text="Personal information"
                    type={textTypes.display01}
                />
                <Box style={{flexDirection:'row', width: '100%'}}>
                    <LertInput
                        placeholder="First name"
                        style={{width: "100%", marginTop:"5%" }}
                        text={firstName}
                        setText={setFirstName}
                        />
                    
                    <LertInput
                        placeholder="Last name"
                        style={{ width: "100%", marginTop:"5%", marginLeft:"5%"}}
                        text={lastName}
                        setText={setLastName}
                        />

                </Box>

                <Dropdown 
                    placeholder="Country" 
                    items={dropdownCountries} 
                    style={{marginTop:'10%'}}
                    value={country}
                    setValue={setCountry}
                />    
                
                <LertButton 
                        title="Continue"
                        type={"primary"}
                        onPress={() => {
                            handleSubmit()
                        }}
                        style={{
                            width: "35%",
                            marginTop: "10%"
                        }}
                    />
            </Box>
        </View>
    )
};

export default SignUp;