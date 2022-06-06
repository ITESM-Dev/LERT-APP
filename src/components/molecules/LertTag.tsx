import { Box, Center, Image, theme } from 'native-base'
import { View, ViewStyle } from 'react-native';
import LertText from '~components/atoms/LertText';
import * as textTypes from '~styles/constants/textTypes';
import Theme from '~theme/theme';


/**
 * Bottom Menu containing links to different legal information sites
 */
 type TagPropTypes = {
    title: string;
    style?: ViewStyle; 
    backgroundColor: string;
}

const LertTag = (props: TagPropTypes) => {
    const { title, style} = props
    return (
        <Box 
            bgColor={props.backgroundColor}     
            width= 'fit-content'
            height={'fit-content'}
            display='flex' 
            flexDirection='column'
            justifyContent='space-around'
            paddingX={2}
            paddingY={1}
            rounded="100"
        >
            <LertText 
                type={textTypes.label}
                color= {Theme.colors.text.white}
                text={props.title}
            /> 
        </Box>
    )
};

export default LertTag;