import { Box, Tooltip } from "native-base";
import LertText from "~components/atoms/LertText";

import * as textTypes from '~styles/constants/textTypes'

type TableItemPropTypes = {
    items: Array<string>;
    flexValues: Array<number>;
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
const TableItem = ({ items, flexValues }: TableItemPropTypes) => {

    return (
        <Box
            flexDirection='row'
            alignItems={'center'}
        >
            { items.map( (item, index) => {
                return(
                    <LertText
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
            } )}
        </Box>
    )
};

export default TableItem;