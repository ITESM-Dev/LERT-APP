import { Text, View } from "react-native";
import LertText from "~components/atoms/LertText";
import Theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import { Box, Center, Flex, ScrollView, SimpleGrid, Spacer } from "native-base";
import { AspectRatio, Image } from "native-base";
import { ViewStyle } from 'react'
import LegalMenu from "~components/molecules/LegalMenu";
import containerStyles from "~styles/containers";
import LertScreen from "~components/organisms/LertScreen";

type BgBoxPropTypes = {
    text: string;
    style?: ViewStyle;
}

const BgBox = (props: BgBoxPropTypes) => {
    return (
        <Box
            flex={1}    
            bgColor={Theme.colors.components.offWhite} 
            alignItems="center"
            justifyContent={'center'}
            height="20"
            minWidth="45%"
            padding="5"
            {...props.style}
        >
            <LertText 
                text={props.text} 
                type={textTypes.heading3} 
                numberOfLines={2}
                color={Theme.colors.text.primary}
            />
        </Box>
    );
};

const ViewForText = ({ children, style }: any) => 
    <View style={{ marginTop: '5%', ...style }}>
        {children}
    </View>

const Row = ({ children }: any) =>
    <Flex
        direction="row" 
        justifyContent='space-between'
        alignItems='center'
        mb="5"
    >
        {children}
    </Flex>

const Home = () => {
    return (
        <LertScreen>

            <ViewForText>
                <LertText
                    text="Hi user, welcome to LERT"
                    type={textTypes.display04}
                />
            </ViewForText>

            <ViewForText>
                <LertText
                    text="This is an aid in the finances of the manager, it
                            manages squad, employees and create the fall plan planning
                            expenses and financial recoveries."
                    type={textTypes.display01}
                    numberOfLines={20}
                    />
            </ViewForText>

            <ViewForText>
                <LertText
                    text="The goals of this application are:"
                    type={textTypes.heading4}
                    numberOfLines={5}
                    />
            </ViewForText>
            
            <View  style={{ flexDirection: 'column', marginTop: '3%' }}>
                <Row>
                    <BgBox text="Reduction of time invested by managers"/>

                    <Spacer/>
                    
                    <BgBox text="Having employee control"/>
                </Row>

                <Row>
                    <BgBox text="Ease of planning expense"/>

                    <Spacer/>
                    
                    <BgBox text="Create financial recoveries"/>
                </Row>

                <Row>
                    <BgBox style={{ width: '70%'}} text="Create fall plan"/>
                    
                    <View style={
                            { 
                                flex: 1, 
                                justifyContent: 'center',
                                alignItems: 'center'
                            }
                        }
                    >
                        <Image 
                            source={require('~../assets/bee.webp')}
                            alt="IBM Bee" size="lg" 
                        />
                    </View>
                </Row>
            </View>
        </LertScreen>
    )
};

export default Home;