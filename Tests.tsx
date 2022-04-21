import { StyleSheet, View, Image, Alert } from 'react-native';
import { Box, useTheme } from 'native-base';

import LertButton from '~components/atoms/LertButton';
import LertText from '~components/atoms/LertText';
import LegalMenu from '~components/molecules/LegalMenu';
import ProfileInfo from '~components/molecules/ProfileInfo';
import AppTitle from '~components/molecules/AppTitle';
import Dropdown from '~components/molecules/Dropdown';
import Notification from '~components/molecules/Notification';
import LertInput from '~components/molecules/LertInput';
import containerStyles from '~styles/containers';

const dropdownItems = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
]

const dropdownAnimals = [
    { label: 'Dog', value: 'dog' },
    { label: 'Parrot', value: 'parrot' },
    { label: 'Jirafe', value: 'jirafe' },
]

const dropdownFood = [
    { label: 'Cheetos', value: 'cheetos' },
    { label: 'Tortilla', value: 'tortilla' },
    { label: 'Taco', value: 'taco' },
]

const Tests = () => {

    const theme = useTheme()
    const colorMode = theme.config.initialColorMode;

    return (
        <View style={containerStyles[`screen_${colorMode}`]}>
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

            <View style={{
                height:300,
                width: '100%',
                alignItems: 'flex-end',
            }}>
                {/* Notifications / Alerts */}
                <Notification type='error' title='ERROR' body='This is a test alert' />
                <Notification type='warning' title='WARNING' body='This is a test alert' />
                <Notification type='success' title='SUCCESS' body='This is a test alert' />
                {/* Lert Input */}
                <LertInput 
                    placeholder="Input" 
                    style={{
                        width: '50%'
                    }}
                />

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
                        flex: 1
                    }}
                />
            </View>

            {/* Dropdowns */}
            <View style={{
                    flex: 1, 
                    width: '100%',
                    flexDirection: 'row', 
                    justifyContent: 'space-around'
                }}
            >    
                <Dropdown placeholder='Items' items={dropdownItems}/>
                <Dropdown placeholder='Animals' items={dropdownAnimals}/>
                <Dropdown placeholder='Food' items={dropdownFood}/>
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