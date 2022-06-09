import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

import { userSelector } from "~store/user";

import CustomDrawer from "~components/organisms/CustomDrawer";

import Home from "~screens/ContentDrawer/Home";
import Types from "~screens/ContentDrawer/Types";
import ICAS from "~screens/ContentDrawer/ICAS";
import Delegate from "~screens/ContentDrawer/Delegate";
import Employee from "~screens/ContentDrawer/Employee";
import ExtraHours from "~screens/ContentDrawer/ExtraHours";
import ManageManagerFunctions from "~screens/ContentDrawer/ManageManagerFunctions";
import Expenses from "~screens/ContentDrawer/Expenses";
import Recovery from "~screens/ContentDrawer/Recovery";
import ExpensesTypes from "~screens/ContentDrawer/ExpensesTypes";
import CurrentPeriod from "~screens/ContentDrawer/CurrentPeriod";

import containerStyles from "~styles/containers";
import FixedHeadingStyles from "~styles/fixedHeadings";
import theme from "~theme/theme";
import { CONTENT_DRAWER_SCREENS } from "~utils/screenNames";
import { Box } from "native-base";
import { USER_ROLES } from "~utils/constants";
import UserRoles from "~screens/ContentDrawer/UserRoles";
import ManagersForIcaAdmin from "~screens/ContentDrawer/ManagersForIcaAdmin";


const LABELS_STYLE = {
    ...FixedHeadingStyles.heading,
    color: theme.colors.icons.secondary,
    fontFamily: theme.fonts.body, 
};

const ICONS_STYLE = {
    size: LABELS_STYLE.fontSize,
    color: LABELS_STYLE.color,
}

const Drawer = createDrawerNavigator()

const ContentDrawer = () => {

    // Get Role from State
    const user = useSelector(userSelector);
    const role = user.role;

    return (
        <Box flex={1}>
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'permanent',
                    headerShown: false,
                    
                    sceneContainerStyle: containerStyles.contentScreen,

                    drawerContentStyle: { width: "10%"},
                    // @ts-ignore
                    drawerLabelStyle: { 
                        fontFamily: LABELS_STYLE.fontFamily,
                        fontSize: LABELS_STYLE.fontSize,
                        fontWeight: LABELS_STYLE.fontWeight,
                        lineHeight: LABELS_STYLE.lineHeight,
                        letterSpacing: LABELS_STYLE.letterSpacing,
                        margin: 0,
                    },
                    drawerItemStyle: {
                        borderRadius: 0,
                    },
                    drawerActiveBackgroundColor: theme.colors.components.selectedState,
                    drawerActiveTintColor: LABELS_STYLE.color,
                }}
                
                initialRouteName='Home'

                drawerContent={ (props) => 
                    <CustomDrawer {...props} />
                }
            >

                <Drawer.Screen 
                    name={CONTENT_DRAWER_SCREENS.Home}
                    component={Home}
                    options={{
                        drawerIcon: (props) =>
                            <Ionicons 
                                {...ICONS_STYLE}
                                name="home-outline" 
                            />,
                    }}
                />

                {role === USER_ROLES.OP_MANAGER &&
                    <Drawer.Group>
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.Types}
                            component={Types}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="grid-outline" 
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.ICAS}
                            component={ICAS}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="ios-receipt-outline" 
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.ExpensesTypes}
                            component={ExpensesTypes}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="cash-outline"
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.ExtraHours}
                            component={ExtraHours}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="alarm-outline" 
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.ManageManagerFunctions}
                            component={ManageManagerFunctions}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="people-outline" 
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.Delegate}
                            component={Delegate}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="people-outline" 
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.CurrentPeriod}
                            component={CurrentPeriod}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons
                                        {...ICONS_STYLE} 
                                        name="calendar-outline"
                                    />
                            }}
                        />
                    </Drawer.Group>
                }

                {role === USER_ROLES.MANAGER &&
                    <Drawer.Group>
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.Delegate}
                            component={Delegate}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="people-outline" 
                                    />
                            }}
                            
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.Employee}
                            component={Employee}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="person-outline" 
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.Expenses}
                            component={Expenses}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="cart-outline" 
                                    />
                            }}
                        />
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.Recovery}
                            component={Recovery}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons
                                        {...ICONS_STYLE} 
                                        name="sync-outline"
                                    />
                            }}
                        />
                    </Drawer.Group>
                }

                {role === USER_ROLES.ICA_ADMIN &&
                    <Drawer.Group>
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.ManagersForIcaAdmin}
                            component={ManagersForIcaAdmin}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="person-outline" 
                                    />
                            }}
                        />
                    </Drawer.Group>
                }

                {role === USER_ROLES.ADMIN &&
                    <Drawer.Group>
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.UserRoles}
                            component={UserRoles}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="glasses-outline" 
                                    />
                            }}
                        />
                    </Drawer.Group>
                }

            </Drawer.Navigator>
        </Box>
    )
}

export default ContentDrawer;