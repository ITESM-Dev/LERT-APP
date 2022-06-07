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

const TABLE_HEADERS = ["Manager", "ICA Admin"]

const Delegate = () => {

    let example = [
        { ManagerMail: "manager1@ibm.com", AdminMail: "admin1@ibm.com" },
        { ManagerMail: "manager2@ibm.com", AdminMail: "admin2@ibm.com" },
    ]
    
    const [manager, setManager] = useState("")
    const [delegate, setDelegate] = useState("")
    const [error, setError] = useState<string | null>(null)

    // User - State
    const user = useSelector(userSelector) as UserType;

    /*  If user.role === manager
            - Get All their delegates
            - Disable Manager Mail Input
        
        If user.role !== manager
            - Get All managers with their delegate
    */

    useEffect(() => {
        if (user.role === USER_ROLES.MANAGER) {
            setManager(user.mail)
        }
    }, [user, manager])

    const handleSubmit = () => {

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
                            items={example.map(item => item.ManagerMail)}
                            isDisabled={user.role === USER_ROLES.MANAGER}
                            placeholder={"Search Manager"}
                            value={manager}
                            setValue={setManager}
                        />
                    </VStack>

                    <VStack 
                        flex={1} 
                        marginX={10}
                    >
                        <SearchInput 
                            items={example.map(item => item.AdminMail)}
                            placeholder={"Search ICA Admin"}
                            value={delegate}
                            setValue={setDelegate}
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
                    items={example} 
                    flexValues={[1, 1]}
                />
            </View> 

        </LertScreen>
    )
};

export default Delegate;