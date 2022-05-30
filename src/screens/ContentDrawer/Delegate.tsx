import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { HStack, VStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "~store/store";
import { allDelegates } from "~store/delegates/selectors";

import LertText from '~components/atoms/LertText';
import LertButton from "~components/atoms/LertButton";
import Dropdown from "~components/molecules/Dropdown";
import SearchInput from "~components/molecules/SearchInput";
import Table from "~components/organisms/Table";

import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';

const Delegate = () => {

    let example = [
        {AdminMail: "admin1@ibm.com", ManagerMail: "manager1@ibm.com", Status: "Active"},
        {AdminMail: "admin2@ibm.com", ManagerMail: "manager2@ibm.com", Status: "Inactive"},
    ]

    const [delegate, setDelegate] = useState("")

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch();

    // Delegte - State
    const delegates = useSelector(allDelegates);

    return (
        <View style ={{ marginHorizontal: "5%" }} >
            <LertText 
                text="Delegate Section" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
                style={{ paddingTop:"6%" }}
            />

            <HStack 
                flex={1}
                marginTop={"2%"}
            >
                
                <VStack flex={1}>
                    <SearchInput 
                        items={example.map(item => item.ManagerMail)}
                        placeholder={"Search Manager..."}
                        value={delegate}
                        setValue={setDelegate}
                    />
                </VStack>

                <VStack style={{ flex: 2 }}/>
                
                <VStack flex={1}>
                    <LertButton 
                        title="Select Profile" 
                        type="primary" 
                        disabled={delegate === ""}
                        onPress={() => {
                            alert(`Login as ${delegate}`)
                        }}
                    />
                </VStack>
                
            </HStack>

            <View style={{ 
                    marginTop: "5%", 
                    position: 'relative', 
                    zIndex: -1 
                }}
            >
                <Table 
                    headers={["Admin Mail", "Manager Mail", "Status"]} 
                    items={example} 
                    flexValues={[2, 2, 3]} 
                    amount={3}
                />
            </View> 

        </View>
    )
};

export default Delegate;