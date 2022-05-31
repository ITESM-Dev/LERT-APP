import { useEffect } from 'react';
import { Dispatch, SetStateAction, useState } from 'react';
import { View } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input'
import LertText from '~components/atoms/LertText';

import * as TextTypes from '~styles/constants/textTypes';
import { dropdownStyles } from './Dropdown';
import { LertInputStyle } from './LertInput';

import Theme from '~theme/theme'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setDelegates } from '~store/delegates';

const COLORS = Theme.colors
const BG_COLOR = COLORS.components.offWhite

type SearchInputPropTypes = {
    items: any[];
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const SearchInput = (props: SearchInputPropTypes) => {

    const [query, setQuery] = useState("")
    const [selected, setSelected] = useState(false)

    const itemClickHandler = (item: any) => {
        setQuery(item)
        setSelected(true)
        props.setValue(item)
    }

    return (
        <View style={{ flex: 1 }}>
            <Autocomplete 
                placeholder={props.placeholder}
                value={query}
                data={
                    props.items.filter( 
                        (item: string) => query !== "" && !selected && item.includes(query) 
                    )
                }
                
                containerStyle={{
                    flex: 1,
                }}
                inputStyle={{
                    ...LertInputStyle,
                }}
                listContainerStyle={{
                    flex: 1,
                    position: 'absolute',
                    zIndex: 1,
                    ...dropdownStyles.itemContainer,
                    marginTop: 45,
                    backgroundColor: BG_COLOR,
                    width: '100%',
                }}
                
                onChangeText={(text: string) => {
                    if (selected) setSelected(false)
                    props.setValue("")
                    setQuery(text)
                }}

                flatListProps={{
                    keyExtractor: (_: any, idx: string) => idx,
                    renderItem: ({ item }: { item: string }) => 
                        <TouchableOpacity
                            style={
                                {
                                    ...dropdownStyles.text,
                                    padding: 10,
                                }
                            }
                            onPress={() => itemClickHandler(item)}
                        >
                            <LertText text={item} type={TextTypes.paragraphComponents} />
                        </TouchableOpacity>
                }}
            />
        </View>
    )
}

export default SearchInput;