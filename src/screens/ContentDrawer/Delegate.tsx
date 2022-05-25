import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";

const dropdownCountries = [
    { label: 'México', value: 'mexico' },
    { label: 'India', value: 'india' },
]

const dropdownTypes = [
    { label: 'First', value: 'first' },
    { label: 'Secondary', value: 'secondary' },
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
                <LertInput text={delegate} setText={setDelegate} placeholder={"Select the profile you want to log in"} style={{width:"30%", marginRight:"4%"}}/>
                <Overlay maxWidth={"50%"} maxHeight={"50%"} buttonTitle="Submit"> 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Profile" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={delegate} setText={setDelegate} placeholder={"Select the profile you want to log in"}/>
                        </VStack>
                    </HStack>
                </>

                </Overlay>
            </HStack>

            <LertText text="Delegates:" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table headers={["Admin Mail", "Manager Mail", "Status"]} items={example} flexValues={[2, 2, 3]} amount={3}/>

        </View>
    )
};

export default Delegate;