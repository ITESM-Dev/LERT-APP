import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import LertButton from "~components/atoms/LertButton";
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useEffect, useState } from "react";
import { HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";
import SearchInput from "~components/molecules/SearchInput";



const Delegate = () => {

    let example = [
        {AdminMail: "admin1@ibm.com", ManagerMail: "manager1@ibm.com", Status: "Active"},
        {AdminMail: "admin2@ibm.com", ManagerMail: "manager2@ibm.com", Status: "Inactive"},
    ]

    const [delegate, setDelegate] = useState("")

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
                        delegate={delegate}
                        setDelegate={setDelegate}
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