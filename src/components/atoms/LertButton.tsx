import { Button } from 'native-base'

type LertButtonPropTypes = {
    title: string;
    type: string;
}

/**
 * @param title Text for Button
 * @param type "primary" | "secondary" | "terciary" | "danger" | "ghost"
 */
const LertButton = (props: LertButtonPropTypes) => {
    
    const { title, type } = props
    
    return (
        <Button 
        // Style
        {...LertButtonStyles[type]} 
        // Hover Style
        _hover={LertButtonStyles[`${type}Hover`]} 
        borderRadius={0} 
        >
            {title}
        </Button>
    );
};

type StyleType = {
    variant?: string;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
}

// Button Styles
const LertButtonStyles: { [name: string]: StyleType} = {
    primary: {
        backgroundColor: "actions.actionsPrimary",
    },
    primaryHover: {

    },
    secondary: {
        backgroundColor: "alerts.errorSecondary",
    },
    secondaryHover: {

    },
    terciary: {
        borderColor: "actions.actionsPrimary",
        variant: 'outline',
    },
    terciaryHover : {
        backgroundColor: "actions.actionsPrimary",
        variant: 'outline',
    },
    danger: {
        backgroundColor: "alerts.errorSecondary",
    },
    dangerHover: {

    },
    ghost: {
        variant: 'ghost',
    },
    ghostHover: {

    }
}

export default LertButton;