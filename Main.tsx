import { useEffect } from "react";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native";

import Content from "Content";

import AppStack from "~navigators/AppStack";

import { AppDispatch } from "~store/store";
import { 
    getTokenFromStorageThunk, 
    setUser, 
    userSelector, 
    UserType
} from "~store/user";

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

    /** @todo Add Token verification to get User Info from API */
    useEffect(() => {
        dispatch(getTokenFromStorageThunk()).then(({ payload }: any) => {
            if (payload !== null) 
                dispatch(setUser({ token: payload } as UserType))
        })
    }, [])

    if (Object.keys(user).length === 0 || user.token === "undefined") 
        return (
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
                <AppStack/>
            </NavigationContainer>
        )
    
    return (  
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Content />
        </NavigationContainer>
    )
    
};

export default Main;