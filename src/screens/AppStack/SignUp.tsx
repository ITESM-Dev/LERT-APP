import { View, ImageBackground, useWindowDimensions, Linking } from 'react-native';
import { Box } from 'native-base';
import { useState, ViewStyle } from 'react';
import Theme from '~theme/theme';

import LertInput from '~components/molecules/LertInput';
import LertText, { StyleTypes }  from '~components/atoms/LertText';
import LertButton from '~components/atoms/LertButton'

import * as textTypes from '~styles/constants/textTypes';
import Main from 'Main';
import { useNavigation } from '@react-navigation/native';
import theme from '~theme/theme';
import Dropdown from '~components/molecules/Dropdown';



const SignUp = () => {
    
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const dropdownCountries = [
        { label: 'Mexico', value: 'first' },
        { label: 'India', value: 'secondary' },
        { label: 'Austrailia', value: 'secondary' },
    ]
    return (
        <View style={{flexDirection:"row"}}>
            <Box>
                <ImageBackground 
                    style={{width: screenWidth/10.0 * 5.5, height: screenHeight, justifyContent:"center", alignItems:"start"}}
                    source={require("~../assets/bgLogin.jpg")}
                    alt="Login Background"
                >
                
                <View  style={{ width: '100%', flexDirection: 'row' }}>
                    <LertText
                        text="Create your "
                        //numberOfLines={}
                        color={theme.colors.text.white}
                        style={{
                            backgroundColor: theme.colors.text.bg,
                            marginLeft: '18%'
                        }}
                        type={textTypes.display04}
                    />

                    <LertText
                        text="IBM"
                        //numberOfLines={1}
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
                        //numberOfLines={1}
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
                    //numberOfLines={}
                    color={theme.colors.text.primary}
                    type={textTypes.display02}
                    />

               <Box style={{flexDirection:'row', marginTop:'2%', width: '100%'}}>
                    <LertText
                        style={{marginTop:"1%"}}
                        text="Already have an IBM account? "
                        type={textTypes.label}
                        />

                    <LertText
                        style={{alignSelf:"flex-end", marginTop:"1%"}}
                        text="Log in"
                        type={textTypes.label}
                        color={Theme.colors.actions.actionPrimary}
                        underline="underline"
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
                    style={{width: "100%", marginTop:"5%", marginBottom:'7%'}}
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
                        style={{width: "100%", marginTop:"1%"}}
                        text={firstName}
                        setText={setFirstName}
                        />
                    
                    <LertInput
                        placeholder="Last name"
                        style={{width: "100%", marginTop:"5%", marginLeft:"5%"}}
                        text={lastName}
                        setText={setLastName}
                        />

                </Box>

                <Dropdown placeholder="Country" items={dropdownCountries} style={{marginTop:'10%'}}/>    
                
                <LertButton 
                        title="Continue"
                        type={"primary"}
                        onPress={() => {
                            //navigation.navigate("Content")
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