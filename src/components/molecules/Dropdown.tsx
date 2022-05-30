import { useState } from 'react';
import { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import Theme from '~theme/theme'
import BodyStyles from '~styles/body';

const COLORS = Theme.colors
const BG_COLOR = COLORS.components.offWhite
const BORDER_COLOR = COLORS.components.highContrast

type DropdownPropTypes = {
    placeholder: string;
    items: { label: string, value: any }[];
    style?: ViewStyle
}

/**
 * Customized Dropdown Menu
 * 
 * @param placeholder text to be displayed when no item is selected
 * @param items data array for the items
 * @example
 *  [
 *      { label: 'Item 1', value: 'item1' },
 *      { label: 'Item 2', value: 'item2' },
 *  ]
 * 
 * @param style (optional) Style container props
 * 
 */
const Dropdown = (props: DropdownPropTypes) => {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(null)
    const [items, setItems] = useState(props.items)
    
    return (
        <View style={ props.style }>
            <DropDownPicker
                style={dropdownStyles.generalStyle}
                
                containerStyle={ dropdownStyles.container }

                listItemLabelStyle={ dropdownStyles.listItem }

                textStyle={{ 
                    ...dropdownStyles.text, 
                    color: COLORS.text.bg,
                }}
                
                arrowIconStyle={ dropdownStyles.arrowIcon }
                arrowIconContainerStyle={ dropdownStyles.arrowContainer }
                
                listMode='FLATLIST'
                dropDownDirection='AUTO'
                bottomOffset={200}

                dropDownContainerStyle={ dropdownStyles.dropdownContainer }

                listItemContainerStyle={ dropdownStyles.itemContainer }

                placeholder={props.placeholder}

                placeholderStyle={{
                    color: COLORS.text.placeholder,
                }}

                value={value}
                setValue={setValue}
                
                items={items}
                setItems={setItems}
                
                open={isOpen}
                setOpen={setIsOpen}
            />
        </View>
    );
};

export const dropdownStyles = StyleSheet.create({
    generalStyle: {
        flexDirection: 'row', 
        padding: 10,
    },
    dropdownContainer: { 
        borderColor: BORDER_COLOR,
        borderRadius: 0,
    },
    container: {
        backgroundColor: BG_COLOR,
        borderColor: BORDER_COLOR,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowContainer: {
        marginStart: 20,
        alignSelf: "flex-end"
    },
    arrowIcon: {
        tintColor: COLORS.icons.secondary,
    },
    text: {
        ...BodyStyles.paragraphComponents ,
        fontFamily: 'body',
        tintColor: COLORS.text.bg,
    },
    itemContainer: {
        backgroundColor: BG_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    listItem: {
        color: COLORS.text.bg
    }
})

export default Dropdown;