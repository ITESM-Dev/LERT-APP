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

const COLORS = Theme.colors
const BG_COLOR = COLORS.components.offWhite

type SearchInputPropTypes = {
    items: string[];
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const SearchInput = (props: SearchInputPropTypes) => {

    const [query, setQuery] = useState("")
    const [selected, setSelected] = useState(false)

    const itemClickHandler = (item: any) => {
        setSelected(true)
        setQuery(item)
        props.setValue(item)
    }

    useEffect(() => {
        setSelected(false)
        props.setValue("")
    }, [query])

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
                inputContainerStyle={{
                    borderWidth: 0
                }}
                renderTextInput={() => 
                    <LertInput
                        placeholder={props.placeholder} 
                        text={query} 
                        setText={setQuery} 
                    />  
                }
                listContainerStyle={{
                    flex: 1,
                    position: 'absolute',
                    zIndex: 1,
                    marginTop: 35,
                    borderColor: COLORS.icons.primary,
                    borderWidth: 0.1,
                    backgroundColor: BG_COLOR,
                    width: '100%',
                }}
                
                onChangeText={(text: string) => {
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