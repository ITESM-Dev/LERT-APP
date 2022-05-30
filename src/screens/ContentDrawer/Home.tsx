import { Text, View } from "react-native";
import LertText from "~components/atoms/LertText";
import Theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import { Box, Center, ScrollView, SimpleGrid } from "native-base";
import { AspectRatio, Image } from "native-base";
import {ViewStyle } from 'react'
import LegalMenu from "~components/molecules/LegalMenu";

type BgBoxPropTypes = {
    text: string;
    style?: ViewStyle;
    textType?: string;
   // width: string;
    height?: number;
}

const BgBox = (props: BgBoxPropTypes) => {
    return (
        <Box
            {...props.style}
            bgColor={Theme.colors.components.offWhite} 
            alignItems="left"
            height="250"
            padding="5"
            marginRight={5}
        >
            <LertText 
                text={props.text} 
                type={textTypes.heading4} 
                numberOfLines={2}
                color={Theme.colors.text.primary}
            />
        </Box>
    );
};

const Home = () => {
    // BUG
    return (
        <ScrollView h="500">    
            <View style={{
                    width: '100%', flexDirection: 'column', marginHorizontal: 70
                }}>

                <Box style={{marginTop: 80, marginBottom: 20}}>
                    <LertText
                    text="Hi user, welcome to LERT"
                    type={textTypes.display04}
                    />
                </Box>

                <Box style={{width:"90%", marginBottom:100 }}>
                    <LertText
                        text="This is an aid in the finances of the manager, it
                                manages squad, employees and create the fall plan planning
                                expenses and financial recoveries."
                        type={textTypes.display03}
                        numberOfLines={20}
                        />
                </Box>

                <Box style={{width:"90%", marginBottom:50 }}>
                    <LertText
                        text="The goals of this application are:"
                        type={textTypes.heading4}
                        numberOfLines={5}
                        />
                </Box>
                
                <View  style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                        <BgBox 
                            text="Reduction of time invested by managers" 
                            style={{width:"55%"}}/>
                        
                        <BgBox 
                            text="Reduction of time invested by managers" 
                            style={{width:"30%"}}/>
                    </View>
                    <View style={{ width: 1150, flexDirection: 'row', marginBottom: 30}}>
                        <BgBox 
                            text="Reduction of time invested by managers" 
                            style={{width:"30%"}}/>
                        
                        <BgBox 
                            text="Reduction of time invested by managers" 
                            style={{width:"30%"}}/>
                    </View>

                    <View style={{ width: 1150, flexDirection: 'row', marginBottom: 30}}>
                        <BgBox 
                            text="Reduction of time invested by managers" 
                            style={{width:"30%"}}/>
                        
                        <Box style={{backgroundColor:"Blue", paddingLeft: 20}}>
                            <Center>
                                <Image 
                                    source={require('~../assets/bee.webp')}
                                    alt="IBM Bee" size="2xl" />
                            </Center>
                        
                        </Box>
                    </View>
                

                
                </View>
                
            </View>

            <LegalMenu/>
        </ScrollView>
        
        
    )
};

export default Home;