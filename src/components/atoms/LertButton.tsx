
import { Actionsheet, Button } from 'native-base'
import { ViewStyle } from 'react-native';

import BodyStyles from '~styles/body';
import theme from '~theme/theme';

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
                ...BodyStyles.paragraphComponents, 
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
        backgroundColor: theme.colors.actions.actionPrimary,
    },
    primaryHover: {
        backgroundColor: theme.colors.actions.actionShade2
    },
    primaryPressed: {
        borderColor: theme.colors.text.white,
        borderWidth: 2,
    },
    secondary: {
        backgroundColor: theme.colors.icons.secondary,
    },
    secondaryHover: {
        backgroundColor: theme.colors.icons.primary
    },
    secondaryPressed: {
        borderColor: theme.colors.text.white,
        borderWidth: 2,
    },
    terciary: {
        borderColor: theme.colors.actions.actionPrimary,
        backgroundColor: theme.colors.text.white,
        variant: 'outline',
        _text: {
            _light: { color: theme.colors.actions.actionPrimary }
        }
    },
    terciaryHover: {
        variant: 'solid',
        backgroundColor: theme.colors.actions.actionPrimary,
        _text: {
            _light: { color: theme.colors.text.white }
        }
        
    },
    terciaryPressed: {
        borderColor: theme.colors.text.white,
        borderWidth: 2
    },
    danger: {
        backgroundColor: "alerts.errorSecondary",
    },
    dangerHover: {
        backgroundColor: "alerts.errorPrimary"
    },
    dangerPressed: {
        borderColor: theme.colors.text.white,
        borderWidth: 2
    },
    ghost: {
        variant: 'ghost',
        backgroundColor: theme.colors.text.white,
        _text: {
            _light:  { color: 'actions.actionPrimary'}
        }
    },
    ghostHover: {
        backgroundColor: theme.colors.text.white
    },
    ghostPressed: {
        borderColor: 'actions.actionPrimary',
        borderWidth: 2
    }
}

export default LertButton;