import { Box, HStack, Tooltip, VStack } from "native-base";
import { ViewStyle } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import LertButton from "~components/atoms/LertButton";
import LertText from "~components/atoms/LertText";

import * as textTypes from '~styles/constants/textTypes';
import Theme from '~theme/theme';
import Overlay from "~components/organisms/Overlay";
import { useState } from "react";

type TableItemPropTypes = {
    items: Array<any>;
    flexValues: Array<number>;
    styles?: ViewStyle;
    amount: number;
    originalObj?: any;
    handleUpdate?: (item: any) => void;
    handleDelete?: (item: any) => void;
}

/**
 * @param items Array of items that will be displayed in the row
 * @example ['Item 1', 'Item 2', 'Item 3']
 * 
 * @param flexValues Array of flex values for sizing each column
 * @examle [1, 2, 3]
 * 
 * @return Table Row
 * @example 
 * ['Item 1'  'Item 2'       'Item 3'           ]
 * 
 */
const TableItem = ({ originalObj, items, flexValues, styles, amount, handleUpdate, handleDelete }: TableItemPropTypes) => {

    const [overlayOpen, setOverlayOpen] = useState(false);

    return (
        <Box
            marginX={"0%"}
            borderWidth={0.1}
            // @ts-ignore
            borderColor={Theme.colors.icons.primary}
            height={10}
            flexDirection='row'
            alignItems={'center'}
            {...styles}
            paddingLeft="1%"

        >
            { items.map( (item, index) => {
                if(index < amount){
                    return(
                        <LertText
                            key={ index }
                            text={ item }
                            type={ textTypes.paragraphComponents }
                            tooltipDisabled={false}
                            style={{
                                marginHorizontal: 5,
                                marginVertical: 2,
                                flex: flexValues[index],
                            }}
                        />  
                    )
                }
            } )}

            
            <HStack flex={1} justifyContent={'flex-end'}>
                { handleUpdate !== undefined && 
                    <LertButton 
                        type={"icon"}
                        title={
                            <Ionicons
                                style={{
                                    marginHorizontal: '10%',
                                    height: '15%',
                                }}
                                name="create-outline"
                                onPress={() => handleUpdate!(originalObj) }
                            />
                        }
                        onPress={() => { handleUpdate!(originalObj)} }
                    />
                }
                { handleDelete !== undefined && 

                    <Overlay 
                        title="Confirm Delete"
                        buttonTitle={
                            <Ionicons
                                style={{
                                    marginHorizontal: '10%',
                                    height: '15%',
                                }}
                                name="trash-outline"
                            />
                        }
                        buttonType={"icon"} 
                        minWidth={'30%'} 
                        minHeight={'20%'} 
                        isOpen={overlayOpen}
                        setIsOpen={setOverlayOpen}
                        handleSubmit={() => { handleDelete!(originalObj) }}        
                    > 
                        <VStack 
                            alignItems={"center"}
                            alignContent={'center'}
                        >
                            <LertText 
                                text="Do you want to delete this?" 
                                type={textTypes.heading3}   
                                color={Theme.colors.text.primary} 
                            />
                            
                        </VStack>
                    </Overlay>
                }
            </HStack>
            
        </Box>
    )
};

export default TableItem;