import { Box, ScrollView, Slide, View } from "native-base"
import { useEffect } from "react";

import AppTitle from "~components/molecules/AppTitle";
import LegalMenu from "~components/molecules/LegalMenu"
import Loading from "~components/molecules/Loading";
import Notification from "~components/molecules/Notification";

import containerStyles from "~styles/containers"

const LertScreen = ({ 
    children, 
    isLoading, 
    success, 
    setSuccess,
    error,
    setError, 
    }: any) => {

    if (isLoading) {
        return(<Loading />)
    }

    useEffect(() => {
        setTimeout(() => {
            if (success) setSuccess(null)
            if (error) setError(null)
        }, 5000)
    }, [success, error])
        
    return(
        <View 
            // @ts-ignore
            style={{
                height: '100%',
                justifyContent: 'space-betwen',
            }}
        >
            <AppTitle />

            { success &&
                <Slide 
                    flex={1}
                    position={'absolute'} 
                    in={success !== null} 
                    placement={"right"}
                >
                    <Notification 
                        title={"Success"} 
                        body={success} 
                        type={"success"}                 
                    />
                </Slide>
            }
            { error && 
                <Slide 
                    in={error !== null}
                    position={'absolute'}
                    placement={"right"}
                    flex={1}
                >
                    <Notification 
                        title={"Error"} 
                        body={error} 
                        type={"error"}                 
                    />
                </Slide>
            }

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


