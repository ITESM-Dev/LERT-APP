import { Box, Center, Image } from 'native-base'
import { View } from 'react-native';
import Theme from '~theme/theme';
import LertText from '~components/atoms/LertText'

/**
 * Bottom Menu containing links to different legal information sites
 */
const LegalMenu = () => {


    return (
        <Box style={{flexDirection:"column"}}>
            <Box
                bgColor={Theme.colors.icons.secondary}     
                width={'100%'} 
                height={'15%'}
                display='flex' 
                flexDirection='column'
                justifyContent='space-around'
                padding={3}>
             </Box>
        
        <Box 
            bgColor={Theme.colors.components.highContrast}     
            width={'100%'} 
            display='flex' 
            flexDirection='column'
            justifyContent='space-around'
            padding={3}
            paddingLeft={70}
            paddingTop={'3%'}
            paddingBottom={'3%'}
        >
            <LertText 
                type= 'body02Layout'
                color= {Theme.colors.text.white}
                text='Terms of Use' 
                onPress={() => alert("Navigate to Terms of User")}
            />
            <LertText 
                type= 'body02Layout'
                color= {Theme.colors.text.white}
                text='IBM Internal Privacy Statement' 
                onPress={() => alert("IBM Internal Privacy Statement")}
            />
            <LertText 
                type= 'body02Layout'
                color= {Theme.colors.text.white}
                text='Feedback' 
                onPress={() => alert("Feedback")}
            />
            <LertText 
                type= 'body02Layout'
                color= {Theme.colors.text.white}
                text='Bussiness Conduct Guidelines' 
                onPress={() => alert("Bussiness Conduct Guidelines")}
            />
            <LertText 
                type= 'body02Layout'
                color= {Theme.colors.text.white}
                text='Contact Support' 
                onPress={() => alert("Contact Support")}
            />
            <Box style={{width:'100%'}}>
                <Image 
                    resizeMode={"contain"} 
                    //borderRadius={100} 
                     source={require('~../assets/ibm-white-logo.png')}
                     alt="IBM Bee" size="xs" />
                
                            
             </Box>

        </Box>
        </Box>

    )
};

export default LegalMenu;