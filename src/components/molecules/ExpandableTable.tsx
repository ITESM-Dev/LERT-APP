import { Box, FlatList, HStack, VStack } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';

import LertText from "~components/atoms/LertText";
import TableItem from '~components/molecules/TableItem';
import ICARow from '~components/molecules/ICARow';
import Overlay from '~components/organisms/Overlay';

import Theme from '~theme/theme';
import * as textTypes from '~styles/constants/textTypes';

type ExpandableTablePropTypes = {
    headers: Array<string>;
    items: Array<any>;
    flexValues: Array<number>;
}

const overlays = [
    (
        <Overlay 
            buttonTitle={
                <Ionicons
                    style={{
                        marginHorizontal: '10%',
                        height: '15%',
                    }}

                    name="create-outline"
                    onPress={() => {
                        console.log("delete ica");
                    } } 
                />
            }

            buttonType={"icon"} 
            minWidth={''} 
            minHeight={''} 
            handleSubmit={() => {}}        
        > 
            <>
                <HStack space={2} justifyContent="space-evenly">
                    <VStack alignItems={"flex-start"}>
                        <LertText 
                            text="Do you want to edit this ICA" 
                            type={textTypes.displayParagraph}   
                            color={Theme.colors.text.primary} 
                            style={{paddingTop:"10%"}}
                        />
                        
                    </VStack>
                
                </HStack>
            </>

        </Overlay>
    ),
    (
        <Overlay 
            buttonTitle={
                <Ionicons
                    style={{
                        margin: '10%',
                        height: 'fit-content',
                        width: 'fit-content',
                    }}

                    name="trash-outline"
                    onPress={() => {
                        console.log("delete ica");
                    } } 
                />
            }
            buttonType={"icon"} 
            minWidth={''} 
            minHeight={''} 
            handleSubmit={() => {}}        
        > 
            <>
                <HStack space={2} justifyContent="center">
                    <VStack alignItems={"flex-start"} margin={"5%" } alignContent={'center'}>

                    <LertText 
                            text="Delete confirmation" 
                            type={textTypes.heading5}   
                            color={Theme.colors.icons.secondary} 
                            style={{paddingTop:"10%"}}
                        />
                        <LertText 
                            text="Do you want to delete this ICA?" 
                            type={textTypes.heading3}   
                            color={Theme.colors.text.primary} 
                            style={{paddingTop:"10%", width:"80%"}}
                            numberOfLines={2}
                        />
                        
                    </VStack>
                
                </HStack>
            </>
        </Overlay>
    )
]

const extractValues = (myData: any) => {
    let values: any = [];
    const objectArray = Object.entries(myData);
    objectArray.forEach(([key, value]) => {
        values.push(value);
    })
    return values;
}

const ExpandableTable = (props: ExpandableTablePropTypes) => {
    return (
        <Box zIndex={-1}>
            <TableItem 
                items={props.headers} 
                flexValues={props.flexValues} 
                styles={{ backgroundColor: Theme.colors.components.selectedState }} 
                amount={props.headers.length}
            />
           
                <FlatList 
                    data={props.items}
                    renderItem={({ item }) => {
                        const items: string[] = extractValues(item)
                        const data = items.slice(0, 8)
                        const icaInfo = items.slice(8, -1)
                        return (
                            <ICARow 
                                items={data} 
                                icaInfo={icaInfo}
                                flexValues={props.flexValues} 
                                amount={props.headers.length} 
                                overlay={overlays} 
                            />
                        )}
                    }
                    keyExtractor={( _, index ) => index.toString()}
                />
        </Box>
    )
};

export default ExpandableTable;