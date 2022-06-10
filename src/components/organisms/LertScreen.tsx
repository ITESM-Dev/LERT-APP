import Content from "Content";
import { isLoaded, isLoading } from "expo-font";
import { ScrollView, View, Skeleton, Spinner } from "native-base"
import { Children, useContext, useState } from "react";
import { render } from "react-dom";
import AppTitle from "~components/molecules/AppTitle";

import LegalMenu from "~components/molecules/LegalMenu"
import Loading from "~components/molecules/Loading";
import LoadingMenu from "~components/molecules/LoadingMenu";
import containerStyles from "~styles/containers"
import theme from "~theme/theme";



const LertScreen = ({ children, isLoading }: any) => {


    if (isLoading){
        return(<Loading />)
    }
        
    return(
        <View 
            style={{
                height: '100%',
                justifyContent: 'space-betwen',
            }}
        >
            <AppTitle />

            <ScrollView>
                <View style={containerStyles.insideScreen}>
                    {children}
                </View>
            </ScrollView>

            <LegalMenu />
        </View>
    )    
};

export default LertScreen;


