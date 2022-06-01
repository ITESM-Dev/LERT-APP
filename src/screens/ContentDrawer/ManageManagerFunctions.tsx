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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "~store/store";

import { allManagers } from "~store/managers/selectors";
import LertScreen from "~components/organisms/LertScreen";

const dropdownItems = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
]

const TABLE_HEADERS = ["Manager", "Status", "Last Update"]

const ManageManagerFunctions = () => {

    let example = [
        {Manager: "IBM1", Status: "Active", LastUpdate: "02/02/22"},
        {Manager: "IBM2", Status: "Inactive", LastUpdate: "02/10/22"},
    ]

    const [manager, setManager] = useState("");

    // Store Dispatcher
    const dispatch: AppDispatch = useDispatch();

    // Managers - State
    const managers = useSelector(allManagers);

    return (
        <LertScreen>
            
            <LertText text="Activate/Deactivate Manager Functions" type={textTypes.display04} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"6%"}}/>

            <Overlay maxWidth={"50%"} maxHeight={"50%"} buttonTitle="Modify"> 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>
                            <LertText text="Manager" type={textTypes.heading} color={Theme.colors.text.primary}/>
                            <LertInput text={manager} setText={setManager} placeholder={"Manager"}/>
                            <LertText text="Status" type={textTypes.heading} color={Theme.colors.text.primary} style={{paddingTop:"10%"}}/>
                            <Dropdown placeholder="Status" items={dropdownItems}/>
                        </VStack>
                    </HStack>
                </>

            </Overlay>

            <LertText text="Extra Hours List" type={textTypes.display01} color={Theme.colors.text.primary} style={{paddingLeft:"10%", paddingTop:"4%"}}/>

            <Table 
                headers={TABLE_HEADERS} 
                items={example} 
                flexValues={[1, 1, 1]} 
            />

        </LertScreen>
    )
};

export default ManageManagerFunctions;