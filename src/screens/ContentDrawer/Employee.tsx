import { Text, View } from "react-native";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HStack, VStack } from "native-base";

import { 
    EmployeeForm,
    useAssignResourceToManagerMutation,
    useGetAvailableResourcesQuery, 
    useGetBandTypesQuery, 
    useGetManagerICAQuery, 
    useGetResourcesQuery
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
import { allBandTypes } from "~store/bandTypes/selectors";


const TABLE_HEADERS = ["Employee Num", "Employee Mail", "Manager", "ICA Number", "Band"]

const Employee = () => {

    const [employeeMail, setEmployeeMail] = useState("");
    const [manager, setManager] = useState("");
    const [ICANum, setICANum] = useState("");
    const [band, setBand] = useState("");

    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const resetForm = () => {
        setEmployeeMail("")
        setBand("")
        setError(null)
    }

    // Employees - State
    const employees = useSelector(allEmployees);

    // User - State
    const user = useSelector(userSelector);

    // Auto-fetch Employees
    useGetResourcesQuery()
    
    // API Call
    const [assignResource, response] = useAssignResourceToManagerMutation()
    
    // ICA Num
    const managerICA = useGetManagerICAQuery()

    // Employee Mails (Resources)
    const availableResources = useGetAvailableResourcesQuery()

    // Band Types
    useGetBandTypesQuery()
    const bandTypes = useSelector(allBandTypes)

    useEffect(() => {
        if (managerICA.data !== undefined) {
            setICANum(managerICA.data!.icaCode)
            setManager(user.mail)
        }
    }, [managerICA.data])

    const handleSubmit = () => {
        const employeeForm: EmployeeForm = {
            resourceMail: employeeMail,
            managerMail: manager,
            icaCode: ICANum,
            band: band,
        }
        assignResource(employeeForm)
            .unwrap()
            .then(() => resetForm())
            .catch(error => setError(
                "Something went wrong, try again"
            ))
    }

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
                buttonType={"primary"}           
                handleSubmit={handleSubmit}
                error={error}
                setError={setError} 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            > 
                <>
                    <HStack space={2} justifyContent="space-evenly">
                        <VStack alignItems={"flex-start"}>

                            <LertText 
                                text={TABLE_HEADERS[1]}
                                type={textTypes.heading} 
                                color={Theme.colors.text.primary} 
                                style={{paddingTop:"10%"}}
                            />

                            <SearchInput  
                                placeholder={"Search Employee"}
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

                            <SearchInput  
                                placeholder={"Search Band"}
                                value={band}
                                setValue={setBand}
                                items={bandTypes.map(band => band.band)}
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

            <View 
                style={{ 
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