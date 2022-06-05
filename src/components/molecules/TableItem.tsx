import { Box, Tooltip } from "native-base";
import { ViewStyle } from "react-native";
import LertText from "~components/atoms/LertText";

import * as textTypes from '~styles/constants/textTypes';
import Theme from '~theme/theme';

type TableItemPropTypes = {
    items: Array<string>;
    flexValues: Array<number>;
    styles?: ViewStyle;
    amount: number;
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
const TableItem = ({ items, flexValues, styles, amount }: TableItemPropTypes) => {

    return (
        <Box
            marginX={"0%"}
            borderWidth={0.1}
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
            
        </Box>
    )
};

export default TableItem;