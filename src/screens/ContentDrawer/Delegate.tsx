import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import LertButton from "~components/atoms/LertButton";
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";

const dropdownProfiles = [
    { label: "person1@ibm.com", value: 'person1@ibm.com', id: "123" },
    { label: "person2@ibm.com", value: 'person2@ibm.com', id: "124" },
    { label: "person3@ibm.com", value: 'person3@ibm.com', id: "125" },
    { label: "person4@ibm.com", value: 'person4@ibm.com', id: "126" },
    { label: "person5@ibm.com", value: 'person5@ibm.com', id: "127" },
]

const Delegate = () => {

    let example = [
        {AdminMail: "admin1@ibmcom", ManagerMail: "manager1@ibmcom", Status: "Active"},
        {AdminMail: "admin2@ibmcom", ManagerMail: "manager2@ibmcom", Status: "Inactive"},
    ]

    const [delegate, setDelegate] = useState("");

    return (
        <View>
            
            <LertText text="Delegate Section" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <HStack alignItems={"center"} justifyContent={"center"} marginTop={"2%"}>
                
                <VStack flex={2}/>

                <VStack flex={2} marginX={"15%"}>
                    <Dropdown placeholder="Profile" items={dropdownProfiles}/>
                </VStack>

                <VStack flex={1}/>

                <VStack flex={2}>
                    <LertButton title="Select Profile" type="primary" onPress={() => {}}/>
                </VStack>

                <VStack flex={2}/>
                
            </HStack>

            <LertText text="Delegates:" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["Admin Mail", "Manager Mail", "Status"]} items={example} flexValues={[2, 2, 3]} amount={3}/>

        </View>
    )
};

export default Delegate;