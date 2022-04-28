import { Box } from 'native-base'

import LertText from '~components/atoms/LertText'

/**
 * Bottom Menu containing links to different legal information sites
 */
const LegalMenu = () => {

    const textStyle = {
        type: 'body02Layout',
        color: 'light.backdrop1'
    }

    return (
        <Box 
            bg='dark.backdrop1'    
            width={'100%'} 
            display='flex' 
            flexDirection='row'
            justifyContent='space-around'
            padding={3}
        >
            <LertText 
                {...textStyle} 
                text='Terms of Use' 
                onPress={() => alert("Navigate to Terms of User")}
            />
            <LertText 
                {...textStyle}
                text='IBM Internal Privacy Statement' 
                onPress={() => alert("IBM Internal Privacy Statement")}
            />
            <LertText 
                {...textStyle}
                text='Feedback' 
                onPress={() => alert("Feedback")}
            />
            <LertText 
                {...textStyle}
                text='Bussiness Conduct Guidelines' 
                onPress={() => alert("Bussiness Conduct Guidelines")}
            />
            <LertText 
                {...textStyle}
                text='Contact Support' 
                onPress={() => alert("Contact Support")}
            />
        </Box>
    )
};

export default LegalMenu;