import { useState } from 'react';
import { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import Theme from '~theme/theme'
import BodyStyles from '~styles/body';

const COLORS = Theme.colors
const BG_COLOR = COLORS.components.offWhite
const BODERD_COLOR = COLORS.components.highContrast

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

    {console.log("Dropdowns")}
    
    return (
        <View style={ props.style }>
            <DropDownPicker
                style={styles.generalStyle}
                
                containerStyle={ styles.container }

                textStyle={{ 
                    ...styles.text, 
                    color: value ? 
                        COLORS.text.primary : 
                        COLORS.text.placeholder,
                }}
                
                arrowIconStyle={ styles.arrowIcon }
                arrowIconContainerStyle={ styles.arrowContainer }
                
                listMode='FLATLIST'
                dropDownDirection='AUTO'
                bottomOffset={200}

                dropDownContainerStyle={ styles.dropdownContainer }

                listItemContainerStyle={ styles.itemContainer }

                placeholder={props.placeholder}

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

const styles = StyleSheet.create({
    generalStyle: {
        flexDirection: 'row', 
        padding: 10,
    },
    dropdownContainer: { 
        borderColor: BODERD_COLOR,
        borderRadius: 0,
    },
    container: {
        backgroundColor: BG_COLOR,
        borderColor: BODERD_COLOR,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    arrowContainer: {
        marginStart: 20,
    },
    arrowIcon: {
        tintColor: COLORS.icons.secondary,
    },
    text: {
        ...BodyStyles.paragraphComponents ,
        fontFamily: 'body',
        tintColor: COLORS.icons.secondary,
    },
    itemContainer: {
        backgroundColor: BG_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    }
})

export default Dropdown;