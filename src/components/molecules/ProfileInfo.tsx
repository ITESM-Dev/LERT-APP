import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Box, Pressable } from 'native-base';

import Ionicons  from '@expo/vector-icons/Ionicons';

import { AppDispatch } from '~store/store';
import { clearTokenInStorageThunk, logoutUserThunk, userSelector } from '~store/user';
import { LogoutForm } from '~store/api';

import LertText from '~components/atoms/LertText';

import theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';
import LertButton from '~components/atoms/LertButton';
import { TouchableOpacity } from 'react-native';

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

    const user = useSelector(userSelector);
    const dispatch: AppDispatch = useDispatch()

    const handleLogout = () => {
        const logoutForm: LogoutForm = {
            token: user.token,
            mail: user.mail
        }
        dispatch(logoutUserThunk(logoutForm)).then(response => {
            dispatch(clearTokenInStorageThunk())
        })
    }

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
                source={
                    {
                        uri: props.imagePath ? 
                            props.imagePath : 
                            "https://wallpaperaccess.com/full/317501.jpg" 
                    }
                }
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
            <TouchableOpacity
                style={{
                    width: '25%',
                    margin: 2,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                onPress={() => {
                    handleLogout()
                }}
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
            </TouchableOpacity>
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