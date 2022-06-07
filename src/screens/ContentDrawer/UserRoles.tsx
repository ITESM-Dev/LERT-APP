import { useEffect, useRef, useState } from "react";
import { View, Animated } from "react-native";
import { HStack, ScrollView, VStack } from "native-base";

import LertText from '~components/atoms/LertText';
import LertButton from "~components/atoms/LertButton";
import SearchInput from "~components/molecules/SearchInput";
import Dropdown from '~components/molecules/Dropdown'
import Table from "~components/organisms/Table";

import * as textTypes from '~styles/constants/textTypes';

import Theme from '~theme/theme';
import LertScreen from "~components/organisms/LertScreen";
import { USER_ROLES_ARRAY } from "~utils/constants";
import { useGetAllUsersQuery, UserRoleForm, useUpdateUserRoleMutation } from "~store/api";

const TABLE_HEADERS = ["Admin Mail", "Role"]

const UserRoles = () => {

    let example = [
        {User: "admin1@ibm.com", Role: "CEO"},
        {User: "admin3@ibm.com", Role: "Boss"},
    ]

    const [mail, setMail] = useState("")
    const [role, setRole] = useState("")

    // All Users
    const { data } = useGetAllUsersQuery()

    // Assign Role
    const [updateUserRole, response] = useUpdateUserRoleMutation()

    const handleUpdateRole = () => {
        const userRoleForm: UserRoleForm = {
            mail: mail,
            role: role,
        }
        updateUserRole(userRoleForm)
            .unwrap()
            .then(() => alert("Updated"))
    }

    return (
        <LertScreen>
            <LertText 
                text="Users" 
                type={textTypes.display04} 
                color={Theme.colors.text.primary}
            />

            <HStack 
                flex={1}
                marginTop={"5%"}
            >
                
                <VStack flex={1}>
                    <SearchInput 
                        items={data !== undefined ? data.map(item => item.mail) : []}
                        placeholder={"Search user"}
                        value={mail}
                        setValue={setMail}
                    />

                </VStack>

                <VStack 
                    style={{ 
                        flex: 1,
                        marginHorizontal: 50
                    }}
                >
                    <Dropdown 
                        placeholder="Select Role"
                        value={role}
                        setValue={setRole}
                        items={USER_ROLES_ARRAY}
                    />
                </VStack>
                
                <VStack flex={1}>
                    <LertButton 
                        title="Update Role" 
                        type="primary" 
                        disabled={mail === "" || role === ""}
                        onPress={handleUpdateRole}
                    />
                </VStack>
                
            </HStack>

            <View style={{ 
                    marginTop: 30, 
                    position: 'relative', 
                    zIndex: -1 
                }}
            >
                <Table 
                    headers={TABLE_HEADERS} 
                    items={data !== undefined ? data : []} 
                    flexValues={[1, 1]}
                />
            </View> 

        </LertScreen>
    )
};

export default UserRoles;