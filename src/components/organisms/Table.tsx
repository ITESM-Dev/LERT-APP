import { Box, FlatList } from 'native-base';

import TableItem from '~components/molecules/TableItem';

import Theme from '~theme/theme';


type TablePropTypes = {
    headers: Array<string>;
    items: Array<any>;
    flexValues: Array<number>;
    handleUpdate?: (item: any) => void;
    handleDelete?: (item: any) => void;
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
        <Box zIndex={-1}>
            <TableItem 
                items={props.headers} 
                flexValues={props.flexValues} 
                styles={{ backgroundColor: Theme.colors.components.selectedState}} 
                amount={props.headers.length}
            />
            <FlatList 
                data={props.items}
                renderItem={({ item }) => (
                    <TableItem 
                        originalObj={item}

                        items={extractValues(item)} 
                        
                        flexValues={props.flexValues} 
                        styles={{ backgroundColor: Theme.colors.components.offWhite }} 
                        amount={props.headers.length}
                        handleUpdate={props.handleUpdate}
                        handleDelete={props.handleDelete}
                    />
                )}
                keyExtractor={( item, index ) => index.toString()}
            />
        </Box>
    )
};

export default Table;