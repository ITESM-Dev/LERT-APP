import { useEffect } from "react";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

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

    const linkingOptions: LinkingOptions<ReactNavigation.RootParamList> = { 
        enabled: true,
        prefixes: [ 'lertApp://' ] // Not used for web
    }

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
            <NavigationContainer linking={linkingOptions}>
                <AppStack/>
            </NavigationContainer>
        )
    
    return (  
        <NavigationContainer linking={linkingOptions}>
            <Content />
        </NavigationContainer>
    )
    
};

export default Main;