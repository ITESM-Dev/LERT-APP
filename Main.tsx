import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native";

import Content from "Content";

import AppStack from "~navigators/AppStack";

import { AppDispatch } from "~store/store";
import { 
    clearUser,
    setUser,
    userSelector,
    UserType, 
} from "~store/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserInfoThunk } from "~store/user/thunks";

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

    const checkIfUserExists = async () => {
        const token = await AsyncStorage.getItem("token")
        const mail = await AsyncStorage.getItem("mail")

        if (token && token != undefined && mail && mail != undefined) {
            dispatch(
                setUser(
                    { token: token, mail: mail } as UserType
                )
            )
            dispatch(getUserInfoThunk())
                .unwrap()
                .catch((error: string) => {
                    alert(error)
                    dispatch(clearUser())
                })
        }
    }

    useEffect(() => {
        checkIfUserExists()
    }, [])

    if (!user.token || !user.mail) 
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