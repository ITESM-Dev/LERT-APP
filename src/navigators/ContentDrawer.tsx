import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from '@expo/vector-icons/Ionicons';

import Home from "~screens/ContentDrawer/Home";
import Logout from "~screens/ContentDrawer/Logout";
import Types from "~screens/ContentDrawer/Types";
import ICAS from "~screens/ContentDrawer/ICAS";
import Delegate from "~screens/ContentDrawer/Delegate";
import Employee from "~screens/ContentDrawer/Employee";
import ExtraHours from "~screens/ContentDrawer/ExtraHours";
import ManageManagerFunctions from "~screens/ContentDrawer/ManageManagerFunctions";
import EditManagerInformation from "~screens/ContentDrawer/EditManagerInformation";
import Expenses from "~screens/ContentDrawer/Expenses";
import Recovery from "~screens/ContentDrawer/Recovery";
import Reports from "~screens/ContentDrawer/Reports";
import CustomDrawer from "~components/organisms/CustomDrawer";
import containerStyles from "~styles/containers";
import ExpensesTypes from "~screens/ContentDrawer/ExpensesTypes";
import FixedHeadingStyles from "~styles/fixedHeadings";
import theme from "~theme/theme";
import LertText from "~components/atoms/LertText";


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

    /** Change this to use Redux */
    const role = 'OPManager';

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
                        margin: 0
                    },
                    drawerActiveBackgroundColor: theme.colors.components.selectedState,
                    drawerActiveTintColor: LABELS_STYLE.color,
                }}
                
                initialRouteName='Home'

                drawerContent={ (props) => <CustomDrawer {...props} /> }
            >

                <Drawer.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        drawerIcon: (props) =>
                            <Ionicons 
                                {...ICONS_STYLE}
                                name="home-outline" 
                            />
                    }}
                />

                {role === 'OPManager' &&
                    <Drawer.Group>
                        <Drawer.Screen 
                            name="Types"
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
                            name="ICAS"
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
                            name="Expenses Types"
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
                            name="Extra Hours"
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
                            name="Manage Manager Functions"
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
                            name="Edit Manager Information"
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
                            name="Delegate"
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
                            name="Employee"
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
                            name="Expenses"
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
                            name="Recovery"
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
                            name="Reports"
                            component={Reports}
                            options={{
                                drawerIcon: () => 
                                    <Ionicons 
                                        {...ICONS_STYLE}
                                        name="documents-outline" 
                                    />
                            }}
                        />
                    </Drawer.Group>
                }

                {role === 'Admin' &&
                    <Drawer.Group>
                        <Drawer.Screen 
                            name="Delegate"
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