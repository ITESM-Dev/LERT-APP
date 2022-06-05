import React, { useState, Dispatch, SetStateAction } from 'react';
import { Text, useWindowDimensions, ViewStyle } from 'react-native';
import { Popover, Box, Button, Modal } from 'native-base';

import { propsFlattener } from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener';

import LertText from '~components/atoms/LertText';
import LertButton from '~components/atoms/LertButton';
import LertInput from '~components/molecules/LertInput';
import Ionicons from '@expo/vector-icons/Ionicons';

import theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';

type OverlayPropTypes = {
    children: JSX.Element;
    error?: string | null;
    setError?: Dispatch<SetStateAction<string | null>>;
    minWidth: string | number;
    maxHeight: string | number;
    handleSubmit: () => void;
    maxWidth?: string | number;
    buttonTitle: string | any;
    buttonType: "primary" | "secondary" | "terciary" | "danger" | "ghost" | "icon";

    style?: ViewStyle; 
}

/**
 * @param children The components that go inside the Modal window
 * @param maxWidth String or number to give the maxWidth of the Modal
 * @param maxHeight String or number to give the maxHeight of the Modal
 * @param buttonTitle String that will be the title of the button
 */
const Overlay = (props: OverlayPropTypes) => {

    const [isOpen, setIsOpen] = useState(false);
    const initialFocusRef = React.useRef(null);

    return (
        <Box 
            alignItems={'flex-end'}
        >
            <Box 
                alignItems={'flex-end'}
            >
                <LertButton 
                    title={props.buttonTitle} 
                    onPress={() => setIsOpen(true)}
                    type={props.buttonType}  
                />    
            
                {props.error && 
                    <LertText
                        tooltipDisabled={false}
                        numberOfLines={2}
                        text={props.error}
                        type={textTypes.label}
                        color={theme.colors.alerts.errorSecondary}
                    />
                }
            </Box>

            <Modal initialFocusRef={initialFocusRef} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <Modal.Content 
                    minWidth={props.minWidth} 
                    minHeight={props.maxHeight} 
                    style={{backgroundColor:theme.colors.text.white}}
                >
                    <Modal.Header>{props.buttonTitle}</Modal.Header>
                    <Modal.CloseButton onPress={() => setIsOpen(false)} />

                    <Modal.Body style={{ marginTop:"5%" }}>
                        {props.children}
                    </Modal.Body>
                    <Modal.Footer 
                        style={{
                            backgroundColor:theme.colors.text.white, 
                            paddingRight:"4%", 
                            paddingTop:"4%",
                            alignContent: 'flex-start'
                        }}
                    >
                        <LertButton 
                            title="Submit" 
                            type="primary" 
                            onPress={() => {
                                props.handleSubmit()
                                setIsOpen(false)
                            }}
                            style={{flex:1, flexWrap:'wrap'}}
                        />
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
    )
};

export default Overlay;