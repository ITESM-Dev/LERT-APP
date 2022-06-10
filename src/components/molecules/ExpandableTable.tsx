import { Box, FlatList, HStack, VStack } from 'native-base';

import TableItem from '~components/molecules/TableItem';
import ICARow from '~components/molecules/ICARow';

import Theme from '~theme/theme';

type ExpandableTablePropTypes = {
    headers: Array<string>;
    items: Array<any>;
    flexValues: Array<number>;
    handleUpdate: (item: any) => void;
}

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
                                originalObj={item}
                                items={data} 
                                icaInfo={icaInfo}
                                flexValues={props.flexValues} 
                                amount={props.headers.length} 
                                handleUpdate={props.handleUpdate}
                            />
                        )}
                    }
                    keyExtractor={( _, index ) => index.toString()}
                />
        </Box>
    )
};

export default ExpandableTable;