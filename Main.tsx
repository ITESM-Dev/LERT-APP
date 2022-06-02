import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native";

import Content from "Content";

import AppStack from "~navigators/AppStack";

import { AppDispatch } from "~store/store";
import { 
    userSelector, 
} from "~store/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {

    const linking = {
        config: {
            screens: {
                LoginScreen: "LoginScreen",
                SignUp: "SignUp",
                ForgotPassword: "ForgotPassword",
                Home: "Home",
                Types: "Types",
                ICAS: "ICAS",
                ExpensesTypes: "ExpensesTypes",
                ExtraHours: "ExtraHours",
                ManageManagerFunctions: "ManageManagerFunctions",
                EditManagerInformation: "EditManagerInformation",
                Delegate: "Delegate",
                Employee: "Employee",
                Expenses: "Expenses",
                Recovery: "Recovery",
                CurrentPeriod: "CurrentPeriod",
                NotFound: '*',
            }
        }
    };

    const dispatch: AppDispatch = useDispatch()
    const user = useSelector(userSelector)

    useEffect(() => {
        /** @todo Uncomment this and Add Token verification to get User Info from API */
        /*AsyncStorage.getItem("token")
            .then(token => {
                if (token && token != undefined) {
                    dispatch(setUser({ token: token } as UserType))
                }
            })*/
    }, [])

    if (!user.token) 
        return (
            // @ts-ignore
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
                <AppStack/>
            </NavigationContainer>
        )
    
    return (  
        // @ts-ignore
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Content />
        </NavigationContainer>
    )
    
};

export default Main;