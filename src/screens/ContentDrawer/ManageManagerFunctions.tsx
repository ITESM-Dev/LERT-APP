import { Text, View } from "react-native";

import Table from "~components/organisms/Table";
import LertText from '~components/atoms/LertText';
import Overlay from '~components/organisms/Overlay';
import LertInput from '~components/molecules/LertInput';
import * as textTypes from '~styles/constants/textTypes';

import Theme from '../../theme/theme';
import { useState } from "react";
import { Box, HStack, VStack } from "native-base";
import Dropdown from "~components/molecules/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "~store/store";

import { allManagers } from "~store/managers/selectors";
import LertScreen from "~components/organisms/LertScreen";
import SearchInput from "~components/molecules/SearchInput";
import { useGetManagerFunctionsQuery } from "~store/api";

const dropdownItems = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
]

const TABLE_HEADERS = ["Manager", "Status", "Recovery Status", "Last Update"]

const ManageManagerFunctions = () => {

    const [manager, setManager] = useState("");

    const [error, setError] = useState<string | null>(null)

    useGetManagerFunctionsQuery()

    // Managers - State
    const managers = useSelector(allManagers);

    /**
     * @todo getAvailableManagers for SearchInput
     * @todo assignManagerToOP
     */

    const handleSubmit = () => {

    }

    return (
        <LertScreen>
            
            <LertText 
                text="Manager Functions" 
                numberOfLines={2}
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            <Overlay 
                minWidth={"20%"}
                minHeight={"30%"}
                buttonTitle="Assign Manager" 
                handleSubmit={handleSubmit}
                buttonType={"primary"}    
                error={error}
                setError={setError}        
            > 
                <HStack 
                    flex={1}
                    justifyContent={'center'}
                >
                    <VStack>
                        <LertText 
                            text="Manager" 
                            type={textTypes.heading} 
                            color={Theme.colors.text.primary}
                        />
                        <SearchInput 
                            placeholder={"Search Manager"}
                            value={manager} 
                            setValue={setManager} 
                            items={[]}
                        />
                    </VStack>
                </HStack>

            </Overlay>

            <Box
                marginTop={30}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={managers} 
                    flexValues={[1, 1, 1, 1]} 
                />
            </Box>

        </LertScreen>
    )
};

export default ManageManagerFunctions;