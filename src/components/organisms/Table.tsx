import { DrawerItemList } from '@react-navigation/drawer';
import { Box, FlatList } from 'native-base';
import { color } from 'react-native-reanimated';
import LertText from "~components/atoms/LertText";
import TableItem from '~components/molecules/TableItem';
import Theme from '~theme/theme';

import * as textTypes from '~styles/constants/textTypes';

type TablePropTypes = {
    headers: Array<string>;
    items: Array<any>;
    flexValues: Array<number>;
}

const extractValues = (myData: any) => {
    let values: any = [];
    const objectArray = Object.entries(myData);
    objectArray.forEach(([key, value]) => {
        values.push(value);
    })
    return values;
}

const Table = (props: TablePropTypes) => {
    
    return (
        <Box>
            <TableItem items={props.headers} flexValues={props.flexValues} styles={{bgColor: Theme.colors.components.selectedState}}/>
            <FlatList 
                data={props.items}
                renderItem={({ item }) => (
                    <TableItem items={extractValues(item)} flexValues={props.flexValues} styles={{bgColor: Theme.colors.components.offWhite}}/>
                )}
                keyExtractor={( item, index ) => index.toString()}
            />
        </Box>
    )
};

export default Table;