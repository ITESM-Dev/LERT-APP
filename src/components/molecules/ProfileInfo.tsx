
import { View } from 'react-native';
import { Image, Box, Pressable } from 'native-base';

import Ionicons  from '@expo/vector-icons/Ionicons';

import LertText from '~components/atoms/LertText';
import { TouchableOpacity } from 'react-native';
import theme from '~theme/theme';

import * as textTypes from '~styles/constants/textTypes';

type ProfielInfoPropTypes = {
    imagePath?: string;
    name: string;
    role: string;
}

/**
 * @param imagePath (optional) Path or link to the image, it has a default path
 * @param name Input for the name of the person to be shown as text
 * @param role Input for the role to be shown as text
 */
const ProfileInfo = (props: ProfielInfoPropTypes) => {
    return (
        <View
            style={{
                alignItems: 'center'
            }}
        >
            {/** Background Image */}
            <Image 
                width={'100%'}
                height={'30%'}
                zIndex={0}
                justifySelf='flex-start'
                position='absolute'
                source={require('~../assets/bgLogin.jpg')}
                alt="Profile Background"
            />
            {/** User Profile Picture */}
            <Image 
                {...profileInfoStyle}
                source={{uri: props.imagePath ? props.imagePath : "https://wallpaperaccess.com/full/317501.jpg" }}
                alt="testing"
            />

            {/** User Information */}
            <Box 
                zIndex={2} 
                margin={2}
                justifyContent='center'
            >
                <LertText 
                    text={props.name} 
                    color={theme.colors.components.highContrast}
                    type={textTypes.heading2}
                />
                <LertText 
                    text={props.role}
                    color={theme.colors.components.placeholderActive} 
                    type={textTypes.heading}
                />
            </Box>

            {/** Logout Button */}
            <Pressable
                width='25%'
                margin={2}
                justifyContent='space-around'
                flexDirection='row'
                alignItems='center'
                onPress={() => {alert('Logout')}}
            >
                
                    <LertText 
                        text='Logout' 
                        type={textTypes.heading}
                        color={theme.colors.components.highContrast}
                    />
                    <Ionicons 
                        name='arrow-forward-outline' 
                        size={14}
                        color={theme.colors.components.highContrast}
                    />

            </Pressable>
        </View>
    );
};

const profileInfoStyle = {
    size: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.colors.components.offWhite,
    marginTop: 2,
    zIndex: 1,
}

export default ProfileInfo;