import { Box, View } from "native-base"

type NotificationPropTypes = {
    title?:string;
    body?:string;
    type:string;
}

const Notification = (props:NotificationPropTypes) =>{
    return (
        
            <Box
                {...NotificationColors[props.type]}
                width={"20%"}
                height={100}
                borderTopWidth={6}
                borderRadius={10}
            />
    )
}

type NotificationStyle = {
    backgroundColor: string;
    borderTopColor: string;
    
}

const NotificationColors: {[name:string]:NotificationStyle} = {
    success: {
        backgroundColor: 'alerts.successPrimary',
        borderTopColor: 'alerts.successSecondary'
    },
    warning: {
        backgroundColor: 'alerts.warningPrimary',
        borderTopColor: 'alerts.warningSecondary'
    },
    error: {
        backgroundColor: 'alerts.errorPrimary',
        borderTopColor: 'alerts.errorSecondary'
    }
}


export default Notification