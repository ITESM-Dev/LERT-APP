import { ScrollView, View } from "native-base"

import LegalMenu from "~components/molecules/LegalMenu"

import containerStyles from "~styles/containers"

const LertScreen = ({ children }: any) => {
    return (
        <ScrollView>
            <View style ={containerStyles.insideScreen} >
                {children}
            </View>
            <LegalMenu/>
        </ScrollView>
    )
};

export default LertScreen;