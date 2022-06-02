import { Box, Center, Image } from 'native-base'
import LertText from '~components/atoms/LertText'
import Theme from '~theme/theme';
import { handleOpenUrl } from '~utils/handlers';

/**
 * Bottom Menu containing links to different legal information sites
 */
const LegalMenu = () => {

    return (
        <Box style={{ flexDirection:"column" }}>
            <Box
                bgColor={Theme.colors.icons.secondary}     
                height={"15%"}
            />
        
            <Box 
                bgColor={Theme.colors.components.highContrast}
                flex={1}
                display='flex' 
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                paddingX={'3%'}
                paddingBottom={'12%'}
                paddingY={'0.5%'}
            >
                <LertText 
                    type= 'body02Layout'
                    color= {Theme.colors.text.white}
                    text='Terms of Use' 
                    onPress={() => handleOpenUrl('https://www.ibm.com/legal')}
                />
                <LertText 
                    type= 'body02Layout'
                    color= {Theme.colors.text.white}
                    text='IBM Internal Privacy Statement' 
                    onPress={() => handleOpenUrl("https://www.ibm.com/us-en/privacy")}
                />
                <LertText 
                    type= 'body02Layout'
                    color= {Theme.colors.text.white}
                    text='Feedback' 
                    onPress={() => handleOpenUrl("https://www.ibm.com/community/feedback/")}
                />
                <LertText 
                    type= 'body02Layout'
                    color= {Theme.colors.text.white}
                    text='Business Conduct Guidelines' 
                    onPress={() => handleOpenUrl("https://www.ibm.com/investor/governance/business-conduct-guidelines")}
                />
                <LertText 
                    type= 'body02Layout'
                    color= {Theme.colors.text.white}
                    text='Contact Support' 
                    onPress={() => handleOpenUrl("https://www.ibm.com/mysupport/s/?language=en_US")}
                />
                <Image 
                    resizeMode={"center"} 
                    source={require('~../assets/ibm-white-logo.png')}
                    alt="IBM Logo" 
                    size="xs" 
                />
                     
            </Box>
        </Box>

    )
};

export default LegalMenu;