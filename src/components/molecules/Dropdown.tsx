import { useState } from 'react';
import { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import Theme from '~theme/theme'
import BodyStyles from '~styles/body';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

const COLORS = Theme.colors
const BG_COLOR = COLORS.components.offWhite
const BORDER_COLOR = COLORS.text.primary

type DropdownPropTypes = {
    placeholder: string;
    items: { label: string, value: any }[];
    style?: ViewStyle,
    value: string;
    setValue: Dispatch<SetStateAction<string>>
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
    const [items, setItems] = useState(props.items)
    
    const { value, setValue } = props
    
    return (
        <View style={ props.style }>
            <DropDownPicker
                style={dropdownStyles.generalStyle}
                
                containerStyle={ dropdownStyles.container }

                listItemLabelStyle={ dropdownStyles.listItem }

                // @ts-ignore
                textStyle={{ 
                    ...dropdownStyles.text, 
                    color: COLORS.text.bg,
                }}
                
                // @ts-ignore
                arrowIconStyle={ dropdownStyles.arrowIcon }
                arrowIconContainerStyle={ dropdownStyles.arrowContainer }
                showTickIcon={false}
                
                listMode='FLATLIST'
                dropDownDirection={"BOTTOM"}

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
        padding: 7,
    },
    dropdownContainer: { 
        borderColor: BORDER_COLOR,
        position: 'absolute',
        borderRadius: 0,
    },
    container: {
        borderColor: BORDER_COLOR,
        borderBottomWidth: 0.1,
        flex: 1,
        justifyContent: 'space-between',
    },
    arrowContainer: {
        marginStart: 20,
        alignSelf: "flex-end"
    },
    arrowIcon: {
        tintColor: BORDER_COLOR,
    },
    text: {
        ...BodyStyles.paragraphComponents,
        fontFamily: 'body',
        tintColor: COLORS.text.bg,
    },
    itemContainer: {
        backgroundColor: BG_COLOR,
        padding: 10,
    },
    listItem: {
        color: COLORS.text.bg
    }
})

export default Dropdown;