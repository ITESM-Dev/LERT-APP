import { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";
import { HStack, ScrollView, VStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "~store/store";
import { allDelegates } from "~store/delegates/selectors";

import LertText from '~components/atoms/LertText';
import LertButton from "~components/atoms/LertButton";
import SearchInput from "~components/molecules/SearchInput";
import Table from "~components/organisms/Table";
import LegalMenu from "~components/molecules/LegalMenu";

import * as textTypes from '~styles/constants/textTypes';

import Theme from '~theme/theme';
import LertScreen from "~components/organisms/LertScreen";

const TABLE_HEADERS = ["Admin Mail", "Role"]

const UserRoles = () => {

    let example = [
        {User: "admin1@ibm.com", Role: "CEO"},
        {User: "admin3@ibm.com", Role: "Boss"},
    ]

    const [delegate, setDelegate] = useState("")

    return (
        <LertScreen>
            <LertText 
                text="Users" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary}
            />

            <HStack 
                flex={1}
                marginTop={"5%"}
            >
                
                <VStack flex={1}>
                    <SearchInput 
                        items={example.map(item => item.User)}
                        placeholder={"Search user"}
                        value={delegate}
                        setValue={setDelegate}
                    />
                </VStack>

                <VStack style={{ flex: 2 }}/>
                
                <VStack flex={1}>
                    <LertButton 
                        title="Login Profile" 
                        type="primary" 
                        disabled={delegate === ""}
                        onPress={() => {
                            alert(`Login as ${delegate}`)
                        }}
                    />
                </VStack>
                
            </HStack>

            <View style={{ 
                    marginTop: "3%", 
                    position: 'relative', 
                    zIndex: -1 
                }}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={example} 
                    flexValues={[2, 2, 3]}
                />
            </View> 

        </LertScreen>
    )
};

export default UserRoles;