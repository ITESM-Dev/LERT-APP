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
import EditManagerInformation from "~screens/ContentDrawer/EditManagerInformation";
import Expenses from "~screens/ContentDrawer/Expenses";
import Recovery from "~screens/ContentDrawer/Recovery";
import ExpensesTypes from "~screens/ContentDrawer/ExpensesTypes";
import CurrentPeriod from "~screens/ContentDrawer/CurrentPeriod";

import containerStyles from "~styles/containers";
import FixedHeadingStyles from "~styles/fixedHeadings";
import theme from "~theme/theme";
import { useEffect } from "react";
import LegalMenu from "~components/molecules/LegalMenu";
import { CONTENT_DRAWER_SCREENS } from "~utils/screenNames";


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
        <>
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'permanent',
                    headerShown: false,
                    sceneContainerStyle: containerStyles.contentScreen,

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
                    <>
                        <CustomDrawer {...props} />
                    </> 
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

                {role === 'OPManager' &&
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
                            name={CONTENT_DRAWER_SCREENS.EditManagerInformation}
                            component={EditManagerInformation}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="pencil-outline" 
                                    />
                            }}
                        />
                    </Drawer.Group>
                }

                {role === 'Manager' &&
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
                        <Drawer.Screen 
                            name={CONTENT_DRAWER_SCREENS.CurrentPeriod}
                            component={CurrentPeriod}
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

                {role === 'Admin' &&
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
                    </Drawer.Group>
                }

            </Drawer.Navigator>
        </>

        

    )
}

export default ContentDrawer;