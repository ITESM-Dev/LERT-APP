import { useEffect, useState } from "react";
import { View } from "react-native";
import { HStack, VStack } from "native-base";

import { useSelector } from "react-redux";

import LertText from '~components/atoms/LertText';
import SearchInput from "~components/molecules/SearchInput";
import Table from "~components/organisms/Table";

import * as textTypes from '~styles/constants/textTypes';

import Theme from '~theme/theme';
import LertScreen from "~components/organisms/LertScreen";
import { userSelector, UserType } from "~store/user";
import { USER_ROLES } from "~utils/constants";
import Overlay from "~components/organisms/Overlay";
import { useGetAvailableDelegatesQuery, useGetIcaAdminManagerQuery, useGetIcaAdminsQuery, useGetManagersAndIcaAdminsQuery, useGetManagersNoIcaAdminsQuery, useOpAssignIcaAdminManagerMutation, useSetIcaAdminMutation, useSetOPManagerMutation } from "~store/api";
import { ManagerIcaAdminType } from "~store/api/types";

const TABLE_HEADERS = ["Manager", "ICA Admin"]

const Delegate = () => {

    let example = [
        { ManagerMail: "manager1@ibm.com", AdminMail: "admin1@ibm.com" },
        { ManagerMail: "manager2@ibm.com", AdminMail: "admin2@ibm.com" },
    ]
    
    const [manager, setManager] = useState("")
    const [delegate, setDelegate] = useState("")

    const [error, setError] = useState<string | null>(null)

    const resetForm = () => {
        setManager("");
        setDelegate("");
        setError(null);
    }

    // User - State
    const user = useSelector(userSelector) as UserType; //UserType?

    // This is used on the button when confirming the input
    const [assignDelegate, responseOp] = useSetIcaAdminMutation();
    const [assignBoth, responseIca] = useOpAssignIcaAdminManagerMutation();

    //const [assignDelegate, response] = useState(null);
    const availableManagers = useGetManagersNoIcaAdminsQuery();

    //This is for the Table 
    var tableItems = useGetIcaAdminManagerQuery(); //currently does not exist
    if(user.role === USER_ROLES.OP_MANAGER){
        tableItems = useGetManagersAndIcaAdminsQuery();
    }

    var availableDelegates = useGetAvailableDelegatesQuery()
    if(user.role === USER_ROLES.OP_MANAGER){
        availableDelegates = useGetIcaAdminsQuery();
    }

    useEffect(() => {
        if (user.role === USER_ROLES.MANAGER) {
            setManager(user.mail)
        }
    }, [user, manager])

    const handleSubmit = () => {
        const delegateForm: ManagerIcaAdminType = {
            managerMail: manager,
            icaAdminMail: delegate,
        }
        if (user.role === USER_ROLES.MANAGER){
            assignBoth(delegateForm)
                .unwrap()
                .then(() => resetForm())
                .catch(error => setError(
                    "Something went wrong, try again"
                ))
        } else {
            assignDelegate(delegateForm)
                .unwrap()
                .then(() => resetForm())
                .catch(error => setError(
                    "Something went wrong, try again"
                ))
        }
    }

    return (
        <LertScreen>
            <LertText 
                text="Delegate Section" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary}
            />

            <Overlay 
                minWidth={"40%"}
                minHeight={"40%"}
                buttonTitle="Delegate ICA Admin" 
                handleSubmit={handleSubmit}
                buttonType={"primary"}    
                error={error}
                setError={setError}
            >
                <HStack
                    space={2}
                    justifyContent="space-evenly"
                    alignItems={"center"}
                >
                    <VStack 
                        flex={1}
                        marginX={10}
                    >
                        <SearchInput 
                            isDisabled={user.role === USER_ROLES.MANAGER}
                            placeholder={"Search Manager"}
                            value={manager}
                            setValue={setManager}
                            items={
                                availableManagers.data
                                ? availableManagers.data?.map(item => item.mail)
                                : []
                            }
                        />
                    </VStack>

                    <VStack 
                        flex={1} 
                        marginX={10}
                    >
                        <SearchInput 
                            placeholder={"Search ICA Admin"}
                            value={delegate}
                            setValue={setDelegate}
                            items={
                                availableDelegates.data
                                ? availableDelegates.data?.map(item => item.icaAdminMail)
                                : []
                            }
                        />
                    </VStack>
                </HStack>
            </Overlay>

            <View style={{ 
                    marginTop: 30, 
                    position: 'relative', 
                    zIndex: -1 
                }}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    flexValues={[1, 1]}
                    items={
                        tableItems.data
                        ? tableItems.data
                        : []
                    }
                />
            </View> 

        </LertScreen>
    )
};

export default Delegate;