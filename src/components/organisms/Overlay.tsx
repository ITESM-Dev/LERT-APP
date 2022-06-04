import React, { useState, Dispatch, SetStateAction } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { Popover, Box, Button, Modal } from 'native-base';

import { propsFlattener } from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener';

import LertText from '~components/atoms/LertText';
import LertButton from '~components/atoms/LertButton';
import LertInput from '~components/molecules/LertInput';

import theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';

type OverlayPropTypes = {
    children: JSX.Element;
    error?: string | null;
    setError?: Dispatch<SetStateAction<string | null>>;
    maxWidth: string | number;
    maxHeight: string | number;
    buttonTitle: string;
    handleSubmit: () => void;
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
            alignSelf={"flex-end"}  
            alignItems={'flex-end'}
        >
            <Box 
                alignItems={'flex-end'}
            >
                <LertButton 
                    title={props.buttonTitle} 
                    type="primary" 
                    onPress={() => setIsOpen(true)} 
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
                    maxWidth={props.maxWidth} 
                    maxHeight={props.maxHeight} 
                    style={{backgroundColor:theme.colors.text.white}}
                >
                    <Modal.CloseButton onPress={() => setIsOpen(false)} />

                    <Modal.Body style={{ marginTop:"10%" }}>
                        {props.children}
                    </Modal.Body>
                    <Modal.Footer 
                        style={{
                            backgroundColor:theme.colors.text.white, 
                            paddingRight:"4%", 
                            paddingTop:"4%"
                        }}
                    >
                        <LertButton 
                            title="SUBMIT" 
                            type="primary" 
                            onPress={() => {
                                props.handleSubmit()
                                setIsOpen(false)
                            }}
                        />
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
    )
};

export default Overlay;