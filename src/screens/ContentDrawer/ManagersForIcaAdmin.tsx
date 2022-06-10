import { useState } from "react";
import { View } from "react-native";
import { HStack, VStack } from "native-base";

import LertText from "~components/atoms/LertText";
import LertButton from "~components/atoms/LertButton";
import SearchInput from "~components/molecules/SearchInput";
import LertScreen from "~components/organisms/LertScreen";
import Table from "~components/organisms/Table";

import theme from "~theme/theme";
import * as textTypes from '~styles/constants/textTypes';
import { LoginICAAdminForm, useAssignTokenAuthMutation, useGetManagersIcaAdminQuery, useLoginICAAdminMutation } from "~store/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "~store/user";

const TABLE_HEADERS = ["Manager"]

const ManagersForIcaAdmin = () => {

    const [manager, setManager] = useState("")

    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    // Managers assigned to ICA Admin
    const { data } = useGetManagersIcaAdminQuery()

    // Calls for Login In as Manager
    const [assignTokenAuth] = useAssignTokenAuthMutation();
    const [loginICAAdmin] =  useLoginICAAdminMutation()

    const handleLogin = async () => {
        
        // @ts-ignore
        const { data } = await assignTokenAuth(manager)
        
        const loginIcaAdminForm: LoginICAAdminForm = {
            mailManager: manager,
            token: data
        }

        loginICAAdmin(loginIcaAdminForm)
            .unwrap()
            .then(response => {
                alert(`Login as ${manager}, successful`)
                dispatch(setUser(response))
            })
            .catch(error => console.error(error)) 
    }

    return (
        <LertScreen isLoading={data}>
            <LertText 
                text="Assigned to Managers" 
                type={textTypes.display04} 
                color={theme.colors.text.primary}
            />

            <HStack 
                flex={1}
                marginTop={"5%"}
            >
                
                <VStack flex={1}>
                    <SearchInput 
                        items={data 
                            ? data.map(item => item.mail)
                            : []
                        }
                        placeholder={"Search user"}
                        value={manager}
                        setValue={setManager}
                    />

                </VStack>

                <VStack flex={2} />
                
                <VStack flex={1}>
                    <LertButton 
                        title="Login" 
                        type="primary" 
                        disabled={manager === "" }
                        onPress={handleLogin}
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
                    items={data ? data : []} 
                    flexValues={[1]}
                />
            </View> 

        </LertScreen>
    )
};

export default ManagersForIcaAdmin;