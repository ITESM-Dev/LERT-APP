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
    title?: string;
    error?: string | null;
    setError?: Dispatch<SetStateAction<string | null>>;
    minWidth: string | number;
    minHeight: string | number;
    handleSubmit: () => void;
    buttonTitle: string | any;
    buttonType?: "primary" | "secondary" | "terciary" | "danger" | "ghost" | "icon";

    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleOnClose?: () => void;
    style?: ViewStyle; 
}

/**
 * @param children The components that go inside the Modal window
 * @param buttonTitle String that will be the title of the button
 */
const Overlay = (props: OverlayPropTypes) => {

    const initialFocusRef = React.useRef(null);

    return (
        // @ts-ignore
        <Box 
            alignItems={'flex-end'}
            {...props.style}
        >
            <Box 
                alignItems={'flex-end'}
            >
                <LertButton 
                    title={props.buttonTitle} 
                    onPress={() => props.setIsOpen(true)}
                    type={props.buttonType ? props.buttonType : "primary"}  
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

            <Modal 
                initialFocusRef={initialFocusRef} 
                isOpen={props.isOpen} 
                onClose={() => {
                    props.handleOnClose !== undefined 
                        ? props.handleOnClose()
                        : undefined
                    props.setIsOpen(!props.isOpen)
                }}
            >
                <Modal.Content 
                    minWidth={props.minWidth} 
                    minHeight={props.minHeight} 
                    style={{backgroundColor:theme.colors.text.white}}
                >
                    <Modal.Header>{props.title !== undefined ? props.title : props.buttonTitle}</Modal.Header>
                    <Modal.CloseButton onPress={() => props.setIsOpen(false)} />

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
                                props.setIsOpen(false)
                            }}
                        />
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
    )
};

export default Overlay;