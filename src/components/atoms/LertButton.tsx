
import { Button } from 'native-base'
import { ViewStyle } from 'react-native';

import BodyStyles from '~styles/body';

type LertButtonPropTypes = {
    title: string;
    type: string;
    disabled?: boolean;
    onPress: () => void;
    style?: ViewStyle; 
}

/**
 * @param title Text for Button
 * @param type "primary" | "secondary" | "terciary" | "danger" | "ghost"
 * @param style (optional) component style
 */
const LertButton = (props: LertButtonPropTypes) => {
    
    const { title, type, disabled, onPress, style } = props
    
    return (
        <Button 
            // Rectangle-like shape
            borderRadius={0}
            // Button Type Style
            {...LertButtonStyles[type]} 
            // Component Style
            style={style}
            // Hover Style
            _hover={
                LertButtonStyles[`${type}Hover`]
            } 
            // OnPress Style
            _pressed={{
                ...LertButtonStyles[`${type}Pressed`],
            }}
            // Text Style
            _text={{
                ...BodyStyles, 
                ...LertButtonStyles[type]._text
            }}
            disabled={disabled}
            onPress={onPress}
        >
            {title}
        </Button>
    );
};

// Type for Button Types
type StyleType = {
    variant?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?:  number;
    color?: string;
    _text?: any;
}

// Button Styles
const LertButtonStyles: { [name: string]: StyleType} = {
    primary: {
        backgroundColor: "actions.actionPrimary",
    },
    primaryHover: {
        backgroundColor: "actions.actionShade2"
    },
    primaryPressed: {
        borderColor: 'light.backdrop2',
        borderWidth: 2,
    },
    secondary: {
        backgroundColor: "dark.backdrop1",
    },
    secondaryHover: {
        backgroundColor: "dark.backdrop2"
    },
    secondaryPressed: {
        borderColor: 'light.backdrop2',
        borderWidth: 2,
    },
    terciary: {
        borderColor: "actions.actionPrimary",
        backgroundColor: "light.backdrop2",
        variant: 'outline',
        _text: {
            _light: { color: 'actions.actionPrimary' }
        }
    },
    terciaryHover: {
        variant: 'solid',
        backgroundColor: "actions.actionPrimary",
        _text: {
            _light: { color: 'light.backdrop2' }
        }
        
    },
    terciaryPressed: {
        borderColor: 'light.backdrop1',
        borderWidth: 2
    },
    danger: {
        backgroundColor: "alerts.errorSecondary",
    },
    dangerHover: {
        backgroundColor: "alerts.errorPrimary"
    },
    dangerPressed: {
        borderColor: 'light.backdrop1',
        borderWidth: 2
    },
    ghost: {
        variant: 'ghost',
        backgroundColor: 'light.background2',
        _text: {
            _light:  { color: 'actions.actionPrimary'}
        }
    },
    ghostHover: {
        backgroundColor: 'light.backdrop1'
    },
    ghostPressed: {
        borderColor: 'actions.actionPrimary',
        borderWidth: 2
    }
}

export default LertButton;