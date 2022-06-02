import { ScrollView, View } from "native-base"
import AppTitle from "~components/molecules/AppTitle";

import LegalMenu from "~components/molecules/LegalMenu"

import containerStyles from "~styles/containers"

const LertScreen = ({ children }: any) => {
    return (
        <View style={{ 
                height: '100%', 
                justifyContent: 'space-betwen',
            }}
        >
            <AppTitle />
            <ScrollView>
                <View style ={containerStyles.insideScreen} >
                    {children}
                </View>
            </ScrollView>
            <LegalMenu/>
        </View>
    )
};

export default LertScreen;