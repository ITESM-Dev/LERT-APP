import { useState, useEffect, useRef } from "react";
import { View, Animated } from "react-native";


import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItemList, useDrawerProgress } from "@react-navigation/drawer";

import ProfileInfo from "~components/molecules/ProfileInfo";
import theme from "~theme/theme";

import { AppDispatch } from "~store/store";
import { setUser, userSelector } from "~store/user";
import { getUserInfoThunk } from "~store/user/thunks";

const CustomDrawer = (props: any) => {

    const user = useSelector(userSelector);
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        //if (Object.keys(user).length === 0) dispatch(getUserInfoThunk("123abc%23"))
        dispatch(setUser({
            "id": "123abc#",
            "name": "Rafael Gomez",
            "mail": "rafa@tec.mx",
            "role": "Manager"
        }))
    }, [])
    
    const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
    const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

    const scrollIndicatorSize =
        completeScrollBarHeight > visibleScrollBarHeight
            ? (visibleScrollBarHeight * visibleScrollBarHeight) / completeScrollBarHeight
            : visibleScrollBarHeight;

    const scrollIndicator = useRef(new Animated.Value(0)).current

    const difference =
        visibleScrollBarHeight > scrollIndicatorSize
            ? visibleScrollBarHeight - scrollIndicatorSize
            : 1;
            
    const scrollIndicatorPosition = Animated
        .multiply(
            scrollIndicator,
            visibleScrollBarHeight / completeScrollBarHeight
        )
        .interpolate({
            inputRange: [0, difference],
            outputRange: [0, difference],
            extrapolate: 'clamp'
        })
        

    const ScrollBar = () => 
        <>
            <View 
                style={{
                    height: '50%',
                    marginHorizontal: 1,
                    width: 3,
                    alignItems: 'center',
                    borderRadius: 2,
                    backgroundColor: theme.colors.components.background
                }}
            >
                <Animated.View
                    style={{
                        height: scrollIndicatorSize * 0.96,
                        width: 3,
                        borderRadius: 2,
                        backgroundColor: theme.colors.components.selectedState,
                        transform: [{ translateY: scrollIndicatorPosition  }]
                    }}
                />
            </View>
        </>

    return (
      <SafeAreaView style={{ flex: 1 }}>

        {/* Top Large Image */}
        <ProfileInfo
            name={user.name}
            role={user.role}
        />

        {/* Options List */}
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <DrawerContentScrollView 
                {...props}

                showsVerticalScrollIndicator={false}

                onContentSizeChange={height => {
                    setCompleteScrollBarHeight(height);
                }}

                onLayout={({
                    nativeEvent: {
                        layout: { height }
                    }
                }) => {
                    setVisibleScrollBarHeight(height);
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
            
                <DrawerItemList 
                    {...props} 
                />
            </DrawerContentScrollView>
            
            <ScrollBar />
        </View>

      </SafeAreaView>
    );
};

export default CustomDrawer;