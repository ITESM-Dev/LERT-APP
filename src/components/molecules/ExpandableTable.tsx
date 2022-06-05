import { DrawerItemList } from '@react-navigation/drawer';
import { Box, FlatList, HStack, VStack } from 'native-base';
import { color } from 'react-native-reanimated';
import LertText from "~components/atoms/LertText";
import TableItem from '~components/molecules/TableItem';
import Theme from '~theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as textTypes from '~styles/constants/textTypes';
import ICARow from '~components/molecules/ICARow';
import Overlay from '~components/organisms/Overlay';

type ExpandableTablePropTypes = {
    headers: Array<string>;
    items: Array<any>;
    flexValues: Array<number>;
    amount: number;
    subItems: Array<any>;
}

const overlays =
[
    (
    <Overlay 
                buttonTitle={
                    <Ionicons
                        style={{
                            marginHorizontal: '10%',
                            height: '15%',
                            //width: 'fit-content',
                        }}

                        name="create-outline"
                        onPress={() => {
                            console.log("delete ica");
                        }} 
                    />
                } 

                buttonType={"icon"}
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

            </Overlay>),
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
                        }} 
                    />
                } 

                buttonType={"icon"}> 
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
            </Overlay>)


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
            <TableItem items={props.headers} flexValues={props.flexValues} styles={{bgColor: Theme.colors.components.selectedState}} amount={props.amount}/>
           
                <FlatList 
                    data={props.items}
                    renderItem={({ item }) => (
                    <ICARow items={extractValues(item)} icaInfo={extractValues(props.subItems)} flexValues={props.flexValues} amount={props.amount} overlay={overlays} />
                )}
                keyExtractor={( item, index ) => index.toString()}
            />
        </Box>
    )
};

export default ExpandableTable;