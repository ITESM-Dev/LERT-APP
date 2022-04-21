import { StyleSheet, View, Image } from 'react-native';
import { Text, Box } from 'native-base';

import LertButton from '~components/atoms/LertButton';
import LertText from '~components/atoms/LertText';
import LegalMenu from '~components/molecules/LegalMenu';
import ProfileInfo from '~components/molecules/ProfileInfo';
import AppTitle from '~components/molecules/AppTitle';

const Tests = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 2, 
                flexDirection: "row", 
                justifyContent: "center", 
                alignItems: "center",
                marginTop: 20,
            }}>
                {/* Profile Info */}
                <ProfileInfo name="Ulises Venegas Gómez" role="CEO" />
                <AppTitle />
            </View>


            <Box {...box} style={{marginVertical: 30}}>
                <LertText text="Welcome to ItesmDev's LERT Prototypes" type='display02'/>
            </Box>

            {/* LertText Display*/}
            <View style={{ 
                marginVertical: 30,
                flexDirection: 'row', 
                width: '100%', 
                justifyContent: 'space-around'
            }}>
                <LertText text='Display 1' type='display01'/>
                <LertText text='Display 2' type='display02'/>
                <LertText text='Display 3' type='display03'/>
                <LertText text='Display 4' type='display04'/>
            </View>

            {/* LertText Body*/}
            <View style={{ 
                marginVertical: 30,
                flexDirection: 'row', 
                width: '100%', 
                justifyContent: 'space-around'
            }}>
                <LertText text='Paragraph Components' type='paragraphComponents'/>
                <LertText text='Short Paragraph' type='shortParagraph'/>
                <LertText text='Large Paragraph' type='largeParagraph'/>
                <LertText text='Expresive Long Paragraphs' type='expresiveLongParagraphs'/>
            </View>

            {/* LertText Fixed Headings*/}
            <View style={{ 
                marginVertical: 30,
                flexDirection: 'row', 
                width: '100%', 
                justifyContent: 'space-around'
            }}>
                <LertText text='Heading' type='heading'/>
                <LertText text='Heading Compact' type='headingCompact'/>
                <LertText text='Body 02 Layout' type='body02Layout'/>
                <LertText text='Long Layout' type='longLayout'/>
                <LertText text='Long Layout 2' type='longLayout2'/>
            </View>

            {/* LertText Utility*/}
            <View style={{ 
                marginVertical: 30,
                flexDirection: 'row', 
                width: '100%', 
                justifyContent: 'space-around'
            }}>
                <LertText text='Label' type='label'/>
                <LertText text='Helper Text' type='helperText'/>
                <ProfileInfo name="Ulises Venegas Gómez" role="CEO" />
            </View>

            {/* LertButton */}
            <View style={{
                marginVertical: 30,
                height: 50, 
                width: '100%', 
                flexDirection: 'row'
            }}>
                <LertButton
                    title='Primary'
                    type={'primary'}
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}	
                />
                <LertButton
                    title='Secondary'
                    type={'secondary'}
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}	
                />
                <LertButton
                    title='Terciary'	
                    type={'terciary'}
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}	
                />
                <LertButton
                    title='Danger'	
                    type={'danger'}	
                    onPress={() => {}}
                    style={{
                        width: '20%'
                    }}
                />
                <LertButton
                    title='Ghost'	
                    type={'ghost'}
                    onPress={() => {}}	
                    style={{
                        width: '20%'
                    }}
                />
            </View>

            {/* LegalMenu */}
            <LegalMenu />
            
        </View>
    )
}

const box = {
  flex: 1,
  bg: "components.systemGray",
  width: '90%',
  alignItems: "center",
  justifyContent: "start",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 320,
        height: 160,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#00367d"
    },
});

export default Tests;