import { Alert, Box, CloseIcon, HStack, IconButton, VStack } from "native-base"
import LertText from "~components/atoms/LertText";

import * as textTypes from '~styles/constants/textTypes';

type NotificationPropTypes = {
    title:string;
    body:string;
    type:string;
}

/**
 * @param type "error" | "warning" | "success"
 * @param title Text of notification
 * @param body  Description of notification
 */
const Notification = (props:NotificationPropTypes) =>{
    return (
        <Alert 
            width={'20%'}
            {...NotificationColors[props.type]}
            variant={'top-accent'} 
            borderRadius={8}
        >
            <VStack space={2} width="100%">
                <HStack space={2} alignItems="center" justifyContent="space-between">
                    <HStack space={2} alignItems="center">
                        <Alert.Icon/>
                        <LertText text={props.title} type={textTypes.body02} color='light.backdrop1'/>
                    </HStack>
                    <IconButton 
                        icon={<CloseIcon size="3" color="icons.primaryLDark" />} 
                    />
                </HStack>
                <Box 
                    paddingLeft={'8%'}
                >
                    <LertText text={props.body} type={textTypes.shortParagraph} color= 'light.backdrop1'/>
                </Box>
            </VStack>
        </Alert>
    )
}

type NotificationStyle = {
    backgroundColor: string;
    borderTopColor: string;
    status:string;
}

const NotificationColors: {[name:string]:NotificationStyle} = {
    success: {
        backgroundColor: 'alerts.successPrimary',
        borderTopColor: 'alerts.successSecondary',
        status: 'success'
    },
    warning: {
        backgroundColor: 'alerts.warningPrimary',
        borderTopColor: 'alerts.warningSecondary',
        status: 'warning'
    },
    error: {
        backgroundColor: 'alerts.errorPrimary',
        borderTopColor: 'alerts.errorSecondary',
        status: 'error'
    }
}

export default Notification