import { Text, View } from "react-native";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HStack, VStack } from "native-base";

import { 
    useGetAvailableResourcesQuery, 
    useGetManagerICAQuery 
} from "~store/api";
import { userSelector } from "~store/user";
import { 
    EmployeeType, 
    allEmployees 
} from "~store/employees";

import LertText from '~components/atoms/LertText';
import LertInput from '~components/molecules/LertInput';
import SearchInput from "~components/molecules/SearchInput";
import Table from "~components/organisms/Table";
import Overlay from '~components/organisms/Overlay';
import LertScreen from "~components/organisms/LertScreen";

import Theme from '../../theme/theme';
import * as textTypes from '~styles/constants/textTypes';


const TABLE_HEADERS = ["Employee Num", "Employee Mail", "Manager", "ICA Number", "Band"]

const Employee = () => {

    let example: EmployeeType[] = [
        {
            employeeNum: 121, 
            name: "Leonardo Galindo", 
            manager: "Ulises Venegas",  
            ICA: 5, 
            band: 4,
            id: 121
        },
        {
            employeeNum: 122,
            name: "Rafael Gómez", 
            manager: "Ulises Venegas",  
            ICA: 1, 
            band: 1,
            id: 122, 
        },
    ]

    const [employeeNum, setemployeeNum] = useState("");
    const [employeeMail, setEmployeeMail] = useState("");
    const [manager, setManager] = useState("");
    const [ICANum, setICANum] = useState("");
    const [band, setBand] = useState("");

    // Employees - State
    const employees = useSelector(allEmployees);

    // User - State
    const user = useSelector(userSelector);

    // ICA Num
    const managerICA = useGetManagerICAQuery()

    // Employee Mails (Resources)
    const availableResources = useGetAvailableResourcesQuery()

    useEffect(() => {
        setICANum(managerICA.data?.idCode ? managerICA.data?.idCode : "")
        setManager(user.mail)
    }, [managerICA.data])

    return (
        <LertScreen>
            <LertText 
                text="Employees" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary} 
            />

            <Overlay 
                minWidth={"50%"}
                minHeight={"50%"}
                buttonTitle="Add Employee" 
                handleSubmit={() => {}} 
                buttonType={"primary"}           
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>

                            <LertText 
                                text={TABLE_HEADERS[0]}
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />

                            <LertInput 
                                text={employeeNum} 
                                setText={setemployeeNum} 
                                placeholder={TABLE_HEADERS[0]}
                            />

                            <LertText 
                                text={TABLE_HEADERS[1]}
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />

                            <SearchInput  
                                placeholder={TABLE_HEADERS[1]}
                                value={employeeMail}
                                setValue={setEmployeeMail}
                                items={
                                    availableResources.data 
                                    ? availableResources.data?.map(item => item.mail)
                                    : []
                                }
                            />

                            <LertText 
                                text={TABLE_HEADERS[4]}
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />

                            <LertInput 
                                text={band} 
                                setText={setBand} 
                                placeholder={TABLE_HEADERS[4]}
                            />

                        </VStack>
                        <VStack alignItems={"flex-start"}>

                            <LertText 
                                text={TABLE_HEADERS[3]}
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />

                            <LertInput 
                                text={ICANum} 
                                isDisabled={true}
                                setText={setICANum} 
                                placeholder={TABLE_HEADERS[3]}
                            />

                            <LertText 
                                text={TABLE_HEADERS[2]}
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />

                            <LertInput 
                                text={manager} 
                                isDisabled={true}
                                setText={setManager} 
                                placeholder={TABLE_HEADERS[2]}
                            />
                        </VStack>
                    </HStack>
                </>
            </Overlay>

            <View style={{ 
                    marginTop: "3%",
                }}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={employees} 
                    flexValues={[1, 2, 2, 1, 1]}
                />
            </View>
        </LertScreen>
    )
};

export default Employee;