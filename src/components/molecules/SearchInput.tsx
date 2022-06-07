import { Dispatch, SetStateAction, useState } from 'react';
import { View } from 'react-native';
// @ts-ignore
import Autocomplete from 'react-native-autocomplete-input'
import { TouchableOpacity } from 'react-native-gesture-handler';

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import { dropdownStyles } from '~components/molecules/Dropdown';

import Theme from '~theme/theme'
import * as TextTypes from '~styles/constants/textTypes';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';

const COLORS = Theme.colors
const BG_COLOR = COLORS.components.offWhite

type SearchInputPropTypes = {
    items: string[];
    placeholder: string;
    isDisabled?: boolean;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const SearchInput = (props: SearchInputPropTypes) => {

    const [selected, setSelected] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const itemClickHandler = (item: any) => {
        props.setValue(item)
        setSelected(true)
    }

    return (
        <View
            style={{ flex: 1 }} 
        >
            <Autocomplete 
                placeholder={props.placeholder}
                value={props.value}
                data={
                    props.items.filter( 
                        (item: string) => isFocused && !selected && item.includes(props.value) 
                    )
                }
                
                containerStyle={{
                    flex: 1,
                    borderWidth: 0
                }}
                inputContainerStyle={{
                    borderWidth: 0
                }}
                renderTextInput={() => 
                    <LertInput
                        isDisabled={props.isDisabled}
                        placeholder={props.placeholder} 
                        onFocus={() => { setIsFocused(true) }}  
                        text={props.value} 
                        setText={(text) => {
                            setSelected(false)
                            props.setValue(text)
                        }} 
                    />  
                }
                listContainerStyle={{
                    flex: 1,
                    position: 'absolute',
                    marginTop: 35,
                    borderColor: COLORS.icons.primary,
                    borderWidth: 0.1,
                    backgroundColor: BG_COLOR,
                    width: '100%',
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